import { mongo, redis } from './db.js'

export const addProducts = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  }

  try {
    await mongo.insertOne(product)
    res.status(200).json({ message: product })
  } catch (e) {
    res.status(500).json({ message: `Product not created : ${e}` })
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await mongo.find({}).toArray()
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product not found : ${e}` })
  }
}

export const getProductByName = async (req, res) => {
  try {
    const productName = req.params.name

    const productsRedis = await redis.get(productName)

    if (!productsRedis) {
      const productsMongo = await mongo
        .find({ name: { $regex: productName, $options: 'i' } })
        .toArray()

      await redis.set(productName, JSON.stringify(productsMongo))
      await redis.expire(productName, 3600)

      res.status(200).json({ response: productsMongo })
    } else {
      res.status(200).json({ response: JSON.parse(productsRedis) })
    }
  } catch (e) {
    res.status(500).json({ message: `Product not found: ${e}` })
  }
}

export const deleteProducts = async (req, res) => {
  const name = req.body.name
  try {
    const products = await mongo.deleteOne({ name })
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product was not deleted : ${e}` })
  }
}

export const updateProducts = async (req, res) => {
  const { name, price } = req.body

  try {
    const products = await mongo.updateOne({ name }, { $set: { price } })
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product was not updated : ${e}` })
  }
}

export const getAllLogs = async (req, res) => {
  try {
    const keys = await redis.keys('*')

		const result = []

		for (const key of keys) {
			console.log(key)
			const value = await redis.get(key)

			let ttl = await redis.ttl(key)
			ttl = JSON.parse(ttl)

			result.push({ key, value: value, ttl: ttl })
		}

    res.status(200).json({ response: result })
  } catch (e) {
    res.status(500).json({ message: `Logs not found : ${e}` })
  }
}

import { mongo } from './db.js'

export const addProducts = async (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  }

  try {
    await mongo.insertOne(product)
    res.status(200).json({ message: 'Product has been created' })
  } catch (e) {
    res.status(500).json({ message: `Product not created : ${e}` })
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await mongo.find({}).toArray()
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product not created : ${e}` })
  }
}

export const deleteProducts = async (req, res) => {
  const name = req.body.name
  try {
    const products = await mongo.deleteOne({ name })
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product was deleted : ${e}` })
  }
}

export const updateProducts = async (req, res) => {
  const { name, price } = req.body

  try {
    const products = await mongo.updateOne({ name }, { $set: { price } })
    res.status(200).json({ response: products })
  } catch (e) {
    res.status(500).json({ message: `Product was updated : ${e}` })
  }
}

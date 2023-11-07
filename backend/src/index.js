import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json()) 
app.post('api/products', (req, res) => {
	const newProduct = {
		name: req.body.name, 
		price: req.body.price
	}
	products.push(newProduct)
	res.status(201).json(newProduct)
})

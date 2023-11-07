import express from 'express'
import morgan from 'morgan'
import products from './router.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', products)

export default app

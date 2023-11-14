import express from 'express'
import morgan from 'morgan'
import products from './router.js'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  }),
)

app.use('/products', products)

export default app

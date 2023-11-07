import { Router } from 'express'
import {
  addProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from './handler.js'

const products = Router()

products.post('/', addProducts)

products.get('/', getProducts)

products.delete('/', deleteProducts)

products.put('/', updateProducts)

export default products

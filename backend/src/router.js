import { Router } from 'express'
import {
  addProducts,
  deleteProducts,
  getAllLogs,
  getProductByName,
  getProducts,
  updateProducts,
} from './handler.js'

const products = Router()
products.get('/logs', getAllLogs)

products.post('/', addProducts)

products.get('/', getProducts)

products.get('/:name', getProductByName)

products.delete('/', deleteProducts)

products.put('/', updateProducts)

export default products

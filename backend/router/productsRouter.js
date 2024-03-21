import express from 'express'
import { createNewProduct, getProductById, getProducts, updateProductById } from '../handler/productsHandler.js';

export const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', createNewProduct)
productRouter.patch('/:id', updateProductById)
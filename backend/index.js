import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { productRouter } from './router/productsRouter.js';

const app = express();

// Handle data coming from action attr of a form
app.use(express.urlencoded({ extended: true }))
// Handles body data coming from Json.stringify()
app.use(express.json())
app.use(cors())

// Custom Middleware
app.use(morgan('dev'))

app.use('/products', productRouter)

app.listen(3000, () => console.log("SERVER STARTED"))

module.exports = app;
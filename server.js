import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config()
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productsRoutes from './routes/productsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


connectDB()

const port = process.env.PORT || 8000

const app = express()

//  Body parser middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => {
    res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
})

// middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log("Server is running on port " + port)
})
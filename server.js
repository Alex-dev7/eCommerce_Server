import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js';

import productsRoutes from './routes/productsRoutes.js'

connectDB()

const port = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productsRoutes)


app.listen(port, () => {
    console.log("Server is running on port " + port)
})
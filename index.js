import express from 'express'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


import { router as routerProducts } from './routes/products.routes.js'

app.use('/products', routerProducts)


app.listen(8080, () => {
    console.log('server corriendo en puerto ', 8080)
})
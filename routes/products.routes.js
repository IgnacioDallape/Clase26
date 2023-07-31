import express from 'express'
const { Router } = express

const router = new Router()

import { productsControllers, allProductsControllers,getProductsByIdControllers, addProductsControllers } from '../controllers/productos.controller.js' //llamo la funcion para poder usarla

//CAPA DE RUTAS

//Este SOLO tiene el path y dispara una funcion, que obtiene los datos necesarios y la lógica, pero eso esta aparte!!

router.get('/', productsControllers)
router.get('/all', allProductsControllers)
router.get('/one/:id', getProductsByIdControllers)
router.post('/addProducts', addProductsControllers)



//Y ESTO VA QUEDANDO COMO LAS IMPORTACIONES QUE HE HECHO EN EL INDEX DEL INTEGRADOR, QUEDA MUCHO MAS PROLIJO Y FACIL DE VER
//NO DEBERIA TENER LOGICA ACA, DEBE IR A LA LOGICA DE NEGOCIO

export { router }
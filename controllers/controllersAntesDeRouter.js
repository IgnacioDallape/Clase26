
                    // LOGICA DE NEGOCIO
        //tenemos un controlador que es el que recibe todas las request y en base a lo que recibe responde, dentro cada uno tiene su logica

        import express from 'express'
        const { Router } = express
        
        const router = new Router()
        
        import { all } from '../models/Manager.js'
        
        router.get('/', (req,res)=> {
            res.send('hola mundo')
        })
        
        //supongamos que este all, le responderia con todos los productos de la base de datos al cliente, para eso necesitaría ingresar a la base de datos, peeeero, eso ya es responsabilidad de la logica de persistencia, que hace las consultas a la BD, no de aca, por eso creamos los metodos crud en otro lado y los usamos aca
        
        router.get('/all', async (req,res)=> {
            const products = await all()  //siempre tratarlas de manera asincrónica a las consultas a la bd o a los modelos de persistencia
            res.send(products)
        })
        
        //pero se entiende que aca no se hace el pedido a la base de datos, aca solo responde en base a la lógica, solo llamamos al metodo de la capa de persistencia, ACA NO SE RELACIONA DIRECTAMENTE A LA BD
        
        export { router }
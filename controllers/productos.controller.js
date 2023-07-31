
                    // LOGICA DE NEGOCIO

//AHORA TENEMOS UNA CAPA DE ROUTERS, Y ACA SOLO ESTARÁN LAS FUNCIONES QUE ABASTECERAN A LOS PATHS!! ESO ES UNA CAPA DE NEGOCIO

// import { all, getById } from "../models/Manager.js"; //esto aca no lo usamos mas porque lo usamos en la capa de servicios
import { getProductsByIdService, getProductsService, addProductsService } from "../services/products.service.js";

const productsControllers = (req,res) => {
    res.send('hola mundo desde el controller')
}

const allProductsControllers = async (req,res) => {
    const productos = await getProductsService()
    res.send(productos)
}

const getProductsByIdControllers = async (req,res) => {
    const pid = req.params.id
    const productById = await getProductsByIdService(pid)
    res.send(productById)
}

const addProductsControllers = async (req,res) => {
    const { name, price, stock, id} = req.body
    const adding = await addProductsService(name, price, stock, id)
    console.log(adding)
    res.send(adding)
}

//Esto de aca abajo, es como se haria sin service, la capa de service es la responsable de conectarse con el modelo de persistencia, esta capa solo se conecta  con la capa de servicios

// const getProductsByIdControllers = async (req,res) => {
//     const pid = req.params.id
//     const productById = await getById(pid)
//     res.send(productById)
// }


//ESTOS DEBEN TENER LA MISMA ESTRUCTURA QUE EL CALLBACK QUE SIEMPRE USAMOS EN LOS PATHS QUE USABAMSO ANTES, QUE ES EL QUE SE VE ACA async (req,res) => { .... }, esto es simplemente una extension de la capa de rutas

export { productsControllers, allProductsControllers, getProductsByIdControllers, addProductsControllers }  //exporto la funcion para poder usarla







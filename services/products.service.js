
// LOGICA DE SERVICIO

//ESTE ES EL REAL ENCARGADO DE CONECTARSE AL MODELO DE PERSISTENCIA

import { all, getById, addProducts } from "../models/Manager.js";

const getProductsService = async (id) => {
    return await all()
}

const getProductsByIdService = async (id) => {
    return await getById(id)
}

const addProductsService = async (name, price, stock, id) => {
    return await addProducts(name, price, stock, id)
}


export { getProductsService, getProductsByIdService, addProductsService }

//este modelo de servicio puede hacer de todo, por ejemplo hacer llamadas, mandar mensajes, es decir, tendria funciones para hacer esas cosas









//ESTA ES UNA CAPA DE PERSISTENCIA, SOLO METODOS PARA CONSULTAR A UNA BASE DE DATOS NADA DE LOGICA


import { products } from "./data.js";

//CRUD

//  entonces aca hacemos todas las consultas crud que querramos y las exportamos para que la use el controller

const all = () => {
    return products
}

const getById = (id) => {
    let pid = id
    let prod = products.find(e => e.id == pid)
    if (!prod) {
        return false
    }
    return prod
}

const addProducts = (name, price, stock, id) => {
    let newProd = {
        name: name,
        precio: price,
        stock: stock,
        id: id
    }
    return newProd
}

export { all, getById, addProducts }
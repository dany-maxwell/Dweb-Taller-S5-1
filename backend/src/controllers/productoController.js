import {listaProductos} from "../models/productoModel.js"

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await listaProductos();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al obtener Productos"
        })
    }
};
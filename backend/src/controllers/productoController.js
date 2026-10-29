import {
    listaProductos, 
    registrarProducto,
    buscarPorID
} from "../models/productoModel.js"

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

export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await req.body;
        registrarProducto(nuevoProducto);
        res.status(200).json({
            mensaje: "Producto añadido correctamente"
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al Crear el Producto"
        })
    }
};

export const obtenerPorID = async (req, res) => {
    try{
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                mensaje: "ID invalido"
            })
        }

        const producto = await buscarPorID(id);
        
        if(!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.status(200).json(producto);
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            mensaje: "Error al buscar producto"
        })
    }
};
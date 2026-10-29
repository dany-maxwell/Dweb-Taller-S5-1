import express from 'express';
import {
    obtenerProductos, 
    crearProducto,
    obtenerPorID,
    modificarProducto,
    borrarProducto
} from '../controllers/productoController.js'

const router = express.Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerPorID);
router.post('/', crearProducto);
router.put('/:id', modificarProducto);
router.delete('/:id', borrarProducto);   

export default router;
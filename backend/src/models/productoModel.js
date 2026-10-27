import { readFile, writeFile } from "node:fs/promises";
import { url } from "node:inspector";

const archivo = new URL("../data/productos.json", import.meta.url)

export const listaProductos = async () => {
    const datos = await readFile(archivo, "utf8")
    return JSON.parse(datos);
};

export const registrarProducto = async (producto) => {
    const productos = await listaProductos(); 
    const nuevoID = listarProductos.length > 0 ? Math.max(...listarProductos.map(p => p.id)) + 1: 1;
    const nuevoProducto = {
        id: nuevoID,
        ...producto
    };
    producto.push(nuevoProducto)
    await writeFile(
        archivo,
        JSON.stringify(listarProductos, null, 2),
        "utf8"
    );
    return nuevoProducto;
};
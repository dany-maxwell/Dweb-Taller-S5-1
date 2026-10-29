import { readFile, writeFile } from "node:fs/promises";
import { url } from "node:inspector";

const archivo = new URL("../data/productos.json", import.meta.url)

export const listaProductos = async () => {
    const datos = await readFile(archivo, "utf8")
    return JSON.parse(datos);
};

export const registrarProducto = async (producto) => {
    const productos = await listaProductos(); 
    const nuevoID = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1: 1;
    const nuevoProducto = {
        id: nuevoID,
        ...producto
    };
    productos.push(nuevoProducto)
    await writeFile(
        archivo,
        JSON.stringify(productos, null, 2),
        "utf8"
    );
    return nuevoProducto;
};

export const buscarPorID = async (id) => {
    const productos = await listaProductos();
    const producto = productos.fins(p => p.id === id);

    return producto;
};
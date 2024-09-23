import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// Creando el contexto
const ProductosContext = createContext()
// Armamos el provider
const ProductosProvider = ({children})=>{
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    
    useEffect(() => {
        getAllProductos()
    }, [])
    
    const getAllProductos = async ()=>{
        try {
           const prods = await helperPeticionesHttp(url, {})
           // console.log(prods)
           setProductos(prods)
        } catch (error) {
            console.log('getAllProductos', error)
        }
    }
    const crearProductoContext = async (nuevoProducto)=>{
        try {
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(nuevoProducto)
            }
            const newProduct = await helperPeticionesHttp(url,options)
            console.log(newProduct)
            setProductos([...productos, newProduct])
        } catch (error) {
            
        }
    }
    const actualizarProductoContext = async (productoEditado)=>{
        try {
            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(productoEditado)
            }
            const urlEdicion = url + productoEditado.id
            const editedProduct = await helperPeticionesHttp(urlEdicion,options)
            // Es lo mismo usar este o el producto (variable) solo
            const nuevoEstadoProductos = productos.map(
                producto => producto.id === editedProduct.id ? editedProduct : producto)
            setProductos(nuevoEstadoProductos)
        } catch (error) {
            console.log('actualizarProducto', error)
        }


    }
    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar, 
        setProductoAEditar
    }
    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>

}
// Exportamos el contexto
// Exporto como un objeto el provider, y como default el ProductosContext
export { ProductosProvider }
export default ProductosContext
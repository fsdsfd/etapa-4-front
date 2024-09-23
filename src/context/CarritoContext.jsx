// Creando Contexto

import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http"

// Creamos el contexto
const CarritoContext = createContext()

// Armamos el provider
const CarritoProvider = ({children})=>{
    const url = import.meta.env.VITE_BACKEND_CARRITOS

    console.log(url)
            // Se tienen que respetar las posiciones, como retorna un array se puede desestructurar directo con const []
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

    function elProductoEstaEnElCarrito(producto) { 
        console.log('Analizo si el producto está adentro del carrito')
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)  // El filter retorna un nuevo array. Con los elementos que encontró, si hay coincidencia lo guarda
        return  nuevoArray.length // Devuelve un length
        // 0, el producto no está en el carrito
    }
    const obtenerProductoDeCarrito = (producto)=>{
    // Recibe un producto y lo busca en el carrito
        return carrito.find(prod => prod.id === producto.id)
    }
    const agregarProductoAlCarritoContext = (producto)=>{
        console.log('Ya estoy en el agregar del contexto', producto)
        if (!elProductoEstaEnElCarrito(producto)) { // Si no hay productos en el array
            producto.cantidad = 1 // Valor nuevo al producto para saber si el usuario quiere comprar este producto
            
            agregarAlCarrito(producto)
        } else{
            const productoDeCarrito = obtenerProductoDeCarrito(producto) // Se va a encargar de obtenerlo
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }
    const eliminarProductoAlCarritoContext = (id)=>{
        console.log(id)
        eliminarDelCarrito(id)
    }
    const guardarCarritoContext = async (carrito)=>{
        console.log(JSON.stringify(carrito))
        try {
            const options = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body : JSON.stringify(carrito)
            }
           const losProductosEnElCarrito = await helperPeticionesHttp(url, options)
           // Extra: crear una página de compra exito
           console.log(losProductosEnElCarrito)
        } catch (error) {
            console.log('[guardarCarritoContext]', error)
        }
    }
    const limpiarCarritoContext = ()=>{
        limpiarCarrito()
    }
    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoAlCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
    }
    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>

}

// Exportaciones
export {CarritoProvider}
export default CarritoContext
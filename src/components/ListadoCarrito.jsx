import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'
import './ListadoCarrito.scss'
const ListadoCarrito = () => {
      // Estas son propiedades así que no se les puede cambiar el nombre
    const {carrito, limpiarCarritoContext, guardarCarritoContext} = useContext(CarritoContext)
    const handleComprar = ()=>{
        console.log('Comprando...')
        // Guardamos el producto en el back
        guardarCarritoContext(carrito) // éxito, se compró lo que había en el carrito así que limpiamos el localstorage
        limpiarCarritoContext() // Limpiamos el carrito
    }
    const handleLimpiarCarrito = ()=>{
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }
  return (
    <>
        <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>

            </tr>
        </thead>
        <tbody>
            { // Haciendole un length veo si el carrito tiene contenido, en caso de tener contenido hago una cosa, y en caso que no hago otra
             carrito.length <= 0 ? (
                <tr> 
                    {/* Va a hacer que ocupe la cantidad de casilleros que quiera con colSpan */}
                    <td colSpan={5} style={{textAlign : 'center'}}>No hay productos</td>
                </tr>
             ) : (
                carrito.map((producto, idx)=>(
                    <ItemCarrito key={idx} producto={producto}></ItemCarrito>
                ))
            )
            }
        </tbody>
    </table>
    <hr />
    {!carrito.length <= 0 && (
        <>
        
        <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
        <button onClick={handleComprar}>Comprar</button>
        </>
        )}
    </>

  )
}

export default ListadoCarrito
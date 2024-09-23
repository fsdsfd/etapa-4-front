import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({producto}) => {
    const {eliminarProductoAlCarritoContext} = useContext(CarritoContext)
    const handleEliminar = (id)=>{
        eliminarProductoAlCarritoContext(id)
    }
  return (
    <tr>
        <td>
            <img src={producto.foto} alt={producto.nombre} width="50px" />
            {/* No poner el width acá  */}
        </td>
        <td>{producto.nombre}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button onClick={()=>handleEliminar(producto.id)}>
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default ItemCarrito
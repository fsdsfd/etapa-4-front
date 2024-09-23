import React, { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'
const TablaFila = ({producto}) => {
  console.log(producto)
  const {setProductoAEditar} = useContext(ProductosContext)
  const handleEditar = ()=>{
    console.log('handleEditar', producto.id)
    setProductoAEditar(producto)
  }
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={()=>handleEditar(producto)}>
          Editar
          </button>
          <button>
            Borrar
          </button>
      </td>
    </tr>
  )
}

export default TablaFila
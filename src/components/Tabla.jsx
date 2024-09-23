import React, { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'
import TablaFila from './TablaFila'
import './Tabla.scss'
const Tabla = () => {
  const { productos } = useContext(ProductosContext)
  return (
    <table className="tabla-alta">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Marca</th>
        <th>Categoría</th>
        <th>Detalles</th>
        <th>Foto</th>
        <th>Envío</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
    {
          productos && productos.map( (producto, idx) => (
            <TablaFila key={producto.id+idx} producto={producto} />
          ))

        } 
</tbody>
  </table>
  )
}

export default Tabla
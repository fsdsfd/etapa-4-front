import useTitulo from '../hooks/useTitulo'
import ListadoCarrito from '../components/ListadoCarrito'

const Carrito = () => {
  useTitulo('Carrito')
  // SUMAR BOTÓN PARA NO ELIMINAR TODOS LOS PRODUCTOS DE UNA DEL CARRITO
  // Hacer una función para que recorra el array y de el precio total
  return (
    <>
    <h1>Productos en el carrito:</h1>
    <hr />
    <ListadoCarrito></ListadoCarrito>
    </>
  )
}

export default Carrito
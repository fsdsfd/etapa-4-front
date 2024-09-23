import { useState } from "react"

export const useLocalStorage = (clave, valorInicial = [])=>{
    const getValorAlmacenado = ()=>{
        try {
            const valorAlmacenado = window.localStorage.getItem(clave)
            return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
        } catch (error) {
            console.log(`Error al obtener ${clave} del localStorage`, error)
            return valorInicial
        }
    }
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())
    const guardarValor = async (valorNuevo) =>{

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo] // Acá creo un array con lo nuevo que tenía
            setValorAlmacenado(nuevoValorAlmacenado) // seteo el estado
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
            
        } catch (error) {
            console.log(`Error al guardar ${clave} del localStorage`, error)
        }
    }
    const eliminarValor = async (id) =>{
        try {
                   // const nuevoValorAlmacenado = valorAlmacenado // copia
        const nuevoValorAlmacenado =  [...valorAlmacenado] // Clona el array, se cera un espacio de memoria independiente pero con las mismas propiedades del array anterior, no se lo mismo que una copia
        const indice = nuevoValorAlmacenado.findIndex(item => item.id === id) // Busco el indice del producto que quierendo eliminardentro del array clonado
        nuevoValorAlmacenado.splice(indice, 1) // El 1 indica cuantos querés eliminar, Busco dentro del array clonado, el producto y lo borro
        console.log(nuevoValorAlmacenado) // Acá tengo todo el array del estado menos el producto eliminado
        setValorAlmacenado(nuevoValorAlmacenado)
        window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.log(`Error al eliminar ${clave} del localStorage con el id : ${id} del producto ${error}`)
        }
    }
    const limpiarValores = ()=>{
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }
    return [ guardarValor, eliminarValor, limpiarValores, valorAlmacenado ]

}
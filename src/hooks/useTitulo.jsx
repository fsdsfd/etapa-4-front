import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin Titulo') =>{
    useEffect(() => {
    document.title = `Educación IT - ${textoTitulo}`
    }, [])
    
}
export default useTitulo
import React from 'react'
import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'

const Alta = () => {
  useTitulo('Alta')
  return (
    <div>
      <Formulario></Formulario>
      <hr />
      <Tabla></Tabla>
    </div>
  )
}

export default Alta
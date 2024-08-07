import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [nombre, setnombre] = useState('')
  const [apellidos, setapellidos] = useState('')
  const [documento, setdocumento] = useState('')
  const [logueado, setlogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
    
  }

  function cambiarClave(evento) {
    setClave(evento.target.value)
    
  }

  function ingresar() {
    if (usuario == 'guti' && clave == 'sara'){
      alert('ingresaste')
      setlogueado(true)
    }else{
      alert('usuario o contrseña inccorrectos')
    }
    
  }
  
  function cambiarnombre(evento) {
    setnombre(evento.target.value)
    
  }

  function cambiarapellidos(evento) {
    setapellidos(evento.target.value)
    
  }

  function cambiardocumento(evento) {
    setdocumento(evento.target.value)
    
  }

  return (
    <>
    {logueado ? (
      <>
      <br />
      <h3> registro de nombre</h3>
      <input type="text" id="nombre"  value={nombre} onChange={cambiarnombre} />
  
      <h3> registro de apellidos</h3>
      <input type="text" id="apellidos" value={apellidos} onChange={cambiarapellidos} />
  
      <h3> registro de documento</h3>
      <input type="text" id="documento" value={documento} onChange={cambiardocumento} />
  
      <h3> registro de datos</h3>
      <button>registrar</button>
      </>
    ) :(<>
    <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
    <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave}/>
    <button onClick={ingresar}>Ingresar</button>
    </>)}


    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setContraseña] = useState('')
  const [nombre, setnombre] = useState('')
  const [apellidos, setapellidos] = useState('')
  const [documento, setdocumento] = useState('')
  const [logueado, setlogueado] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
    
  }

  function cambiarContraseña(evento) {
    setContraseña(evento.target.value)
    
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

      <h1>REGISTRO DE USUARIO</h1>
      <h3> registro de nombre</h3>
      <input type="text" id="nombre"  value={nombre} onChange={cambiarnombre} />
  
      <h3> registro de apellidos</h3>
      <input type="text" id="apellidos" value={apellidos} onChange={cambiarapellidos} />
  
      <h3> registro de documento</h3>
      <input type="text" id="documento" value={documento} onChange={cambiardocumento} />
      <h3>REGISTRAR</h3>
      <button>REGISTRAR</button>
      </>
    ) :(<>

    <h1>INICIO SESION</h1>
    <input placeholder='usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
    <input placeholder='contraseña' type="password" name="clave" id="clave" value={clave} onChange={cambiarContraseña}/>
    <h3>INGRESAR</h3>
    <button onClick={ingresar}>INGRESAR</button>
    </>)}

    </>
  )
}

export default App

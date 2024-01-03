import React from 'react'
import './Formulario.css'
const Formulario = () => {
  return (
    <form>
      <div className="name-input">
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Segundo Nome' />
      </div>
      <input type="email" placeholder='Seu email'/>
      <textarea id="" placeholder='Sua mensagem'></textarea>
      <input type="submit" value="Enviar"/>
    </form>
  )
}

export default Formulario
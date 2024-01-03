import React from 'react'
import './Footer.css'
import { Link,useLocation } from 'react-router-dom'
const Footer = () => {
  let location = useLocation()
  return (
    <footer>
      
      <div className='menu-rodape'>
        <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/sobre' ? 'active' : ''}>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li className={location.pathname === '/projetos' ? 'active' : ''}>
                <Link to="/projetos">Projetos</Link>
            </li>
            <li className={location.pathname === '/cursos' ? 'active' : ''}>
                <Link to="/cursos">Cursos</Link>
            </li>
        </ul>
      </div>
      <div className='creditos-rodape'>
        <div><p>Igor Lopes</p></div>
        <div><p>Todos os direitos reservados</p></div>
      </div>

    </footer>
  )
}

export default Footer
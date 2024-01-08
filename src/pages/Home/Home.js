import React from 'react'
import './Home.css'
import Funcao from '../../components/Funcao'

const Home = () => {

  return (
    <div style={{height:"100vh", overflow:"hidden"}} className='col-12 container d-flex justify-content-center text-center align-items-center'>
      <div className="image-overlay"></div>
      <img
        src="./skills/programmer.jpg"
        alt="Programador"
        style={{
          height: "107vh",
          width: "100%",
          backgroundImage: "url('./skills/programmer.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity:"0.5" // Defina um valor menor para a imagem ficar atrás do conteúdo
        }}
        />
      <div className="apresentacao" style={{minWidth:"500px",position:"relative"}}>
        <div className="texto-apresentacao" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="3000">
          <p className='ola-custom'>Olá </p>
          <h3 className='text-white' data-aos="fade-up" data-aos-easing="ease" data-aos-duration="3000" data-aos-delay="500">sou o</h3>
        </div>
        <div className="perfil">
          <div className="title d-flex flex-column" >
            <div className="name" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="3000" data-aos-delay="1500"><h1 className='text-white'>Igor <span className='cor-alternativa'>Lopes</span></h1></div>
            <div className="cargo" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="3000" data-aos-delay="2000"><h2 className='text-white'><Funcao text={"Desenvolvedor Full-stack"}/> <span className='cursor-blink'>|</span></h2></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import './Projetos.css'
import data from '../../data/config.json'
import buscaTecnologia from '../../components/BuscaTecnologia'
import buttonTecnologia from '../../components/ButtonTecnologia/ButtonTecnologia'
import { useDarkMode } from '../../hooks/useDarkMode'
const Projetos = () => {
  const {theme} = useDarkMode();
  return (
    <div className='section-projetos py-5'>
      <div className="title-section-projetos">
        <h1 style={{fontSize:"70px"}}>Meus <span>projetos</span></h1>
      </div>
      <p>Aqui estão alguns projetos feitos por mim, 
        em cursos e também 
        alguns serviços como freelancer..</p>

      
        <nav>
          <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-projetos-pessoais-tab" data-bs-toggle="tab" data-bs-target="#nav-projetos-pessoais" type="button" role="tab" aria-controls="nav-projetos-pessoais" aria-selected="true">Projetos de estudo</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Trabalhos</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className={`tab-pane fade show active py-5 ${theme ? "bg-dark" : "bg-light"}`} style={{backgroundColor:"#fff"}} id="nav-projetos-pessoais" role="tabpanel" aria-labelledby="nav-projetos-pessoais-tab" tabindex="0">
            <div className="projetos-cards mt-5 container">
            

            {data.projetos.map((projeto) => (
              projeto.type === 1 ? (
                <div className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-light text-dark"} projeto-card-single`} style={{width:"300px"}}>
                <img src="..." className="card-img-top" alt={projeto.title}/>                
                <div className="card-body">
                  <h4 className="card-title">{projeto.title}</h4>
                  <p>{projeto.descricao}</p>
                </div>
                <hr />
                <div className="tecnologias-projeto">
                  {projeto.tecnologias.map((tecnologia) =>(
                    <span className="tecnologia-single-in-project">
                      {buttonTecnologia({text:buscaTecnologia(tecnologia)})}
                    </span>
                  ))}
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <a href={projeto.link_repositorio} target='_blank' className={`btn btn-outline-secondary ${theme ? "" : "text-white"}`}><i className="bi bi-code-slash"></i> Source</a>
                    <a href={projeto.link_online} target='_blank' className={`btn btn-custom-link ${theme ? "" : "text-white"}`}><i className="bi bi-globe"></i> Online</a>
                </div>
              </div>
              ) : ""

            ))}
              </div>
            </div>
            
          <div className={`tab-pane fade active py-5 ${theme ? "bg-dark" : "bg-light"}`} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
            <h3 className='mt-3'>Sites freelencers</h3>
          <div className="projetos-cards mt-5 container">
            {data.projetos.map((projeto) => (
              projeto.type === 2 ? (
                <div className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-light text-dark"} projeto-card-single`} style={{width:"300px"}}>
                <img src="..." className="card-img-top" alt={projeto.title}/>                
                <div className="card-body">
                  <h4 className="card-title">{projeto.title}</h4>
                  <p>{projeto.descricao}</p>
                </div>
                <hr />
                <div className="tecnologias-projeto">
                  {projeto.tecnologias.map((tecnologia) =>(
                    <span className="tecnologia-single-in-project">
                      {buttonTecnologia({text:buscaTecnologia(tecnologia)})}
                    </span>
                  ))}
                </div>
                <div className="card-footer d-flex justify-content-between">
                <a href={projeto.link_repositorio} target='_blank' className={`btn btn-outline-secondary ${theme ? "" : "text-white"}`}><i className="bi bi-code-slash"></i> Source</a>
                    <a href={projeto.link_online} target='_blank' className={`btn btn-custom-link ${theme ? "" : "text-white"}`}><i className="bi bi-globe"></i> Online</a>
                </div>
              </div>
              ) : ""

            ))}
          </div>
            <h3 className='my-5'>Sistemas Freelancer </h3>
            <div className="projetos-cards mt-5 container">
            {data.projetos.map((projeto) => (
              projeto.type === 3 ? (
                <div className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-light text-dark"} projeto-card-single`} style={{width:"300px"}}>
                <img src="..." className="card-img-top" alt={projeto.title}/>                
                <div className="card-body">
                  <h4 className="card-title">{projeto.title}</h4>
                  <p>{projeto.descricao}</p>
                </div>
                <hr />
                <div className="tecnologias-projeto">
                  {projeto.tecnologias.map((tecnologia) =>(
                    <span className="tecnologia-single-in-project">
                      {buttonTecnologia({text:buscaTecnologia(tecnologia)})}
                    </span>
                  ))}
                </div>
              </div>
              ) : ""

            ))}
          </div>
          <h3>Sistemas corporativos</h3>
          <div className="projetos-cards mt-5 container">
            {data.projetos.map((projeto) => (
              projeto.type === 4 ? (
                <div className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-light text-dark"} projeto-card-single`} style={{width:"300px"}}>
                <img src="..." className="card-img-top" alt={projeto.title}/>                
                <div className="card-body">
                  <h4 className="card-title">{projeto.title}</h4>
                  <p>{projeto.descricao}</p>
                </div>
                <hr />
                <div className="tecnologias-projeto">
                  {projeto.tecnologias.map((tecnologia) =>(
                    <span className="tecnologia-single-in-project">
                      {buttonTecnologia({text:buscaTecnologia(tecnologia)})}
                    </span>
                  ))}
                </div>
              </div>
              ) : ""

            ))}
          </div>
          </div>
        </div>
        <a href='https://github.com/igorlops?tab=repositories' className='btn btn-primary'>Ver mais</a>
    </div>
  )
}

export default Projetos
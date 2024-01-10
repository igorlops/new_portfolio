/* global bootstrap */

import React, { useState,useRef, useEffect } from 'react'
import './Projetos.css'
import data from '../../data/config.json'
import buscaTecnologia from '../../components/BuscaTecnologia'

import buttonTecnologia from '../../components/ButtonTecnologia/ButtonTecnologia'
import { useDarkMode } from '../../hooks/useDarkMode'
import ModalDetalhe from '../../components/Modal/Modal'

const Projetos = () => {

  const {theme} = useDarkMode();

  const [tecnologiaProjeto, setTecnologiaProjeto] = useState(0)

  const handleFilter = (e) => {
    // e.preventDefault();
    setTecnologiaProjeto(e)
    
  }

  const projetos = (type, tecnologia = null,titulo) => {
    console.log("Tipo: "+type)
    console.log(tecnologia)
    return (
      <>
    <div>
      <h3 className='my-5'>{titulo}</h3>
      <div className="projetos-cards mt-5 container">
      {data.projetos.map((projeto,i) => (
              
        projeto.type === type ? (
          tecnologia != null ? (
            projeto.tecnologias.includes(tecnologia) ? (
              <>
                    <ModalDetalhe
                id={`detalhe_projeto${i}`}
                text={projeto.descricao}
                title={projeto.title}
                link_online={projeto.link_online}
                link_repositorio={projeto.link_repositorio}
              />
              <div key={`projeto${i}`} className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-dark text-light border-light"} projeto-card-single`} style={{ width: "300px" }}>
                {projeto.image !== "" ? <img src="..." className="card-img-top" alt={projeto.title} /> : ""}
                <div className="card-body">
                  <h4 className="card-title">{projeto.title}</h4>
                </div>
                <hr />
                <div className="tecnologias-projeto">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span key={tecnologia} className="tecnologia-single-in-project">
                      {buttonTecnologia({ text: buscaTecnologia(tecnologia) })}
                    </span>
                  ))}
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className='btn btn-detail-project my-2' data-bs-toggle="modal" data-bs-target={`#detalhe_projeto${i}`}>Detalhes</button>
                </div>
              </div>
              </>
            ) : null
          ) : (
            <>
            <ModalDetalhe
              id={`detalhe_projeto${i}`}
              text={projeto.descricao}
              title={projeto.title}
              link_online={projeto.link_online}
              link_repositorio={projeto.link_repositorio}
              />
            <div key={projeto.id} className={`card mb-5 ${!theme ? "bg-dark text-white" : "bg-dark text-light border-light"} projeto-card-single`} style={{ width: "300px" }}>
              {projeto.image !== "" ? <img src="..." className="card-img-top" alt={projeto.title} /> : ""}
              <div className="card-body">
                <h4 className="card-title">{projeto.title}</h4>
              </div>
              <hr />
              <div className="tecnologias-projeto">
                {projeto.tecnologias.map((tecnologia) => (
                  <span key={tecnologia} className="tecnologia-single-in-project">
                    {buttonTecnologia({ text: buscaTecnologia(tecnologia) })}
                  </span>
                ))}
              </div>
              
              <div className="card-footer d-flex justify-content-center"> 
                <button className='btn btn-detail-project my-2' data-bs-toggle="modal" data-bs-target={`#detalhe_projeto${i}`}>Detalhes</button>
              </div>
            </div>
          </>
          )
        ) : null
      ))}
      </div>
      </div>
      </>
    );
  }


  const modalRef = useRef(null);

  return (
    <div className='section-projetos py-5'>
      <div className="title-section-projetos">
        <h1 style={{fontSize:"70px"}}>Meus <span>projetos</span></h1>
      </div>
      <p>Aqui estão alguns projetos feitos por mim, 
        em cursos e também 
        alguns serviços como freelancer..</p>
          <button type="button" className={` m-2 btn btn-${theme ? "dark border-light" : "light border-dark"}`} onClick={()=>handleFilter(0)}>
                Todos
          </button>
          {data.tecnologias.map((tecnologia) => (
            <button type="button" className={` m-2 btn btn-${!theme ? "dark" : "light"} ${tecnologiaProjeto === tecnologia.id ? "tec-actived" : ""}`} onClick={()=>handleFilter(tecnologia.id)}>
              {tecnologia.nome}
            </button>
          ))}

          {tecnologiaProjeto == 0 ? (
              <>
                {projetos(1,null,"Projetos de estudo")}
                {projetos(2,null,"Sites freelencers")}
                {projetos(3,null,"Sistemas Freelancer ")}
                {projetos(4,null,"Sistemas corporativos")}
              </>
            ) : (
              <>
              {projetos(1,tecnologiaProjeto,"Projetos de estudo") &&
              <>
                {projetos(1,tecnologiaProjeto,"Projetos de estudo")}
              </>
              }
              {projetos(2,tecnologiaProjeto,"Sites freelencers") &&
              <>
                {projetos(2,tecnologiaProjeto,"Sites freelencers")}
              </>
              }
              {projetos(3,tecnologiaProjeto,"Sistemas Freelancer ") &&
              <>
              {projetos(3,tecnologiaProjeto,"Sistemas Freelancer ")}
              </>
              }
              {projetos(4,tecnologiaProjeto,"Sistemas corporativos") &&
              <>
                {projetos(4,tecnologiaProjeto,"Sistemas corporativos")}
              </>
              }
              </>
            )}

        <a href='https://github.com/igorlops?tab=repositories' className='btn btn-primary'>Ver mais</a>
    </div>
  )
}

export default Projetos
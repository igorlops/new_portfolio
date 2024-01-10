import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Sobre.css'
import data from '../../data/config.json'
import exibeDetalhesDaSkill from '../../components/DetalhesSkill';
import buscaTecnologia from '../../components/BuscaTecnologia'
import buttonTecnologia from '../../components/ButtonTecnologia/ButtonTecnologia';
import { useDarkMode } from '../../hooks/useDarkMode';
const Sobre = () => {
  const [skillDetail, setSkillDetail] = useState("")
  const {theme} = useDarkMode()
  return (
    <div className='container'>
      <h2 className='sobre-titulo'>Sobre <span className='cor-alternativa'>mim</span></h2>
      <div className="texto-sobre">
        <h4 style={{fontWeight:"bold"}} className='text-center'>Eu sou <span className='cor-alternativa'>Igor Lopes</span>, um Desenvolvedor Web Fullstack</h4>
      <p>Já estou na área há mais de 1 ano profissionalmente, 
        mas já escrevo código há uns 3 anos. 
        Desenvolvo sites e sistemas para pequenas empresas.
      </p>
      <p>
        Hoje eu sou Desenvolvedor Jr na Solar Magazine, no qual crio aplicações.
        para automatizar tarefas dos setores da empresa, integração de API, criação de API e demais aplicações voltado a varejo.
      </p>
      </div>

      <h1 className='text-center' style={{fontWeight:"bold"}}>Serviços</h1>
      <div className="d-flex justify-content-around container flex-wrap" >
        <div className={`servicos-single text-center card ${!theme ? "bg-dark text-white" : "bg-light"}`} style={{width:"300px"}}>
          <i class="bi bi-laptop"></i>
          <p>Criação de Sistema Web.</p>
        </div>
        <div className={`servicos-single text-center card ${!theme ? "bg-dark text-white" : "bg-light"}`} style={{width:"300px"}}>
          <i class="bi bi-file-code"></i>
          <p>Sites e Landing Pages</p>
        </div>
        <div className={`servicos-single text-center card ${!theme ? "bg-dark text-white" : "bg-light"}`} style={{width:"300px"}}>
          <i class="bi bi-database"></i>
          <p>Projetos Fullstack em geral, criação de API's e Integrações</p>
        </div>
      </div>
      <p></p>
      <section className='skills bg-dark text-white mb-5'>
        <h1>Skills</h1>
        <div className="skills-icons">
            {data.skills.map((e)=>(
              <a style={{cursor:"pointer"}} onClick={()=> setSkillDetail(exibeDetalhesDaSkill(e.image,e.descricao)) } className="skill-single">
                <img src={e.image} alt={e.name} title={e.nome}/>
              </a>
            ))}
        </div>

        <div className="skill-detalhe my-5" style={{maxWidth:"500px"}}>
              {skillDetail}
        </div>
      </section>


      <section className='section-experiencias mt-5 container d-flex justify-content-center bg'>
        <h2>Experiências</h2>
        <div className='experiencias'>
          <VerticalTimeline
            lineColor={theme ? "#212529" : "#fff"}
            className='w-100'
          >
        {data.experiencias.map((e) => (
          
            <VerticalTimelineElement
              className="vertical-timeline-element--work w-100"
              contentStyle={{ background: !theme ? "#343a40" : "#fff", color: theme ? "#343a40" : "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid  ${!theme ? "#343a40" : "#fff"}` }}
              iconStyle={{ background: !theme ? "#343a40" : "#fff", color: theme ? "#343a40" : "#fff", border: !theme ? "#343a40" : "#fff"}}
              date={e.data}
            >
              <h3 className="vertical-timeline-element-title">
                {e.title}
              </h3>
              <div className='empresa-data'>
              <h6 className="vertical-timeline-element-subtitle">{e.empresa}</h6> <span>{e.data}</span>
              </div>
              <div className="descricao-experiencia">
                <p style={{textTransform:"uppercase"}}>{e.descricao}</p>
                <ul className='w-100 d-flex justify-content-center flex-column align-items-center p-0 mt-2' style={{textAlign:"left"}}>
                  {e.atividades.map((e,i) => (
                    <li key={i} style={{listStyleType:"none"
                  }}>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='tecnologias-experiencias'>
                {e.tecnologias.map((e,i) => (
                  <span className='tecnologia-single'>
                    {buttonTecnologia({text:buscaTecnologia(e)})}
                  </span>
                  ))}
              </div>
            </VerticalTimelineElement>
        ))}
          </VerticalTimeline>
          
        </div>
      </section>
    </div>
  )
}

export default Sobre
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
    <div>
      <h2 className='sobre-titulo'>Sobre <span>mim</span></h2>
      <div className="texto-sobre">
        <p>
        sou Igor Lopes, Desenvolvedor de Sistemas Jr, 
        um entusiasta desenvolvedor fullstack com proeficiencia 
        em Java e JavaScript. Minha paixão pela programação me 
        levou a explorar as profundezas deste mundo digital. 
        Com um compromisso constante de aperfeiçoamento, 
        meu objetivo é conceber soluções inovadoras que 
        impulsionem o avanço da web, 
        tornando-a mais funcional e cativante.
        </p>
        Conheci a programação através da faculdade de Mecatrônica Industrial,
          fique entusiasmado pelo fato de criar soluções com linhas de códigos
          <p>Uma parte de ser um desenvolvedor de software é ser capaz 
            de se manter atualizado com as tecnologias mais recentes. 
          e à medida que a tecnologia evolui, aprendo constantemente 
          coisas novas, expondo-me a novas ferramentas e tecnologias e
           aumentando as minhas competências e conhecimentos.
          </p>
      </div>

      <section className='skills bg-dark text-white mb-5'>
        <h1>Skills</h1>
        <div className="skills-icons">
            {data.skills.map((e)=>(
              <a style={{cursor:"pointer"}} onClick={()=> setSkillDetail(exibeDetalhesDaSkill(e.image,e.descricao)) } className="skill-single">
                <img src={e.image} alt={e.name} title={e.nome}/>
              </a>
            ))}
        </div>

        <div className="skill-detalhe my-5">
              {skillDetail}
        </div>
      </section>


      <section className='section-experiencias mt-5'>
        <h2>Experiências</h2>
        <div className='experiencias'>
          <VerticalTimeline>
        {data.experiencias.map((e) => (
          
            <VerticalTimelineElement
              lineColor="#000"
              className="vertical-timeline-element--work"
              contentStyle={{ background: !theme ? "#212529" : "#fff", color: theme ? "#212529" : "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid  ${!theme ? "#212529" : "#fff"}` }}
              iconStyle={{ background: !theme ? "#212529" : "#fff", color: theme ? "#212529" : "#fff", border: !theme ? "#212529" : "#fff"}}
              date={e.data}
            >
              <h3 className="vertical-timeline-element-title">
                {e.title}
              </h3>
              <div className='empresa-data'>
              <h6 className="vertical-timeline-element-subtitle">{e.empresa}</h6> <span>{e.data}</span>
              </div>
              <div className="descricao-experiencia">
                <p>{e.descricao}</p>
                <ul>
                  {e.atividades.map((e,i) => (
                    <li key={i} style={{listStyleType:"none",textAlign:"left"}}>
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
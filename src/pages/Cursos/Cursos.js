import React from 'react'
import './Cursos.css'
import data from '../../data/config.json'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import buscaTecnologia from '../../components/BuscaTecnologia';
import buttonTecnologia from '../../components/ButtonTecnologia/ButtonTecnologia';
import 'react-vertical-timeline-component/style.min.css';
import { useDarkMode } from '../../hooks/useDarkMode';
const Cursos = () => {

  const {theme} = useDarkMode()
  return (
    <>
      <h1 className='text-center' style={{fontSize:"70px"}}>Principais cursos <span style={{color:"#391d8a"}}>independentes</span></h1>
      <div className="mt-5 container">
      <VerticalTimeline>
        {data.cursos.map(e => (
            <VerticalTimelineElement
            lineColor="#000"
            className="vertical-timeline-element--work"
            contentStyle={{ background: !theme ? "#212529" : "#fff", color: theme ? "#212529" : "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${!theme ? "#212529" : "#fff"}` }}
            iconStyle={{ background: !theme ? "#212529" : "#fff", color: theme ? "#212529" : "#fff", border: !theme ? "#212529" : "#fff"}}
          >
            <div className="d-flex align-items-center mb-3 justify-content-between">
              <span class="badge rounded-pill text-bg-secondary">{e.instituicao}</span>
                {e.status == 1 ? (
                  <span class="badge rounded-pill text-bg-primary">
                    {e.horas} horas 
                  </span>
                  ) : (
                    <span class="badge rounded-pill text-bg-warning">
                      Em andamento
                    </span>
                  )}

            </div>
            <h3 className="vertical-timeline-element-title">{e.titulo}</h3>
            {e.status == 1 ? (
                <>
                  {/* <hr /> */}
                  <div className="card-footer mt-3 d-flex justify-content-between">
                    <a href={e.link} target='_blank' className='btn btn-outline-primary'><i class="bi bi-bookmark"></i> Certificado</a>
                  </div>
                </>
              )
            : ""
            }
              <hr />
            <div className='cursos-tecnologias'>
              {e.tecnologias.map((tecnologia,i) => (
                <span className='cursos-single'>
                  {buttonTecnologia({text:buscaTecnologia(tecnologia)})}
                </span>
              ))}
            </div>

            
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Cursos
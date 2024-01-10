import React, { useState, useEffect } from "react";

const ModalDetalhe = ({title, text, id ,link_online, link_repositorio}) => {
  const [textPadrao, setTextPadrao] = useState("");
  useEffect(() => {
    setTextPadrao(text);
  }, [text]);
  console.log(text,textPadrao)

  return (
    <>
      <div className={`modal fade`} id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {textPadrao}
            </div>
            {(link_repositorio !== "" || link_online !== "" )&&
            <div className="modal-footer d-flex justify-content-between">
              {link_repositorio != "" &&                 
                      <a href={link_repositorio} target='_blank' className={`btn btn-outline-secondary`}>
                        <i className="bi bi-code-slash"></i> 
                        Source
                      </a> 
                    }
              {link_online !== "" &&
                <a href={link_online} target='_blank' className={`btn btn-custom-link text-white`}>
                  <i className="bi bi-globe"></i> Online
                </a>
              }
            </div>
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetalhe;
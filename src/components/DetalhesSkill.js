const exibeDetalhesDaSkill = (img, descricao) => {
    const htmlSkillDetalhe = `
      <div class="d-flex flex-column align-items-center justify-content-center container">
        <div class="mb-5">
          <img src="${img}" class="imagem-detalhe-skill" width="150px"/>
        </div>
        <div className="p-5">
          <p>${descricao}</p>
        </div>
      </div>
    `
    return (
        <div dangerouslySetInnerHTML={{__html:htmlSkillDetalhe}}/>
    );
  }

export default exibeDetalhesDaSkill;
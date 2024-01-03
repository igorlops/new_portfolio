import data from '../data/config.json'
const buscaTecnologia = (id) => {
    const tecnologiasEncontradas = data.tecnologias.find(tecnologia => tecnologia.id === id);
    return tecnologiasEncontradas ? tecnologiasEncontradas.nome : null;
}

export default buscaTecnologia;
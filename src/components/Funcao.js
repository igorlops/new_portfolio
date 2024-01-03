import { useEffect, useState } from 'react'

const Funcao = () => {
    const funcoes = ['Desenvolvedor Fullstack', 'Desenvolvedor de sistemas', 'Desenvolvedor web'];
    const [funcaoSingle, setFuncaoSingle] = useState(funcoes[0]);

    useEffect(() => {
        const contadorCargo = () => {
            let count = 0;
            const intervalId = setInterval(() => {
                if (count === 2) { // Modificado para 2, pois os índices do array vão de 0 a 2
                    count = 0;
                }
                setFuncaoSingle(funcoes[count]);
                count++;
            }, 1000);

            return () => clearInterval(intervalId); // Limpar o intervalo quando o componente for desmontado
        };

        contadorCargo();
    }, []); // Passando um array vazio como segundo argumento para garantir que useEffect só execute uma vez

    return funcaoSingle;
};

export default Funcao
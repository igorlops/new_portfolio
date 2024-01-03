import './ButtonTecnologia.css'
const buttonTecnologia = ({text}) => {
    return (
        <>
            <span type="button" class="btn button-tecnologia" style={{cursor:"auto"}}>
                    {text}
            </span >
        </>
    )
}

export default buttonTecnologia
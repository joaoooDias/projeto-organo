import Colaborador from '../Colaborador'
import './Estado.css'

const Estado = (props) => {

    const css = {backgroundColor: props.corPrimaria}
    
    return (
        
        <section className='estado' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
            {props.colaboradores.map( colaborador => <Colaborador/>)}
        </section>
    )
}

export default Estado
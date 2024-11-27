import './Estado.css'

const Estado = (props) => {

    const css = {backgroundColor: props.corPrimaria}

    return (
        
        <section className='estado' style={css}>
            <h3 style={{ borderColor: props.corSecundaria}}>{props.nome}</h3>
        </section>
    )
}

export default Estado
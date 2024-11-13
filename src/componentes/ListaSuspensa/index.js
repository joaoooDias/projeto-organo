import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
                <select onChange={evento => props.aoAlterado(evento.target.value)}>
                    <option value="" disabled selected>Selecione um Estado</option>
                    {props.itens.map(item=> <option key={item}>{item}</option>)}
                </select>
        </div>)
    
    
}


export default ListaSuspensa
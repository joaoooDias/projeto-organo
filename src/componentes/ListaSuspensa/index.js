import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    console.log(props.itens);

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
                <select required={props.required}>
                    <option value="" disabled selected>Selecione um Estado</option>
                    {props.itens.map(item=> <option key={item}>{item}</option>)}
                </select>
        </div>)
    
    
}


export default ListaSuspensa
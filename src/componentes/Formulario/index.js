import './Formulario.css';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';

const Formulario = (props) =>{

    

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [idade, setIdade] = useState('')
    const [estado, setEstado] = useState('')

    const aoSalvar = (evento)  =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            apelido,
            idade,
            estado
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do novo membro DAT</h2>
                <CampoTexto
                obrigatorio={true}
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome} 
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                obrigatorio={true}
                label="Apelido"
                placeholder="Digite o seu apelido"
                valor={apelido}
                aoAlterado={valor => setApelido(valor)}
                />
                <CampoTexto
                obrigatorio={true}
                label="Idade"
                placeholder="Digite  a sua idade"
                valor={idade}
                aoAlterado={valor => setIdade(valor)}
                />
                <ListaSuspensa
                obrigatorio={true}
                label="Estado"
                itens={props.estado}
                valor={estado}
                aoAlterado={valor => setEstado(valor)}/>
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    );
}
export default Formulario;
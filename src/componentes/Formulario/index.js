import './Formulario.css';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';

const Formulario = () =>{

    const estados = [
        'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
    ]

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [idade, setIdade] = useState('')
    const [estado, setEstado] = useState('')

    const aoSalvar = (evento)  =>{
        evento.preventDefault()
        console.log('Form foi submetido', nome, apelido, idade, estado)
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
                itens={estados}
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
import './Formulario.css';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () =>{

    const estados = [
        'São Paulo',
        'Minas Gerais',
        'Tocantins',
        'Bahia',
        'Parana',
        'Rio de Janeiro'
    ]

    const aoSalvar = (evento)  =>{
        evento.preventDefault()
        console.log('Form foi submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do novo membro DAT</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Apelido" placeholder="Digite o seu apelido" />
                <CampoTexto obrigatorio={true} label="Idade" placeholder="Digite  a sua idade" />
                <ListaSuspensa obrigatorio={true} label="Estado" itens={estados}/>
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    );
}
export default Formulario;
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario'; 
import Estado from './componentes/Estado';



function App() {

  const estado = [
    {
      nome: 'Acre',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Alagoas',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Amapá',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Amazonas',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Bahia',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Ceará',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Distrito Federal',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Espírito Santo',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Goiás',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Maranhão',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mato Grosso',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Mato Grosso do Sul',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Minas Gerais',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Pará',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Paraíba',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Paraná',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Pernambuco',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Piauí',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Rio de Janeiro',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Rio Grande do Norte',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Rio Grande do Sul',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Rondônia',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Roraima',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Santa Catarina',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'São Paulo',
      corPrimaria: '#D9f7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Sergipe',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Tocantins',
      corPrimaria: '',
      corSecundaria: ''
    }
    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador ])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario estado={estado.map(estado => estado.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {estado.map(estado => <Estado 
      key={estado.nome} 
      nome={estado.nome} 
      corPrimaria={estado.corPrimaria} 
      corSecundaria={estado.corSecundaria}
      colaboradores={colaboradores}
      />
      )}
    </div>
  );
}

export default App;

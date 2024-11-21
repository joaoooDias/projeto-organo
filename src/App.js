import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario'; 
import Estado from './componentes/Estado';



function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador ])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Estado nome="São Paulo"/>
      <Estado nome="Minas Gerais"/>
      <Estado nome="Rio de Janeiro"/>
      <Estado nome="Rio Grande do Sul"/>
      <Estado nome="Paraná"/>
      <Estado nome=""/>
    </div>
  );
}

export default App;

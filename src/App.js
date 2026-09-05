import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import './App.css';
function App() {

  const [colaboradores, setColaboradores] = useState([])

  return (
    <div className="App">
      <Banner />
      <Formulario AoColaboradorCadastrado={Colaborador =>
        setColaboradores([...colaboradores, Colaborador])} />
    </div>
  );
}

export default App;
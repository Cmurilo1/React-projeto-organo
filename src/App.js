
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
      <CampoTexto label="Imagem" placeholder="Digite a endereco da imagem" />
    </div>
  );
}

export default App;

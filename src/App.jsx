import { Experiencia } from './components/Experiencia/Experiencia';
import { Introducao } from './components/Introducao/Introducao';
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/Portfolio/Portfolio';
// import { PortfolioItem } from './components/PortfolioItem/PortfolioItem';
import { Skills } from './components/Skills/Skills';
import { SobreMim } from './components/SobreMim/SobreMim';
import './styles/App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <div className='Conteudo'>
     <Introducao/>
     <SobreMim/>
     <Experiencia/>
     <Skills/>
     <Portfolio/>
      </div>
    </div>
  );
}

export default App;

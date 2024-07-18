import React, { useState } from 'react';
import { PortfolioItem } from "../PortfolioItem/PortfolioItem";
import './styles.css';
import './buttons.css';
import projetos from '../../data/projetos';
// import imagemHtml from '../../assets/images/icons/imagemHtml.png';
// import imagemCss from '../../assets/images/icons/imagemCss.png';
import imagemJS from '../../assets/images/icons-white/imagemJS.png';
import imagemReact from '../../assets/images/icons-white/imagemReact.png';
import imagemWP from '../../assets/images/icons-white/imagemWP.png';
import imagemPwpA from '../../assets/images/icons-white/imagemPwpA.png';

export function Portfolio() {
  const [techFilter, setTechFilter] = useState('');

  const handleTechFilter = (tech) => {
    setTechFilter(prevTechFilter => prevTechFilter === tech ? '' : tech);
  };

  const filteredProjects = projetos.filter((projeto) => {
    const matchesTech = techFilter === ''
      ? true
      : projeto.techs.some(tech => tech.name.toLowerCase() === techFilter.toLowerCase());

    return matchesTech;
  });

  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <h2>Cada projeto mostra uma evolução em meu trabalho</h2>
      <div className='inputs'>
        {/* <button 
          id='but-html' 
          className={techFilter === 'html' ? 'active' : ''} 
          onClick={() => handleTechFilter('html')}
        >
          <img src={imagemHtml} alt="HTML" />HTML
        </button>
        <button 
          id='but-css' 
          className={techFilter === 'css' ? 'active' : ''} 
          onClick={() => handleTechFilter('css')}
        >
          <img src={imagemCss} alt="CSS" />CSS
        </button> */}
        <button 
          id='but-javascript' 
          className={techFilter === 'javascript' ? 'active' : ''} 
          onClick={() => handleTechFilter('javascript')}
        >
          <img src={imagemJS} alt="Javascript" />Javascript
        </button>
        <button 
          id='but-react' 
          className={techFilter === 'react' ? 'active' : ''} 
          onClick={() => handleTechFilter('react')}
        >
          <img src={imagemReact} alt="React" />React
        </button>
        <button 
          id='but-wordpress' 
          className={techFilter === 'wordpress' ? 'active' : ''} 
          onClick={() => handleTechFilter('wordpress')}
        >
          <img src={imagemWP} alt="WordPress" />WordPress
        </button>
        <button 
          id='but-powerapps' 
          className={techFilter === 'powerapps' ? 'active' : ''} 
          onClick={() => handleTechFilter('powerapps')}
        >
          <img src={imagemPwpA} alt="PowerApps" />PowerApps
        </button>
      </div>

      {filteredProjects.map((projeto, index) => (
        <PortfolioItem 
          key={index}
          PortfolioitemImagem={projeto.imagem}
          PortfolioitemTitulo={projeto.titulo}
          PortfolioitemTexto={projeto.texto}
          techs={projeto.techs}
          butLink={projeto.butLink}
          butLinkcod={projeto.butLinkcod}
        />
      ))}
    </div>
  );
}

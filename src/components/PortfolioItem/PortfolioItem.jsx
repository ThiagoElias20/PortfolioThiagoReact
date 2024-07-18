import React from "react";
import './styles.css';

export function PortfolioItem(props) {
  return (
    <>
      <div className="projeto-img-desc">
        <div className="projeto-img rainbow">
          <img src={props.PortfolioitemImagem} alt={props.PortfolioitemTitulo}/>
        </div>
        <div className="projeto-desc">
          <h2>{props.PortfolioitemTitulo}</h2>
          <p>{props.PortfolioitemTexto}</p>
          <div className="techs-container">
            {props.techs.map((tech, index) => (
              <div key={index} className="techs">
                <img src={tech.image} alt={tech.name} />
                {tech.name}
              </div>
            ))}
          </div>
          <div className="buts">
          {props.butLink && <a href={props.butLink} target="_blank" rel="noopener noreferrer">Acesse o projeto</a>}
           {/*O operador lógico && em JavaScript (e em JSX) é usado para renderizar o elemento seguinte (<a href=...>) 
           apenas se a condição à esquerda (props.butLink) for verdadeira.*/}
          {props.butLinkcod && <a href={props.butLinkcod} target="_blank" rel="noopener noreferrer">Ver Código</a>}
          </div>
        </div>
      </div>
      <div className="projeto-desc-img">
        <div className="projeto-desc"></div>
        <div className="projeto-img"></div>
      </div>
    </>
  );
}

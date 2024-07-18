import './styles.css';
import imgmdias from "../../assets/images/icons/enterprise/mdias.png";

export function Experiencia() {
  return (
    /*Fragment*/
    <div className="Experiencia">
      <h1>Experiência<span>.</span></h1>

      <div class="grid">
      <div class="item">
        <div className='item-img'>
        <img src={imgmdias} alt="imgmdias" />
        </div>
          <h3>Bolsista de Inovação Científica</h3>
          <h5>M. Dias Branco • jul 2023 - out 2023</h5>
      </div>
      <div class="item">
        <div className='item-img'>
        <img src={imgmdias} alt="imgmdias" />
        </div>
          <h3>Bolsista de Inovação Científica</h3>
          <h5>M. Dias Branco • jun 2024 - Atualmente</h5>
          <p>Após vencer junto de minha equipe o segundo lugar do Hacka-Ta-On, organizado pela Universidade de Fortaleza e a M.Dias Branco,
            comecei a desenvolver a nossa solução para resolver um dos problemas da fábrica da Mdias.
          </p>
      </div>
      <div class="item">
        <div className='item-img'>
        <img src={imgmdias} alt="imgmdias" />
        </div>
          <h3>Desenvolvedor Web Freelancer</h3>
          <h5>set 2023 - abr 2024</h5>
      </div>
    </div>

    </div>
  )
}
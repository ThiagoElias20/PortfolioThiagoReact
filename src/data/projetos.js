import imagemAngico from '../assets/images/projects/restauranteangico.png';
import imagemLares from '../assets/images/projects/sitelares.png';
import imagemAppSobrepeso from '../assets/images/projects/appsobrepeso.png';
import imagemPortfolioThiago from '../assets/images/projects/portfoliothiago.png';
import imagemHuddle from '../assets/images/projects/huddle.png';

import imagemJS from '../assets/images/icons-white/imagemJS.png';
import imagemReact from '../assets/images/icons-white/imagemReact.png';
import imagemWP from '../assets/images/icons-white/imagemWP.png';
import imagemPwpA from '../assets/images/icons-white/imagemPwpA.png';
import imagemStyledComp from '../assets/images/icons-white/imagemStyledComp.png';

const projetos = [
  {
    imagem: imagemAngico,
    titulo: "Restaurante Angico",
    texto: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eaque tenetur sequi dignissimos natus maxime laudantium minima veniam amet repellat similique non eius ipsa debitis, rerum voluptatibus? Iusto, voluptatibus commodi.",
    techs: [
      { name: "JavaScript", image: imagemJS },
    ],
    butLink: "https://thiagoelias20.github.io/landing-page-restaurante/",
    butLinkcod: "https://github.com/ThiagoElias20/landing-page-restaurante"
  },
  {
    imagem: imagemLares,
    titulo: "Lares Consultoria",
    texto: "Descrição do outro projeto.",
    techs: [
      { name: "WordPress", image: imagemWP }
    ],
    butLink: "https://laresconsultoria.com"
  },
  {
    imagem: imagemAppSobrepeso,
    titulo: "App Sobrepeso",
    texto: "Descrição do outro projeto.",
    techs: [
      { name: "PowerApps", image: imagemPwpA }
    ]
  },
  {
    imagem: imagemPortfolioThiago,
    titulo: "Portfolio WebDev",
    texto: "Você o esta vendo agora mesmo.",
    techs: [
      { name: "React", image: imagemReact },
      { name: "Javascript", image: imagemJS }
    ]
  },
  {
    imagem: imagemHuddle,
    titulo: "Huddle",
    texto: "A landing page do Huddle, uma aplicação que foca na criação de comunidades online. Um projeto feito durante o aprendizado do React e do Styled-Components.",
    techs: [
      { name: "React", image: imagemReact },
      { name: "Javascript", image: imagemJS },
      { name: "Styled-Components", image: imagemStyledComp }
    ],
    butLink: "https://huddle-olive.vercel.app",
    butLinkcod: "https://github.com/ThiagoElias20/Huddle"
  }
];

export default projetos;
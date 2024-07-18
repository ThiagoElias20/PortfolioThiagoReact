import { SkillsItem } from './SkillsItem';
import './styles.css';
import imghtml from '../../assets/images/icons/imagemHtml.png';
import imgcss from '../../assets/images/icons/imagemCss.png';
import imgjs from '../../assets/images/icons/imagemJS.png';
import imgreact from '../../assets/images/icons/imagemReact.png';
import imggit from '../../assets/images/icons/imagemGit.png';
import imgwp from '../../assets/images/icons/imagemWP.png';

export function Skills() {
  return (
    <div className='Skills'>
      <h1>Minhas <span>Skills</span></h1>
      <div className='SkillsItens'>
      <SkillsItem id="html" Titulo="HTML" Img={imghtml}/>
      <SkillsItem id="css" Titulo="CSS" Img={imgcss}/>
      <SkillsItem id="js" Titulo="JavaScript" Img={imgjs}/>
      <SkillsItem id="react" Titulo="React" Img={imgreact}/>
      <SkillsItem id="git" Titulo="Git" Img={imggit}/>
      <SkillsItem id="wp" Titulo="WordPress" Img={imgwp}/>
      </div>
    </div>
  )
}
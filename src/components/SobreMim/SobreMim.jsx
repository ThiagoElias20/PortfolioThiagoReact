import imgThiago from '../../assets/images/imgthiago.jpg';
import './styles.css';
import iconDownload from '../../assets/images/icons-white/download.png';

export function SobreMim() {
  return (
    <div className="SobreMim">
      <div className="foto">
        <img src={imgThiago} alt="imgThiago" />
      </div>
      <div className="desc">
        <h1>Sobre mim</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Reiciendis quia, autem vitae numquam provident aut nulla illo 
          eveniet porro nam quae accusamus ipsum asperiores odit sapiente 
          dolorem suscipit quisquam sit.</p>
          <a>Currículo <img src={iconDownload} alt="iconDownload" /></a>
      </div>
    </div>
  )
}
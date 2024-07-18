import "./styles.css";

export function SkillsItem(props) {
  return (
    <div className="SkillsItem" id={props.id}> <img src={props.Img} alt="SkillsItemImg" /> {props.Titulo}</div>
  )
}
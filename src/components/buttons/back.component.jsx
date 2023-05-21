import "./back.component.css";

export default function BackButton(props) {
  return (
    <a className="back_button_a" href={props.to ?? "/"}>
      <button className="btn btn-primary">Back</button>
    </a>
  );
}

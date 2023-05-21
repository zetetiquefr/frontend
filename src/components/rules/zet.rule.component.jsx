import "./zet.rule.component.css";

export default function ZetRuleComponent(props) {
  return (
    <div className="zet_rule_component">
      <li>
        <i>
          <strong>{props.name}:</strong> {props.text}
        </i>
      </li>
    </div>
  );
}

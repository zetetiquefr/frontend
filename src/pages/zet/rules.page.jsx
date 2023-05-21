import BasicHeaderComponent from "../../components/headers/basicHeader.component";
import ZetRulesComponent from "../../components/rules/zet.rules.component";
import "./rules.page.css";

export default function ZetRulePage() {
  return (
    <div className="zet_rule_page_parent">
      <BasicHeaderComponent />
      <div className="body">
        <div className="page_title">
          Voici ici toutes les règles et informations à connaître sur ce site
        </div>
        <div className="zet_rules_component">
          <ZetRulesComponent />
        </div>
      </div>
    </div>
  );
}

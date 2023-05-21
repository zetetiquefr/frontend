import { useState } from "react";
import "./zet.rules.component.css";
import ZetRuleComponent from "./zet.rule.component";

export default function ZetRulesComponent() {
  let [isActive, setIsActive] = useState(true);

  return (
    <div className="rules_component_parent">
      <h1 onClick={() => setIsActive(!isActive)} className="zet_title"><li>Zet Rules</li></h1>
      {isActive ? (
        <div className="rules">
          <div>
            La zététique, en tant qu'étude du raisonnement et de la pensée
            critique, encourage l'évaluation rigoureuse des affirmations et des
            arguments en s'appuyant sur des preuves et des méthodes
            scientifiques. Afin de promouvoir et de soutenir la pratique de la
            zététique, nous avons élaboré cette charte zététique pour la branche
            serbe. Cette charte vise à définir les principes, les objectifs et
            les engagements de notre organisation, ainsi qu'à guider les membres
            et les sympathisants dans leurs efforts pour développer et appliquer
            la pensée critique.
            <div  className="has_next_rule"></div>
          </div>
          <div className="body">
            <ZetRuleComponent
              name="Promotion de l'esprit critique"
              text="Encourager l'éducation, la pensée critique et la remise en question des idées reçues pour favoriser un environnement propice à la recherche de la vérité."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Méthode scientifique"
              text="S'appuyer sur la méthode scientifique pour explorer et examiner les phénomènes, en privilégiant les preuves empiriques et la réplicabilité des expériences."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Approche interdisciplinaire"
              text="Collaborer avec des experts de divers domaines pour aborder les questions de manière holistique et éclairée."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Respect des différences culturelles"
              text="Reconnaître et respecter les spécificités culturelles et historiques de la Serbie, tout en maintenant une approche objective et rigoureuse."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Communication transparente"
              text="Assurer une communication claire, transparente et honnête avec le public et les autres chercheurs."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Éducation populaire"
              text="S'engager à partager les connaissances et les compétences zététiques avec le grand public, en organisant des ateliers, des conférences et des événements pour promouvoir la pensée critique et la méthode scientifique."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Éthique de la recherche"
              text="Adhérer aux normes éthiques élevées en matière de recherche, en respectant la confidentialité, l'intégrité et la rigueur scientifique."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Ouverture d'esprit"
              text="Cultiver une attitude d'ouverture d'esprit face aux nouvelles idées et aux perspectives divergentes, tout en étant prêt à remettre en question ses propres convictions si les preuves le justifient."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Collaboration internationale"
              text="Travailler en étroite collaboration avec d'autres branches de la zététique et des organisations scientifiques à travers le monde pour échanger des connaissances, des méthodes et des perspectives."
            />
            <div className="has_next_rule"></div>
            <ZetRuleComponent
              name="Évolution et adaptation"
              text="Rester à jour sur les développements scientifiques, technologiques et sociétaux, et adapter constamment les approches et les méthodes de la zététique serbe pour rester pertinent et efficace."
            />
            <div className="last_rule"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

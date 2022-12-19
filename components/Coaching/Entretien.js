import Header from "../Header";
import Fact from "../Fact";
import Devis from "../Devis";
import Axes from "./Axes";
import Card from "./Card";
import Title from "./Title";
import ImageHeader from "./ImageHeader";

function Entretien() {
  return (
    <div className="bg-[#222324] font-['Aldrich'] ">
      <Header />
      <ImageHeader imgUrl="entretien-bg.jpg" title="Entretien physique" />
      <Card
        title="L'entretien physique avec les coachs LTW"
        text="L’entraînement régulier te donnera les clés nécessaires à
            l’optimisation de tes performances in-game grâce à l’aide du
            coaching sportif avec des exercices ciblés sur tes besoins actuels
            (renforcement, aérobie…)"
        logoUrl="strength.png"
        imgUrl="entretien-bg2.jpg"
      />
      <Title title="Pourquoi l'entretien physique ?" />
      <Card
        title="Tu le sais peut-être déja ?"
        text="L’entraînement régulier par le sport stimulerait le cerveau mais
        surtout l’aptitude à mener à bien des tâches qui exigent de
        l’attention, de l’organisation, de la planification. Soit tant de
        qualités utiles in-game n’est-ce pas ?"
        logoUrl="idea.png"
        imgUrl="entretien-bg3.jpg"
      />
      <Title title="Les axes d'amélioration ciblés" />
      <Axes />
      <Title title="Quelques chiffres" />
      <Fact
        green
        title="71%"
        par1="des joueurs répondants à l’enquête de l’Unité de Formation et de Recherche en Activités Physiques et Sportives de l’Université de Rennes déclarent être prêts à s’entraîner plus de deux fois par semaine pour améliorer leurs performances."
        par2="Il est temps pour toi de faire pareil pour progresser plus rapidement !"
      />
      <Fact
        title="2 J"
        par1="Soit le nombre de jours de renforcement musculaire par semaine que conseille l’organisation mondiale de la santé en parralèle d’au moins deux heures et demie d’activité modérée par semaine (la marche rapide, par exemple) ou une heure et quart d’une activité d’endurance soutenue, tel le jogging."
        par2="Tout ça dans le but d’être plus endurant physiquement in game !"
      />
      <Fact
        green
        title="30"
        par1="C’est le nombre de minutes approximatives d’une séance d’activité physique modérée (comme la course à pied ou le vélo) que recommande le Centre de Recherche et d’Information Nutritionnelles"
        par2="En soit c’est pas grand chose comparé à ce que tu peux y gagner ?"
      />
      <Devis />
    </div>
  );
}

export default Entretien;

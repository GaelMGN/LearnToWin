import Header from "../Header";
import Fact from "../Fact";
import Devis from "../Devis";
import Axes from "./Axes";
import Card from "./Card";
import Title from "./Title";
import ImageHeader from "./ImageHeader";

function Developpement() {
  return (
    <div className="bg-[#222324] font-['Aldrich'] ">
      <Header />
      <ImageHeader imgUrl="dev-perso-3.jpg" title="Developpement personnel" />
      <Card
        title="Le développement personnel avec les coachs LTW"
        text="Véritable chef d’orchestre de l’accompagnement LTW, nos coachs t’accompagneront dans le développement de ton savoir-être afin de forger ton mental dans le but d’évoluer vers ton objectif."
        logoUrl="strength-1.png"
        imgUrl="dev-perso-2.jpg"
      />
      <Title title="Pourquoi le développement personnel ?" />
      <Card
        title="Tu le sais peut-être déja ?"
        text="Les joueurs dépensent de l’énergie lors des compétitions, cependant cette dernière doit être méticuleusement accumulée en amont, selon des méthodes précises, afin d’être dépensée de la manière la plus efficiente possible.
        Donne le maximum pour être au top de ton niveau le jour J !"
        logoUrl="developpement-personnel.png"
        imgUrl="dev-perso-4.jpg"
      />
      <Title title="Les axes d'amélioration ciblés" />
      <Axes />
      <Title title="Quelques chiffres" />
      <Fact
        green
        title="42%"
        par1="C’est le nombre de joueurs enquêtés par l’université de Montréal qui sont intéressés par un apprentissage du travail en équipe. "
        par2="Seul tu vas plus vite mais à plusieurs tu vas plus loin, c’est aussi valable in game !"
      />
      <Fact
        title="92%"
        par1="Il s’agit du pourcentage de joueurs enquêtés par l’Unité de Formation et de Recherche en Activités Physiques et Sportives de l’université Rennes qui  votent pour une plus grande organisation aux niveaux régional, national et international du jeu réseau. "
      />
      <Fact
        green
        title="29%"
        par1="C’est le nombre de joueurs enquêtés par l’université de Montréal qui ne prenne jamais en compte les conseils de personnes extérieures."
        par2="Tu l’as compris les e-sportifs sont soutenus donc rejoins-nous !"
      />
      <Devis />
    </div>
  );
}

export default Developpement;

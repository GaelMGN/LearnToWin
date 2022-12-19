import Header from "../Header";
import Fact from "../Fact";
import Devis from "../Devis";
import Axes from "./Axes";
import Card from "./Card";
import Title from "./Title";
import ImageHeader from "./ImageHeader";

function Sommeil() {
  return (
    <div className="bg-[#222324] font-['Aldrich'] ">
      <Header />
      <ImageHeader imgUrl="dev-perso-3.jpg" title="Sommeil et relaxation" />
      <Card
        title="Le sommeil et la relaxation avec les coachs LTW"
        text="Les séances de relaxation contribuent à améliorer la qualité du sommeil et donc par conséquent tes capacités in-game.
        En effet pour que les performances soient optimales il faut dormir au moins 8 heures par jour à heure fixe."
        logoUrl="sleeping.png"
        imgUrl="sommeil-2.jpg"
      />
      <Title title="Pourquoi le sommeil / la relaxation ?" />
      <Card
        title="Tu le sais peut-être déja ?"
        text="L’un des symptômes les plus flagrants du manque de sommeil est une incapacité où une grande difficulté à rester concentré pendant de longues périodes. Sachant que certaines games peuvent durer longtemps c’est un risque évitable tu penses pas ?"
        logoUrl="working.png"
        imgUrl="sommeil-1.jpg"
      />
      <Title title="Les axes d'amélioration ciblés" />
      <Axes />
      <Title title="Quelques chiffres" />
      <Fact
        green
        title="80%"
        par1="C’est le pourcentage de joueurs enquêtés par l’Unité de Formation et de Recherche en Activités Physiques et Sportives de l’université Rennes qui se disent fatigués physiquement par leur pratique."
        par2="C’est important de palier à ca pour rester au top de ta forme in game!"
      />
      <Fact
        title="2X"
        par1="Soit le nombre de fois qu’est multiplié le risque de blessure pour des nuits de moins de 8 heures comparativement à des nuits de durée supérieure à ce chiffre."
        par2="Donne toi les moyens d’être toujours au top au moment clé !"
      />
      <Fact
        green
        title="6H"
        par1="Le nombre de temps de jeu par jour à partir duquel il est nécessaire de faire un maximum de pauses régulières afin de conserver des performances optimales."
        par2="Ca arrivera plus vite que tu le penses donc autant anticiper et apprendre les bonnes pratiques !"
      />
      <Devis />
    </div>
  );
}

export default Sommeil;

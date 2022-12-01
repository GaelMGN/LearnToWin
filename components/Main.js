import Header from "./Header";
import Video from "./Video";
import Skills from "./Skills";
import ImageCarousel from "./ImageCarousel";
import Fact from "./Fact";
import Devis from "./Devis";

function Main() {
  return (
    <main className="bg-[#222324] font-['Aldrich']">
      <Header />
      <Video />
      <Skills />
      <ImageCarousel />
      <Fact
        green
        title="30"
        par1="C’est le nombre de minutes de game sur League of Legends qui est comparable en terme d’effort à 10 km de course à pied !"
        par2="Autant te dire qu’une bonne préparation est nécessaire afin de performer au max."
      />
      <Fact
        title="6"
        par1=" sur 10, c’est le nombre de joueurs enquêtés par l’entreprise Mutualités Libres qui souffrent de problèmes physiques liés aux jeux vidéos."
        par2="Avec de l’entraînement tu peux facilement éviter la courbature dérangeante in game !"
      />
      <Fact
        green
        title="73 %"
        par1="Soit le pourcentage de joueurs enquêtés par l’université de Montréal qui procèdent à une préparation stratégique mentale et technique."
        par2="Si tu veux dominer le game c’est devenu un critère !"
      />
      <Devis />
    </main>
  );
}

export default Main;

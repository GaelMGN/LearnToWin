import Header from "./Header";
import Fact from "./Fact";
import Devis from "./Devis";
import { Carousel } from "react-responsive-carousel";

function Events(props) {
  return (
    <div className="bg-[#222324] font-['Aldrich']">
      <Header />
      <Fact
        par1="Au-delà de l’accompagnement des professionnels du e-sport, Learn To Win souhaite
promouvoir l’importance d’une pratique saine de jeux vidéo au travers de ses événements
afin d’atteindre un public moins averti."
      />
      <Fact
        green
        par1="Ils visent à sensibiliser les visiteurs de manière ludique au rôle de l’hygiène de vie dans cette
pratique via 3 axes :
"
        par2={
          <ul>
            <li>- La découverte 🥦</li>
            <li>- Le workshop 🏋️‍♀️</li>
            <li>- Le gaming 🎮</li>
          </ul>
        }
      />
      <div className="flex w-full justify-center">
        <button className="mx-auto mt-10 rounded-full bg-[#437A73] p-6 text-center font-bold transition-transform hover:-translate-y-1">
          En savoir plus
        </button>
      </div>

      <Devis />
    </div>
  );
}

export default Events;

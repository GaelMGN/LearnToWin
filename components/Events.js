import Header from "./Header";
import Fact from "./Fact";
import Devis from "./Devis";
import Image from "next/image";

function Events(props) {
  return (
    <div className="bg-[#222324] font-['Aldrich']">
      <Header />
      <Fact
        green
        par1="Au-delà de l’accompagnement des professionnels du e-sport"
        par2="Learn To Win souhaite
promouvoir l’importance d’une pratique saine de jeux vidéo au travers de ses événements
afin d’atteindre un public moins averti."
      />
      <Fact
        par1="Ils visent à sensibiliser les visiteurs de manière ludique au rôle de l’hygiène de vie dans cette
pratique via 3 axes :
"
      />
      <section className="grid grid-cols-2 items-center bg-[#437A73]">
        <div className="text-shadow-white text-center text-[28px] font-thin leading-none sm:text-[56px]">
          <h1>La découverte 🥧👨‍🍳</h1>
        </div>
        <Image
          src="/repas-event.jpg"
          layout="intrinsic"
          width="1000"
          height="800"
          objectFit="cover"
          className="overflow-hidden transition-transform hover:scale-105"
        />

        <Image
          src="/workshop-event.jpeg"
          layout="intrinsic"
          width="1000"
          height="800"
          objectFit="cover"
          className="overflow-hidden transition-transform hover:scale-105"
        />
        <div className="text-shadow-white flex h-full items-center justify-center bg-[#222324] text-center text-[28px] font-thin leading-none text-[#437A73] sm:text-[56px]">
          <h1>Le workshop 🏋️‍♀️⚽</h1>
        </div>

        <div className="text-shadow-white text-center text-[28px] font-thin leading-none sm:text-[56px]">
          <h1>Le gaming 🎮🎧</h1>
        </div>
        <Image
          src="/gaming-event.jpg"
          layout="intrinsic"
          width="1000"
          height="800"
          objectFit="cover"
          className="overflow-hidden transition-transform hover:scale-105"
        />
      </section>
      <section className="mt-10">
        <h2 className=" text-shadow-white text-center text-[28px] text-[#437A73] ">
          {" "}
          Ils nous font confiance :
        </h2>
        <div className="mt-6 flex h-[300px] justify-center gap-10">
          <Image
            src="/espot-logo-hq.png"
            layout="fixed"
            width="300"
            height="200"
          />
          <Image
            src="/logo-paris.png"
            layout="fixed"
            width="200"
            height="200"
            className="brightness-200 filter"
          />
          <Image
            src="/logo-vitality.png"
            layout="fixed"
            width="200"
            height="200"
          />
          <Image src="/logo-g2.png" layout="fixed" width="200" height="200" />
          <Image src="/logo-esl.png" layout="fixed" width="400" height="200" />
        </div>
      </section>

      <div className="flex w-full justify-center">
        <button className="mx-auto mt-16 rounded-full bg-[#437A73] p-12 text-center text-[28px] font-bold transition-transform hover:-translate-y-1">
          En savoir plus
        </button>
      </div>

      <Devis />
    </div>
  );
}

export default Events;

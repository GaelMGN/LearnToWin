import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <div className="flex flex-col items-center">
        <Image src={require("../src/assets/img/mascotte-torche.png")} />
        <p className="py-8 text-xl font-medium leading-6 text-gray-100">
          Sois conseillé et accompagné par des coachs de performances certifiés
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={require("../src/assets/img/mascotte-épée.png")} />
        <p className="placeholder: py-8 text-xl font-medium leading-6 text-gray-100">
          Forge tes compétences off-game (entretien physique, alimentation …)
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={require("../src/assets/img/mascotte-mort.png")} />
        <p className="py-8  text-xl font-medium leading-6 text-gray-100">
          Domine la concurrence in-game
        </p>
      </div>
    </div>
  );
}

export default Skills;

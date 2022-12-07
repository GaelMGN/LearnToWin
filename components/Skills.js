import Image from "next/image";

function Skills() {
  return (
    <div className="flex flex-col justify-center p-12 sm:mx-auto sm:max-w-full sm:flex-row sm:justify-around">
      <div className="sm:max-w-[30%] md:max-w-[25%]">
        <Image src={require("../src/assets/img/mascotte-torche.png")} />
        <p className=" text-center text-xl font-medium leading-6 text-gray-100">
          Sois conseillé et accompagné par des coachs de performances certifiés
        </p>
      </div>
      <div className="sm:max-w-[30%] md:max-w-[25%]">
        <Image src={require("../src/assets/img/mascotte-épée.png")} />
        <p className=" text-center text-xl font-medium leading-6 text-gray-100">
          Forge tes compétences off-game (entretien physique, alimentation …)
        </p>
      </div>
      <div className="sm:max-w-[30%] md:max-w-[25%]">
        <Image src={require("../src/assets/img/mascotte-mort.png")} />
        <p className=" text-center text-xl font-medium leading-6 text-gray-100">
          Domine la concurrence in-game
        </p>
      </div>
    </div>
  );
}

export default Skills;

import Image from "next/image";

function Axes() {
  return (
    <div className="flex flex-col justify-center gap-6 p-12 sm:mx-auto sm:max-w-full sm:flex-row sm:justify-around">
      <div className="flex flex-col items-center sm:max-w-[30%] md:max-w-[25%]">
        <Image src="/capteur-de-mouvement.png" width="256" height="256" />
        <p className=" pt-6 text-center text-3xl font-medium leading-6 text-gray-100">
          Réflèxes
        </p>
      </div>
      <div className="flex flex-col items-center sm:max-w-[30%] md:max-w-[25%]">
        <Image src="/stress.png" width="256" height="256" />
        <p className=" pt-6 text-center text-3xl font-medium leading-6 text-gray-100">
          Stress
        </p>
      </div>
      <div className="flex flex-col items-center sm:max-w-[30%] md:max-w-[25%]">
        <Image src="/se-concentrer.png" width="256" height="256" />
        <p className=" pt-6 text-center text-3xl font-medium leading-6 text-gray-100">
          Traitement de l'information
        </p>
      </div>
    </div>
  );
}

export default Axes;

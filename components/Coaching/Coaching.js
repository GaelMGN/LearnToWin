import Devis from "../Devis";
import Header from "../Header";
import Link from "next/link";

function Coaching(props) {
  return (
    <div className="bg-[#222324] font-['Aldrich']">
      <Header />
      <div className="flex h-[80vh] w-full items-center justify-center bg-[url('/Coaching.jpeg')] bg-cover bg-center ">
        <h1 className="text-[48px] font-extrabold text-[#437A73] text-shadow sm:text-[80px] xl:text-[130px]">
          Découvrir nos coaching
        </h1>
      </div>
      <div className=" flex flex-col items-center justify-center px-10 py-16 ">
        <h1 className="text-shadow-white text-center text-7xl text-[#437A73] sm:text-9xl">
          Choisis ton coaching
        </h1>
      </div>
      <Link href="/entretien">
        <div className="mb-32 flex h-[80vh] w-full cursor-pointer items-center justify-center bg-[url('/Physique2.jpeg')] bg-cover bg-center">
          <h1 className="text-center text-[48px] font-extrabold text-[#437A73] text-shadow sm:text-[80px] xl:text-[130px]">
            Développement physique
          </h1>
        </div>
      </Link>
      <div className="mb-32 flex h-[80vh] w-full cursor-pointer items-center justify-center bg-[url('/Nutrition2.jpeg')] bg-cover bg-center">
        <h1 className="mb-32 text-center text-[48px] font-extrabold text-[#437A73] text-shadow sm:text-[80px] xl:text-[130px]">
          Nutrition
        </h1>
      </div>
      <div className=" flex h-[80vh] w-full cursor-pointer items-center justify-center bg-[url('/sommeil2.jpeg')] bg-cover bg-center">
        <h1 className="text-center text-[48px] font-extrabold text-[#437A73] text-shadow sm:text-[80px] xl:text-[130px]">
          Sommeil et relaxation
        </h1>
      </div>
      <Devis />
    </div>
  );
}

export default Coaching;

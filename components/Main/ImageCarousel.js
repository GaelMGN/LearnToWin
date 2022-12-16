import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  return (
    <section>
      <h1 className="text-shadow-lt pb-10 text-center text-[50px] font-thin leading-none text-[#437A73]">
        Nos domaines de compétences
      </h1>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
        showStatus={false}
        emulateTouch
        className="relative border-t-2 border-[#437A73] bg-[#222324] text-4xl font-thin text-[#BAE3F4] sm:text-7xl"
      >
        <div className="relative max-h-[800px] w-full text-center">
          <Image
            src="/dev-personnel.jpeg"
            layout="intrinsic"
            objectFit="cover"
            objectPosition="top"
            width="2560"
            height="800"
          />
          <h1 className="text-shadow-lt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich']">
            Développement personnel
          </h1>
        </div>
        <div className="relative max-h-[800px] w-full text-center">
          <Image
            src="/entretien-physique.jpeg"
            layout="intrinsic"
            objectFit="cover"
            width="2560"
            height="800"
          />
          <h1 className="text-shadow-lt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich']">
            Entretien physique
          </h1>
        </div>
        <div className="relative max-h-[800px] w-full text-center ">
          <Image
            src="/nutrition.jpeg"
            layout="intrinsic"
            objectFit="cover"
            width="2560"
            height="800"
          />
          <h1 className="text-shadow-lt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich']">
            Nutrition
          </h1>
        </div>
        <div className="relative max-h-[800px] w-full bg-slate-600 text-center">
          <Image
            src="/sommeil-relaxation.jpeg"
            layout="intrinsic"
            objectFit="cover"
            width="2560"
            height="800"
          />
          <h1 className="text-shadow-lt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich']">
            Sommeil / Relaxation
          </h1>
        </div>
      </Carousel>
      <h1 className="text-shadow-white bg-white p-10  text-center text-[44px] font-thin leading-none text-[#437A73]">
        Pourquoi faire appel à un coaching de performance ?
      </h1>
    </section>
  );
}

export default ImageCarousel;

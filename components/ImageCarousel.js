import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function ImageCarousel() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      infiniteLoop={true}
      dynamicHeight={true}
      showStatus={false}
      emulateTouch
      className="relative border-t-2 border-[#437A73] bg-[#222324] text-4xl font-thin text-[#BAE3F4]">
      <div className="relative max-h-[800px] w-full text-center">
        <img
          src="/dev-personnel.jpeg"
          className="max-h-[800px] w-full object-cover object-top"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich'] text-shadow">
          Développement personnel
        </h1>
      </div>
      <div className="relative max-h-[1000px] w-full text-center">
        <img
          src="/entretien-physique.jpeg"
          className="max-h-[800px] w-full object-cover object-[0%_30%]"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich'] text-shadow">
          Entretien physique
        </h1>
      </div>
      <div className="relative max-h-[800px] w-full text-center ">
        <img
          src="nutrition.jpeg"
          className="max-h-[800px] w-full object-cover object-center"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich'] text-shadow">
          Nutrition
        </h1>
      </div>
      <div className="relative max-h-[800px] w-full bg-slate-600 text-center">
        <img
          src="/sommeil-relaxation.jpeg"
          className="max-h-[800px] w-full object-cover object-center"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Aldrich'] text-shadow">
          Sommeil / Relaxation
        </h1>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;

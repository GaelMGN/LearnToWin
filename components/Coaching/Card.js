import Image from "next/image";

function Card(props) {
  return (
    <div className="relative flex h-[80vh] flex-col justify-between border-t-2 border-[#BAE3F4]">
      <div className="max-h-1/2 absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg bg-[#437A73] bg-opacity-50 p-6 text-center text-[#BAE3F4] text-shadow sm:gap-8 lg:p-16">
        <Image
          src={`/${props.logoUrl}`}
          width="196"
          height="196"
          layout="intrinsic"
          objectFit="contain"
          className="z-10 "
        />
        <h2 className="text-center text-3xl text-shadow xl:text-5xl">
          {props.title}
        </h2>
        <p className="font-sans text-xl text-white xl:text-2xl">{props.text}</p>
      </div>
      <Image
        src={`/${props.imgUrl}`}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
    </div>
  );
}

export default Card;

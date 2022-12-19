import Image from "next/image";

function ImageHeader(props) {
  return (
    <div className="relative h-[80vh] ">
      <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-[#BAE3F4] text-shadow sm:text-8xl">
        {props.title}
      </h1>
      <Image
        src={`/${props.imgUrl}`}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
    </div>
  );
}

export default ImageHeader;

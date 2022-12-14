import Image from "next/image";

function Video() {
  return (
    <div className="relative flex justify-center overflow-hidden ">
      <video
        className="absolute z-0 min-h-full w-auto min-w-full max-w-none bg-gradient-to-r from-black to-black"
        src="/videoBg.mp4"
        type="video/mp4"
        loop
        muted
        autoPlay
      />
      <div className="relative z-10 flex flex-col px-[15%] py-[10%]">
        <h1 className="text-[48px] font-extrabold text-[#437A73] text-shadow sm:text-[80px] xl:text-[90px]">
          Learn to win
        </h1>
        <p className="text-lg font-thin text-[#437A73] text-shadow xl:text-[28px]">
          Pour devenir le meilleur in game, améliore tes performances off game
        </p>
      </div>
    </div>
  );
}

export default Video;

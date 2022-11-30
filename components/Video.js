function Video() {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <video
        className="absolute z-0 min-h-full w-auto min-w-full max-w-none"
        src="/videoBg.mp4"
        type="video/mp4"
        loop
        muted
        autoPlay
      />
      <div className="relative z-10 flex flex-col px-[15%] py-[15%] ">
        <h1 className="font-['Aldrich'] text-[48px] font-extrabold text-[#437A73] text-shadow">
          Learn to win
        </h1>
        <p className="font-['Aldrich'] text-lg font-thin text-[#437A73] text-shadow">
          Pour devenir le meilleur in game, améliore tes performances off game
        </p>
      </div>
    </div>
  );
}

export default Video;

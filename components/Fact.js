function Fact(props) {
  let style = "";
  props.green ? (style = "bg-[#437A73]") : (style = "bg-[#222324] text-white");

  return (
    <div
      className={
        style +
        " flex flex-col items-center justify-center px-10 py-16 text-center text-2xl leading-none"
      }
    >
      <h1
        className={
          (!props.green ? "text-[#437A73]" : "text-white") +
          " text-shadow-white pb-10 text-7xl "
        }
      >
        {props.title}
      </h1>
      <p>{props.par1}</p>
      <p className="pt-5">{props.par2}</p>
    </div>
  );
}

export default Fact;

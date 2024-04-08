/* eslint-disable react/prop-types */
function MathOption({ text, img, children }) {
  return (
    <div className="flex gap-0  w-full items-center py-4 px-3  flex-row md:flex-col md:w-[15rem] h-fit md:h-[10rem] md:justify-center md:gap-2">
      <img src={img} className="w-[9rem]" />
      <div className="ml-4 md:ml-0 text-left md:text-center ">
        <p className="font-semibold">{text}</p>
        <p className="font-normal text-slate-500 text-xl">{children}</p>
      </div>
    </div>
  );
}

export default MathOption;

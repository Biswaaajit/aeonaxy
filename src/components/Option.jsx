/* eslint-disable react/prop-types */
function Option({ emote, text = "", children = "" }) {
  return (
    <div className="flex items-center py-2">
      <img className="w-[3.8rem]" src={emote} />
      <p className=" text-md sm:text-lg font-semibold ml-4 sm:ml-7">
        {text}
        <span className=" font-normal text-slate-500"> {children}</span>
      </p>
    </div>
  );
}

export default Option;

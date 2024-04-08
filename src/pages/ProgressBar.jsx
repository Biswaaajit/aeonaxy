/* eslint-disable react/prop-types */

function ProgressBar({ cent, dispatch }) {
  return (
    <div className="flex flex-row items-center justify-center mt-6 gap-4">
      <button
        className="   rounded-full px-2 font-semibold hover:border-2 hover:border-slate-400/40"
        onClick={() => dispatch({ type: "navigateBack" })}
      >
        <span className="relative bottom-[2.5px] font-bold text-2xl">&lt;</span>
      </button>
      <div className="w-[65vw] h-1 bg-slate-400/75 rounded-full">
        <div
          className="h-full bg-green-600 rounded-full"
          style={{ width: `${cent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;

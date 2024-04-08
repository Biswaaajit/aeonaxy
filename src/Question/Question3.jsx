/* eslint-disable react/prop-types */

function Question3({ dispatch }) {
  return (
    <div className="mt-16 text-center px-3 pb-8 transition-all w-full">
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-20 transition-all mb-8">
        <img
          src="pulley.png"
          className="w-[15rem] md:w-[20rem] transition-all"
        />
        <div className="space-y-4 py-7 w-full md:w-[40rem] transition-all">
          <p className="text-2xl sm:text-3xl font-bold md:text-left transition-all">
            You&apos;re in the right place
          </p>
          <p className="text-md sm:text-lg md:text-left transition-all ">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You&apos;ll interact with concepts and solve fun
            problems in math, science, and computer science.
          </p>
        </div>
      </div>
      <button
        className="px-10 py-2 text-lg rounded-lg bg-black text-slate-100"
        onClick={() => dispatch({ type: "navigate" })}
      >
        Continue
      </button>
    </div>
  );
}

export default Question3;

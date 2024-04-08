import { useState } from "react";
import LearningOption from "../components/LearningOption";

function Learning() {
  const [option, setOption] = useState(null);
  return (
    <div className="text-center  flex flex-col items-center justify-center h-[100vh]">
      <p className="text-2xl sm:text-3xl font-bold transition-all mb-2">
        Learning paths based on your answers
      </p>
      <p className="text-md sm:text-lg  text-slate-400 transition-all ">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="flex flex-col items-center gap-12 py-8 lg:flex-row lg:flex-wrap lg:justify-center mx-4 sm:mx-0">
        <div
          className={`border-2 border-slate-400/40 rounded-md relative ${
            option === 1 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => setOption(1)}
        >
          <LearningOption text="Foundational Math" />
          <p className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#F3B136] px-4 py-1 rounded-full font-semibold">
            Most Popular
          </p>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            option === 2 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => setOption(2)}
        >
          <LearningOption text="Mathematical Thinking" />
        </div>
      </div>
    </div>
  );
}

export default Learning;

/* eslint-disable react/prop-types */
import gsap from "gsap/gsap-core";
import Button from "../components/Button";
import MathOption from "../components/MathOption";
import { useGSAP } from "@gsap/react";

function Question4({ page, dispatch }) {
  const { show, ques4 } = page;
  useGSAP(() => {
    gsap.from("#q4", {
      x: 500,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return (
    <div id="q4" className="mt-8  space-y-6 px-4 pb-8 text-center w-full">
      <p className="text-center text-2xl sm:text-3xl font-bold">
        What is your math comfort level?
      </p>
      <p className="text-slate-500 text-md sm:text-lg text-center">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>
      <div className=" flex flex-col py-0 md:py-10 md:flex-row md:flex-wrap gap-4 md:gap-6 md:items-center md:space-y-0 md:justify-around">
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques4 === 1 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option4", payload: 1 })}
        >
          <MathOption img="math1.PNG" text="Arithmetic">
            Introductory
          </MathOption>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques4 === 2 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option4", payload: 2 })}
        >
          <MathOption img="Math2.PNG" text="Basic Algebra">
            Foundational
          </MathOption>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques4 === 3 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option4", payload: 3 })}
        >
          <MathOption img="math3.PNG" text="Intermediate Algebra">
            Intermediate
          </MathOption>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques4 === 4 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option4", payload: 4 })}
        >
          <MathOption img="math4.PNG" text="Calculus">
            Advanced
          </MathOption>
        </div>
      </div>
      <Button show={show} dispatch={dispatch} />
    </div>
  );
}

export default Question4;

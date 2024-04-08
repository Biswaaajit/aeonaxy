/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Option from "../components/Option";
import gsap from "gsap/gsap-core";

function Question2({ page, dispatch }) {
  const { show, ques2 } = page;
  useGSAP(() => {
    gsap.from("#q2", {
      x: 500,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return (
    <div id="q2" className="mt-8 text-center space-y-6 px-4 pb-8 ">
      <p className="text-center text-2xl sm:text-3xl font-bold">
        Which are you most interested in?
      </p>
      <p className="text-slate-500 text-md sm:text-lg">
        Choose just one. This will help us get you started (but won&apos;t limit
        your experience).
      </p>
      <div className="space-y-4 w-full sm:w-[70vmax] md:w-[60vmax] lg:w-[40vmax]">
        <div
          className={`border-2 border-slate-400/40 rounded-md px-2 ${
            ques2 === 1 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option2", payload: 1 })}
        >
          <Option
            emote="Chart.png"
            text="Learning Specific skills to advance my career"
          />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md px-2 ${
            ques2 === 2 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option2", payload: 2 })}
        >
          <Option
            emote="explore.png"
            text="Exploring new topics I'm interested in"
          />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md px-2 ${
            ques2 === 3 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option2", payload: 3 })}
        >
          <Option emote="math.png" text="Refreshing my math foundations" />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md px-2 ${
            ques2 === 4 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option2", payload: 4 })}
        >
          <Option emote="target.png" text="Exercising my brain to stay sharp" />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md px-2 ${
            ques2 === 5 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option2", payload: 5 })}
        >
          <Option emote="eyes.png" text="Something else" />
        </div>
      </div>
      <Button show={show} dispatch={dispatch} />
    </div>
  );
}

export default Question2;

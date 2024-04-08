/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import Option from "../components/Option";
import gsap from "gsap/gsap-core";

function Question1({ page, dispatch }) {
  const { show, ques1 } = page;
  useGSAP(() => {
    gsap.from("#q1", {
      x: 500,
      opacity: 0,
      duration: 0.8,
    });
  }, []);
  return (
    <div id="q1" className="mt-8 text-center space-y-6 px-4 pb-8 w-full">
      <p className="text-center text-2xl sm:text-3xl font-bold">
        Which describes you best?
      </p>
      <p className="text-slate-500 text-md sm:text-lg">
        This will help us personalize your experience.
      </p>
      <div className="space-y-4 w-full sm:w-[70vmax] md:w-[60vmax] lg:w-[40vmax]">
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 1 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 1 })}
        >
          <Option emote="student.png" text="Student">
            or soon to be enrolled
          </Option>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 2 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 2 })}
        >
          <Option emote="professional.png" text="Professional">
            or pursuing a career
          </Option>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 3 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 3 })}
        >
          <Option emote="parent.png" text="Parent">
            of a school-aged child
          </Option>
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 4 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 4 })}
        >
          <Option emote="learner.png" text="LifeLong Learner" />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 5 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 5 })}
        >
          <Option emote="teacher.png" text="Teacher" />
        </div>
        <div
          className={`border-2 border-slate-400/40 rounded-md ${
            ques1 === 6 && "shadow-[0px_0px_4px_1px_#FFAD46] border-none"
          }`}
          onClick={() => dispatch({ type: "option1", payload: 6 })}
        >
          <Option emote="Other.png" text="Others" />
        </div>
      </div>
      <Button show={show} dispatch={dispatch} />
    </div>
  );
}

export default Question1;

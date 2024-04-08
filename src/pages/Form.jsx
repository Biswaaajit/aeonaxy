import { useReducer } from "react";

import Question1 from "../Question/Question1";
import Question2 from "../Question/Question2";
import Question3 from "../Question/Question3";
import Question4 from "../Question/Question4";
import Question5 from "../Question/Question5";
import ProgressBar from "./ProgressBar";

const initial = { form: 1, show: false, ques4: null, ques1: null, ques2: null };
function reducer(state, action) {
  switch (action.type) {
    case "button":
      return {
        ...state,
        show: true,
      };
    case "navigate":
      if (state.form === 1) return { ...state, form: 2, show: false };
      if (state.form === 2) return { ...state, form: 3 };
      if (state.form === 3) return { ...state, form: 4, show: false };
      if (state.form === 4) return { ...state, form: 5 };
      else return { ...state };
    case "option4":
      return {
        ...state,
        ques4: action.payload,
        show: true,
      };
    case "option1":
      return {
        ...state,
        ques1: action.payload,
        show: true,
      };
    case "option2":
      return {
        ...state,
        ques2: action.payload,
        show: true,
      };
    case "navigateBack":
      if (state.form === 1) return { ...state };
      else
        return {
          ...state,
          form: state.form - 1,
          show: true,
        };
  }
}
function Form() {
  const [page, dispatch] = useReducer(reducer, initial);

  const { form } = page;
  const cent = (form * 100) / 5;

  return (
    <div className="flex flex-col items-center">
      <ProgressBar cent={cent} dispatch={dispatch} />
      {form === 1 && <Question1 page={page} dispatch={dispatch} />}
      {form === 2 && <Question2 page={page} dispatch={dispatch} />}
      {form === 3 && <Question3 page={page} dispatch={dispatch} />}
      {form === 4 && <Question4 page={page} dispatch={dispatch} />}
      {form === 5 && <Question5 dispatch={dispatch} />}
    </div>
  );
}

export default Form;

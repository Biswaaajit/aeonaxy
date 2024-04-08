/* eslint-disable react/prop-types */

function Button({ show, dispatch }) {
  return (
    <div>
      <button
        className={`px-10 py-2 text-lg rounded-lg ${
          show ? "bg-black text-slate-100" : "bg-gray-400/50 text-slate-100"
        }`}
        disabled={!show}
        onClick={() => dispatch({ type: "navigate" })}
      >
        Continue
      </button>
    </div>
  );
}

export default Button;

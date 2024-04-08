/* eslint-disable react/prop-types */
function LearningOption({ text }) {
  return (
    <div className="flex flex-row items-center w-fit sm:w-[30rem] px-4 py-6 transition-all">
      <p className="text-left text-lg">
        <span className="font-semibold">{text} </span>
        Build your foundational skills in algebra, geometry, and probability.
      </p>
      <img src="LOption1.PNG" className="w-[15vmax] sm:w-[20rem]" />
    </div>
  );
}

export default LearningOption;

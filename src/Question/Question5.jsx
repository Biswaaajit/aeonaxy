import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function Question5() {
  const navigate = useNavigate();
  return (
    <div className="mt-16 text-center px-3 transition-all w-full">
      <div className="flex flex-col items-center gap-0 md:flex-row md:gap-20 transition-all mb-8">
        <img
          src="cheerleader.png"
          className="w-[15rem] md:w-[20rem] transition-all"
        />
        <div className="space-y-4 py-7 w-full md:w-[40rem] transition-all">
          <p className="text-2xl sm:text-3xl font-bold md:text-left transition-all">
            You&apos;re on your way!
          </p>
          <div className="md:text-left space-x-2 md:space-x-1 transition-all">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#EEA720" }} />
              </span>
            ))}
          </div>
          <p className="text-md sm:text-lg md:text-left transition-all ">
            &ldquo;Through its engaging and well-structured courses. Brillient
            has taught me mathematical concepts that I previously struggled to
            understand. I now fill confident approching both technical job
            interviews and real world problem solving situations.&rdquo;
          </p>
          <p className="text-md sm:text-lg md:text-left transition-all  ">
            — Jacob S.
          </p>
        </div>
      </div>
      <button
        className="px-10 py-2 text-lg rounded-lg bg-black text-slate-100"
        onClick={() => navigate("/loading")}
      >
        Continue
      </button>
    </div>
  );
}

export default Question5;

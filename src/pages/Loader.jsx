import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loader() {
  const [count, setCount] = useState(1);
  const rd = 70;
  const dashArray = rd * Math.PI * 2;
  const off = dashArray + (dashArray * count) / 100;
  const navigate = useNavigate();
  useEffect(
    function () {
      var a = 0;
      const id = setInterval(function () {
        a = a + Math.floor(Math.random() * 10);
        console.log(a);
        if (count < 100) {
          setCount((c) => c + a);
        } else {
          setCount(100);
          navigate("/learning");
        }
      }, 50);
      return () => clearInterval(id);
    },
    [count, navigate]
  );

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-5">
      <div className="relative w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <circle
            cx="80"
            cy="80"
            r={rd}
            strokeWidth="15px"
            className=" circle"
            style={{ strokeDasharray: off, strokeDashoffset: dashArray }}
          />
        </svg>
      </div>
      <p className="text-center px-12 block sm:hidden text-xl font-semibold">
        Finding learning path recommendations for you based on your responses
      </p>
      <div className="text-center hidden sm:block text-xl font-semibold">
        <p>Finding learning path recommendations for you based on</p>
        <p>your responses.</p>
      </div>
    </div>
  );
}

export default Loader;

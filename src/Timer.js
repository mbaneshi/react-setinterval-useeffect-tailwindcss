import { useRef, useState } from "react";

const Timer = () => {
  let id = useRef(0);
  const delay = 1000;

  //* Hooks 1
  const [second, setSecond] = useState(0);

  const timingStaff = () => {
    setSecond((second) => second + 1);
  };

  const Timing = (fn, de) => {
    id.current = setInterval(fn, de);
    console.log("timing", id.current);
  };
  //*functions
  const handleStart = () => {
    console.log(" start hitted");
    console.log(id.current);

    Timing(timingStaff, delay);
  };

  const handleStop = () => {
    console.log("stop hitted");
    console.log(id.current);
    clearInterval(id.current);
  };
  const handleReset = () => {
    setSecond(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* <input type="text" onChange={inputHandler} /> */}

      <button onClick={handleStart} style={{ padding: "1rem", color: "blue" }}>
        Start
      </button>
      <button onClick={handleStop} style={{ padding: "1rem", color: "blue" }}>
        Stop
      </button>
      <button onClick={handleReset} style={{ padding: "1rem", color: "blue" }}>
        Reset
      </button>
      <button style={{ padding: "1rem", color: "blue" }}>
        {second} " mil Second passed{" "}
      </button>
    </div>
  );
};
export default Timer;

import React, { useState, useRef } from "react";
import './stopwatch.css'

function Stopwatch() {
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [msec, setMsec] = useState("00");
  const [stoper, setStoper] = useState(null);

  const getmin = useRef(null);
  const getsec = useRef(null);
  const getmili = useRef(null);

  const start = () => {
    setStoper(
      setInterval(function () {
        let updatedMsec = parseInt(msec, 10) + 1;
        let updatedSec = parseInt(sec, 10);
        let updatedMin = parseInt(min, 10);

        if (updatedMsec === 100) {
          updatedSec += 1;
          updatedMsec = 0;
        }

        if (updatedSec === 60) {
          updatedMin += 1;
          updatedSec = 0;
        }

        setMsec(updatedMsec.toString().padStart(2, "0"));
        setSec(updatedSec.toString().padStart(2, "0"));
        setMin(updatedMin.toString().padStart(2, "0"));

        getmili.current.innerHTML = updatedMsec;
        getsec.current.innerHTML = updatedSec;
        getmin.current.innerHTML = updatedMin;
      }, 1000) // Interval set to 10ms for 100ths of a second
    );
  };

  const stop = () => {
    clearInterval(stoper);
    setStoper(null);
  };

  const reset = () => {
    setMin("00");
    setSec("00");
    setMsec("00");

    getmin.current.innerHTML = "00";
    getsec.current.innerHTML = "00";
    getmili.current.innerHTML = "00";

    stop();
  };

  return (
    <div className="container">
      <div className="head">
        <h2>STOPWATCH</h2>
      </div>

      <div className="content">
        <h1 ref={getmin}>00</h1>
        <p>:</p>
        <h1 ref={getsec}>00</h1>
        <p>:</p>
        <h1 ref={getmili}>00</h1>
      </div>

      <div className="btns">
        <button onClick={start} className="btn">
          Start
        </button>
        <button onClick={stop} className="btn">
          Stop
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;

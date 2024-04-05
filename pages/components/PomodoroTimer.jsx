import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!timerActive && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const startTimer = () => {
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = (minutes) => {
    setTimeLeft(minutes * 60);
    setTimerActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-6 mb-8">
        <button
          className="px-5 py-3 bg-white text-black rounded-full shadow"
          onClick={() => resetTimer(25)}
        >
          Pomodoro
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-full shadow"
          onClick={() => resetTimer(5)}
        >
          Short Break
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-full shadow"
          onClick={() => resetTimer(15)}
        >
          Long Break
        </button>
      </div>
      <div className="text-white text-8xl font-semibold mb-8">
        {formatTime(timeLeft)}
      </div>
      <div className="flex space-x-4">
        <button
          className="px-8 py-4 bg-white text-black rounded-full border-2 border-white shadow hover:bg-transparent transition duration-300 ease-in-out hover:text-white"
          onClick={startTimer}
        >
          Start
        </button>
        <button
          className="px-6 py-4 bg-white text-black rounded-full shadow"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="p-4 px-5 bg-white rounded-full shadow"
          onClick={() => resetTimer(25)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M479.231-140.001q-129.923 0-226.461-85.538Q156.232-311.078 141.617-440h61.229Q218-336.385 296.115-268.192 374.231-200 479.231-200q117 0 198.5-81.5t81.5-198.5q0-117-81.5-198.5t-198.5-81.5q-65.538 0-122.846 29.115-57.307 29.115-98.692 80.115h104.615v59.999H159.234v-203.075h59.998v94.77q48.692-57.461 116.615-89.192 67.923-31.731 143.384-31.731 70.769 0 132.615 26.77 61.845 26.769 107.845 72.768 46 46 72.769 107.846Q819.229-550.769 819.229-480T792.46-347.385q-26.769 61.846-72.769 107.846-46 45.999-107.845 72.768-61.846 26.77-132.615 26.77Zm120.077-178.923L450.385-467.846V-680h59.999v187.846l131.077 131.078-42.153 42.152Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;

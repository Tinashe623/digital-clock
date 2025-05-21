import { useState, useEffect } from "react";

// Functional component for the digital clock
const DigitalClock = () => {
  // State to hold the current time
  const [time, setTime] = useState(new Date());

  // Effect to update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date()); // Updates time every second
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Function to format time for display (12-hour format with AM/PM)
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM"; // Determine AM/PM

    hours = hours % 12 || 12; // Convert hours to 12-hour format

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  // Function to ensure double-digit formatting (e.g., "02" instead of "2")
  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <main className="clock-container">
      <section className="clock">
        <span>{formatTime()}</span>
      </section>
    </main>
  );
};

export default DigitalClock;

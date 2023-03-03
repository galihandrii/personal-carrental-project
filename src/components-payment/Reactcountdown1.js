import React, { useState, useEffect } from 'react';

function ReactCountdown1() {
  const [countdown, setCountdown] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown.seconds === 0 && prevCountdown.minutes === 0) {
          clearInterval(interval);
          return prevCountdown;
        } else if (prevCountdown.seconds === 0) {
          return {
            minutes: prevCountdown.minutes - 1,
            seconds: 59
          };
        } else {
          return {
            minutes: prevCountdown.minutes,
            seconds: prevCountdown.seconds - 1
          };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {countdown.minutes === 0 && countdown.seconds === 0 ? (
        <div>Time's up!</div>
      ) : (
        <div className='countdown-start'>
          {countdown.minutes.toString().padStart(2, '0')}:
          {countdown.seconds.toString().padStart(2, '0')}
        </div>
      )}
    </div>
  );
}

export default ReactCountdown1
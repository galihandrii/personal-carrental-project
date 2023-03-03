import React, { useState, useEffect } from 'react';

function Reactcountdown() {
  const [countdown, setCountdown] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        const totalSeconds = prevCountdown.hours * 3600 + prevCountdown.minutes * 60 + prevCountdown.seconds;
        if (totalSeconds <= 0) {
          clearInterval(interval);
          return prevCountdown;
        }
        const seconds = totalSeconds - 1;
        return {
          hours: Math.floor(seconds / 3600),
          minutes: Math.floor((seconds % 3600) / 60),
          seconds: seconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='countdown-start'>
      {countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 ? (
        <div>Time's up!</div>
      ) : (
        <div>
         {countdown.hours.toString().padStart(2, '0')}:{countdown.minutes.toString().padStart(2, '0')}:{countdown.seconds.toString().padStart(2, '0')}
        </div>
      )}
    </div>
  );
}
 export default Reactcountdown;
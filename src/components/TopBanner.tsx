import { useState, useEffect } from "react";

const STORAGE_KEY = "offer_end_time";

const getOrCreateEndTime = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const storedTime = parseInt(stored, 10);
    if (storedTime > Date.now()) {
      return storedTime;
    }
  }
  const newTime = Date.now() + 3 * 60 * 60 * 1000;
  localStorage.setItem(STORAGE_KEY, newTime.toString());
  return newTime;
};

const calculateTimeLeft = (endTime: number) => {
  const difference = endTime - Date.now();
  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const TopBanner = () => {
  const [endTime] = useState(() => getOrCreateEndTime());
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTime);
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(interval);
        localStorage.removeItem(STORAGE_KEY);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-brand-orange py-4 px-4 text-center">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <p className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
          🔥 Oferta por tempo limitado!
        </p>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white font-bold text-lg sm:text-xl px-3 py-2 rounded-lg min-w-[48px] text-center">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-white font-bold text-xl">:</span>
          <span className="bg-white/20 text-white font-bold text-lg sm:text-xl px-3 py-2 rounded-lg min-w-[48px] text-center">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-white font-bold text-xl">:</span>
          <span className="bg-white/20 text-white font-bold text-lg sm:text-xl px-3 py-2 rounded-lg min-w-[48px] text-center">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
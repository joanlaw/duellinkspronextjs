import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(targetDate);

            if (newTimeLeft.total <= 0) {
                clearInterval(intervalId);
            }

            setTimeLeft(newTimeLeft);
        }, 1000);

        // Limpiar intervalo al desmontar
        return () => clearInterval(intervalId);
    }, [targetDate]);

    if (timeLeft.error) {
        return <p>Error: {timeLeft.error}</p>;
    }

    return (
        <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <p>días</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <p>horas</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <p>minutos</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <p>segundos</p>
        </div>
      </div>
    );
}

const calculateTimeLeft = (targetDate) => {
    const target = new Date(targetDate);

    // Verificar validez de la fecha
    if (isNaN(target.getTime())) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            total: 0,
            error: "Fecha objetivo no válida."
        };
    }

    const now = new Date();
    const difference = +target - +now;
    const total = difference;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
        days,
        hours,
        minutes,
        seconds,
        total
    };
}

export default CountdownTimer;
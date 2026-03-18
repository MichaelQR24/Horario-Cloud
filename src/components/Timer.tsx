import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [totalSeconds, setTotalSeconds] = useState(45 * 60);
  const [remaining, setRemaining] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<{ mins: number; label: string }>({ mins: 45, label: 'enfoque' });

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, remaining]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemaining(totalSeconds);
  };

  const changeMode = (mins: number, label: string) => {
    setIsRunning(false);
    setTotalSeconds(mins * 60);
    setRemaining(mins * 60);
    setMode({ mins, label });
  };

  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const getLabel = () => {
    if (remaining === 0) return '✅ ¡Bloque completado! Tómate un break.';
    if (!isRunning && remaining === totalSeconds) return `Modo ${mode.label} — listo para comenzar`;
    if (!isRunning) return 'En pausa...';
    return '🔥 En enfoque — no te distraigas';
  };

  const progress = (remaining / totalSeconds) * 100;

  return (
    <div className="timer-widget">
      <div>
        <div className="timer-display">{formatTime(remaining)}</div>
        <div className="timer-label">{getLabel()}</div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div>
        <div className="mode-pills" style={{ marginBottom: '14px' }}>
          <button 
            className={`mode-pill ${mode.mins === 45 ? 'active' : ''}`} 
            onClick={() => changeMode(45, 'enfoque')}
          >
            45 min
          </button>
          <button 
            className={`mode-pill ${mode.mins === 25 ? 'active' : ''}`} 
            onClick={() => changeMode(25, 'pomodoro')}
          >
            25 min
          </button>
          <button 
            className={`mode-pill ${mode.mins === 15 ? 'active' : ''}`} 
            onClick={() => changeMode(15, 'break')}
          >
            Break
          </button>
        </div>
        <div className="timer-controls">
          <button className="btn btn-primary" onClick={toggleTimer}>
            {isRunning ? 'PAUSAR' : (remaining === totalSeconds ? 'INICIAR' : 'CONTINUAR')}
          </button>
          <button className="btn btn-secondary" onClick={resetTimer}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

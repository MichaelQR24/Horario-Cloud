import React from 'react';
import { scheduleData } from '../data/schedule';
import { parseTime } from '../utils/timeHelpers';

const Dashboard: React.FC = () => {
  const stats = React.useMemo(() => {
    let aws = 0, uni = 0, ingles = 0, proyecto = 0, ejercicio = 0;

    const processCategory = (blocks: any[]) => {
      blocks.forEach(block => {
        if (block.isBreak) return;
        const { start, end } = parseTime(block.time);
        const duration = (end < start ? (end + 24 * 60) : end) - start;

        const countType = (type: string) => {
          if (type === 'aws') aws += duration;
          if (type === 'uni') uni += duration;
          if (type === 'ingles') ingles += duration;
          if (type === 'proyecto') proyecto += duration;
          if (type === 'ejercicio') ejercicio += duration;
        };

        ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
          if (block[day]) countType(block[day].type);
        });
      });
    };

    processCategory(scheduleData.morning);
    processCategory(scheduleData.afternoon);
    processCategory(scheduleData.night);

    return [
      { label: 'AWS Cloud', minutes: aws, color: '#5eb8ff' },
      { label: 'Universidad', minutes: uni, color: '#c47fff' },
      { label: 'Proyecto', minutes: proyecto, color: '#4ddd8a' },
      { label: 'Inglés', minutes: ingles, color: '#ffcc44' },
      { label: 'Ejercicio', minutes: ejercicio, color: '#ff8b4d' },
    ].sort((a, b) => b.minutes - a.minutes);
  }, []);

  const totalProductiveMinutes = stats.reduce((acc, curr) => acc + curr.minutes, 0);

  return (
    <div className="dashboard">
      <h3 className="section-title">⏱️ HORAS SEMANALES</h3>
      <div className="dashboard-stats">
        {stats.map((stat, i) => {
          const hours = Math.floor(stat.minutes / 60);
          const percent = ((stat.minutes / totalProductiveMinutes) * 100).toFixed(1);
          return (
            <div key={i} className="stat-card">
              <div className="stat-header">
                <span className="stat-label" style={{ color: stat.color }}>{stat.label}</span>
                <span className="stat-hours">{hours}h</span>
              </div>
              <div className="stat-bar-bg">
                <div 
                  className="stat-bar-fill" 
                  style={{ width: `${percent}%`, backgroundColor: stat.color }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

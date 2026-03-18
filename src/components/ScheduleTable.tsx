import React from 'react';
import { scheduleData } from '../data/schedule';
import type { BlockData } from '../data/schedule';

import { parseTime, getCurrentTimeMinutes, getDayIndex } from '../utils/timeHelpers';

const DayCell: React.FC<{ data?: BlockData; isActive?: boolean }> = ({ data, isActive }) => {
  if (!data) return <td className="block"></td>;
  return (
    <td className={`block ${data.type} ${isActive ? 'active-block' : ''}`}>
      <span className="icon">{data.icon}</span>
      <span className="label">{data.label}</span>
      {isActive && <div className="live-indicator">EN VIVO</div>}
    </td>
  );
};

const ScheduleTable: React.FC = () => {
  const [currentMinutes, setCurrentMinutes] = React.useState(getCurrentTimeMinutes());
  const [currentDay, setCurrentDay] = React.useState(getDayIndex());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMinutes(getCurrentTimeMinutes());
      setCurrentDay(getDayIndex());
    }, 60000); // 1 minute
    return () => clearInterval(timer);
  }, []);

  const renderRow = (row: any, index: number) => {
    const { start, end } = parseTime(row.time);
    const isCurrentTime = currentMinutes >= start && currentMinutes < end;

    if (row.isBreak) {
      return (
        <tr key={`break-${index}`} className="break-row">
          <td className="time-cell block">{row.time}</td>
          <td colSpan={7} className="block descanso">{row.label}</td>
        </tr>
      );
    }

    return (
      <tr key={`row-${index}`} className={isCurrentTime ? 'current-time-row' : ''}>
        <td className={`time-cell block ${isCurrentTime ? 'active-time' : ''}`}>{row.time}</td>
        <DayCell data={row.monday} isActive={isCurrentTime && currentDay === 0} />
        <DayCell data={row.tuesday} isActive={isCurrentTime && currentDay === 1} />
        <DayCell data={row.wednesday} isActive={isCurrentTime && currentDay === 2} />
        <DayCell data={row.thursday} isActive={isCurrentTime && currentDay === 3} />
        <DayCell data={row.friday} isActive={isCurrentTime && currentDay === 4} />
        <DayCell data={row.saturday} isActive={isCurrentTime && currentDay === 5} />
        <DayCell data={row.sunday} isActive={isCurrentTime && currentDay === 6} />
      </tr>
    );
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lun</th>
            <th>Mar</th>
            <th>Mié</th>
            <th>Jue</th>
            <th>Vie</th>
            <th>Sáb</th>
            <th>Dom</th>
          </tr>
        </thead>
        <tbody>
          <tr className="section-row"><td colSpan={8}>▸ MAÑANA</td></tr>
          {scheduleData.morning.map(renderRow)}

          <tr className="section-row"><td colSpan={8}>▸ TARDE</td></tr>
          {scheduleData.afternoon.map(renderRow)}

          <tr className="section-row"><td colSpan={8}>▸ NOCHE</td></tr>
          {scheduleData.night.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

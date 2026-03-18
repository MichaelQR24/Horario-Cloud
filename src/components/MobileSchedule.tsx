import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';
import { getCurrentTimeMinutes, getDayIndex, parseTime } from '../utils/timeHelpers';

const dayLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

const MobileSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(getDayIndex());
  const currentMinutes = getCurrentTimeMinutes();
  const isToday = selectedDay === getDayIndex();

  const allBlocks = [
    { section: 'MAÑANA', blocks: scheduleData.morning },
    { section: 'TARDE', blocks: scheduleData.afternoon },
    { section: 'NOCHE', blocks: scheduleData.night },
  ];

  const dayKey = dayKeys[selectedDay];

  return (
    <div className="mobile-schedule">
      {/* Day Selector Pills */}
      <div className="day-selector">
        {dayLabels.map((label, i) => (
          <button 
            key={i}
            className={`day-pill ${selectedDay === i ? 'active' : ''} ${getDayIndex() === i ? 'today' : ''}`}
            onClick={() => setSelectedDay(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards */}
      {allBlocks.map(({ section, blocks }) => (
        <div key={section}>
          <div className="mobile-section-label">{section}</div>
          {blocks.map((block: any, index: number) => {
            if (block.isBreak) return null;

            const data = block[dayKey];
            if (!data) return null;

            const { start, end } = parseTime(block.time);
            const isActive = isToday && currentMinutes >= start && currentMinutes < end;

            return (
              <div 
                key={index}
                className={`mobile-card ${data.type} ${isActive ? 'mobile-active' : ''}`}
              >
                <div className="mobile-card-time">{block.time}</div>
                <div className="mobile-card-body">
                  <span className="mobile-card-icon">{data.icon}</span>
                  <span className="mobile-card-label">{data.label}</span>
                </div>
                {isActive && <div className="mobile-live-badge">EN VIVO</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MobileSchedule;

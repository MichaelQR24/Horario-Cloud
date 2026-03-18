import { useEffect, useRef } from 'react';
import { scheduleData } from '../data/schedule';
import { parseTime, getCurrentTimeMinutes, getDayIndex, dayNames } from './timeHelpers';

export const useNotifications = () => {
  const notifiedBlocks = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Request permission once
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    const checkTransitions = () => {
      const currentMin = getCurrentTimeMinutes();
      const currentDayName = dayNames[getDayIndex()];
      
      const allBlocks = [
        ...scheduleData.morning,
        ...scheduleData.afternoon,
        ...scheduleData.night
      ];

      allBlocks.forEach((b: any) => {
        if (b.isBreak) return;
        
        const { start } = parseTime(b.time);
        
        // Notify 5 minutes before the block starts
        if (start - currentMin > 0 && start - currentMin <= 5) {
          const blockId = `${currentDayName}-${b.time}`;
          const currentDayBlock = b[currentDayName];

          if (currentDayBlock && !notifiedBlocks.current.has(blockId)) {
            notifiedBlocks.current.add(blockId);
            
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification('¡Transición Próxima!', {
                body: `En 5 minutos comienza: ${currentDayBlock.label} ${currentDayBlock.icon || ''}`,
                icon: '/favicon.ico'
              });
            } else {
              // Fallback simple alert or console
              console.log(`[NOTIFICACIÓN] En 5 min comienza: ${currentDayBlock.label}`);
            }
          }
        }
      });
      
      // Clear notified blocks at midnight to reset for next day
      if (currentMin === 0) {
         notifiedBlocks.current.clear();
      }
    };

    const interval = setInterval(checkTransitions, 60000); // Check every minute
    checkTransitions(); // Check immediately on mount
    return () => clearInterval(interval);
  }, []);
};

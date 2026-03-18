export const parseTime = (timeStr: string) => {
  const [startStr, endStr] = timeStr.split(/[-–]/).map(s => s.trim());
  
  const parsePart = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  return { start: parsePart(startStr), end: parsePart(endStr) };
};

export const getCurrentTimeMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

export const getDayIndex = () => {
  // 0 is Monday, 6 is Sunday
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
};

export const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

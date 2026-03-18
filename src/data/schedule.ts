export interface ScheduleBlock {
  time: string;
  monday: BlockData;
  tuesday: BlockData;
  wednesday: BlockData;
  thursday: BlockData;
  friday: BlockData;
  saturday: BlockData;
  sunday: BlockData;
}

export interface BlockData {
  label: string;
  icon?: string;
  type: 'aws' | 'proyecto' | 'uni' | 'ingles' | 'descanso' | 'ejercicio' | 'rutina';
  isBreak?: boolean;
}

export const scheduleData = {
  morning: [
    {
      time: '7:00–7:30',
      monday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      tuesday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      wednesday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      thursday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      friday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      saturday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
      sunday: { label: 'Aseo', icon: '🚿', type: 'rutina' },
    },
    {
      time: '7:30–8:00',
      monday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      tuesday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      wednesday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      thursday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      friday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      saturday: { label: 'Desayuno', icon: '🍳', type: 'rutina' },
      sunday: { label: 'Desay. tarde', icon: '🥞', type: 'rutina' },
    },
    {
      time: '8:00–9:30',
      monday: { label: 'AWS', icon: '☁️', type: 'aws' },
      tuesday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      wednesday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      thursday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      friday: { label: 'AWS', icon: '☁️', type: 'aws' },
      saturday: { label: 'Descanso', icon: '💤', type: 'descanso' },
      sunday: { label: 'Planif.', icon: '📋', type: 'aws' },
    },
    {
      time: '9:30–9:45',
      isBreak: true,
      label: '· · · P A U S A · · ·'
    },
    {
      time: '9:45–10:50',
      monday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      tuesday: { label: 'AWS', icon: '☁️', type: 'aws' },
      wednesday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      thursday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      friday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      saturday: { label: 'Repaso', icon: '🔁', type: 'aws' },
      sunday: { label: 'AWS', icon: '☁️', type: 'aws' },
    },
    {
      time: '10:50–13:00',
      monday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      tuesday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      wednesday: { label: 'AWS', icon: '☁️', type: 'aws' },
      thursday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      friday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      saturday: { label: 'Seguridad', icon: '🛡️', type: 'uni' },
      sunday: { label: 'Libre', icon: '🎮', type: 'descanso' },
    }
  ],
  afternoon: [
    {
      time: '13:00–14:00',
      monday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      tuesday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      wednesday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      thursday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      friday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      saturday: { label: 'Seguridad', icon: '🛡️', type: 'uni' },
      sunday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
    },
    {
      time: '14:00–15:00',
      monday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      tuesday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      wednesday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      thursday: { label: 'AWS', icon: '☁️', type: 'aws' },
      friday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      saturday: { label: 'Almuerzo', icon: '🍽️', type: 'rutina' },
      sunday: { label: 'Libre', icon: '🎮', type: 'descanso' },
    },
    {
      time: '15:00–16:00',
      monday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      tuesday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      wednesday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      thursday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      friday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      saturday: { label: 'AWS', icon: '☁️', type: 'aws' },
      sunday: { label: 'Descanso', icon: '💤', type: 'descanso' },
    },
    {
      time: '16:00–17:00',
      monday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      tuesday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      wednesday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      thursday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      friday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      saturday: { label: 'Libre', icon: '🎮', type: 'descanso' },
      sunday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
    },
    {
      time: '17:00–17:50',
      monday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      tuesday: { label: 'Aseo / Snack', icon: '🚿', type: 'rutina' },
      wednesday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      thursday: { label: 'AWS', icon: '☁️', type: 'aws' },
      friday: { label: 'Aseo / Snack', icon: '🚿', type: 'rutina' },
      saturday: { label: 'Ejercicio', icon: '🏋️', type: 'ejercicio' },
      sunday: { label: 'Libre', icon: '🎮', type: 'descanso' },
    }
  ],
  night: [
    {
      time: '17:50–19:20',
      monday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      tuesday: { label: 'eBusiness', icon: '🎓', type: 'uni' },
      wednesday: { label: 'AWS', icon: '☁️', type: 'aws' },
      thursday: { label: 'Proyecto', icon: '⚙️', type: 'proyecto' },
      friday: { label: 'Capstone', icon: '🎓', type: 'uni' },
      saturday: { label: 'Aseo / Snack', icon: '🚿', type: 'rutina' },
      sunday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
    },
    {
      time: '19:20–20:10',
      monday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      tuesday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      wednesday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      thursday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      friday: { label: 'Capstone', icon: '🎓', type: 'uni' },
      saturday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      sunday: { label: 'Repaso', icon: '🔁', type: 'aws' },
    },
    {
      time: '20:10–21:00',
      monday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      tuesday: { label: 'AWS', icon: '☁️', type: 'aws' },
      wednesday: { label: 'Inglés', icon: '🇺🇸', type: 'ingles' },
      thursday: { label: 'AWS Lab', icon: '🔬', type: 'aws' },
      friday: { label: 'Capstone', icon: '🎓', type: 'uni' },
      saturday: { label: 'Libre', icon: '🎮', type: 'descanso' },
      sunday: { label: 'Libre', icon: '🎮', type: 'descanso' },
    },
    {
      time: '21:00–22:00',
      monday: { label: 'Relax', icon: '🎮', type: 'descanso' },
      tuesday: { label: 'Relax', icon: '🎮', type: 'descanso' },
      wednesday: { label: 'Relax', icon: '🎮', type: 'descanso' },
      thursday: { label: 'Relax', icon: '🎮', type: 'descanso' },
      friday: { label: 'Cena', icon: '🍽️', type: 'rutina' },
      saturday: { label: 'Libre', icon: '🎮', type: 'descanso' },
      sunday: { label: 'Preparar sem', icon: '📋', type: 'aws' },
    },
    {
      time: '22:00–23:00',
      monday: { label: 'Desconexión', icon: '🌙', type: 'descanso' },
      tuesday: { label: 'Desconexión', icon: '🌙', type: 'descanso' },
      wednesday: { label: 'Desconexión', icon: '🌙', type: 'descanso' },
      thursday: { label: 'Desconexión', icon: '🌙', type: 'descanso' },
      friday: { label: 'Libre', icon: '🎮', type: 'descanso' },
      saturday: { label: 'Libre', icon: '🎮', type: 'descanso' },
      sunday: { label: 'Lectura', icon: '📚', type: 'descanso' },
    }
  ]
};

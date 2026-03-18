import React from 'react';

const Tips: React.FC = () => {
  const tips = [
    {
      icon: '📵',
      title: 'Teléfono en otra habitación',
      description: 'Durante cada bloque de 45 min, aleja el celular. La distracción promedio interrumpe 23 min de concentración.'
    },
    {
      icon: '🎯',
      title: 'Una sola tarea por bloque',
      description: 'Define antes de empezar qué vas a lograr exactamente en esos 45 min. Escríbelo en papel.'
    },
    {
      icon: '🚫',
      title: 'Bloquea distracciones',
      description: 'Usa Cold Turkey o Freedom para bloquear redes sociales durante tus bloques de trabajo.'
    },
    {
      icon: '💧',
      title: 'Prepara tu entorno',
      description: 'Antes de cada bloque: agua lista, notificaciones off, tab del trabajo abierto. Zero fricciones.'
    }
  ];

  return (
    <div className="tips-strip">
      {tips.map((tip, index) => (
        <div key={index} className="tip-card">
          <div className="tip-icon">{tip.icon}</div>
          <div>
            <h4>{tip.title}</h4>
            <p>{tip.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tips;

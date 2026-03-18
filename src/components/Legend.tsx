import React from 'react';

const Legend: React.FC = () => {
  const items = [
    { color: '#1a3a5c', border: '#2a5a8c', label: 'AWS / Cloud' },
    { color: '#0f3320', border: '#1a5535', label: 'Proyecto' },
    { color: '#2d1040', border: '#4a1a6a', label: 'Universidad' },
    { color: '#3a2a00', border: '#6a4a00', label: 'Inglés' },
    { color: '#2a1a10', border: '#4a2a1a', label: 'Ejercicio' },
    { color: '#1a202c', border: '#334155', label: 'Rutina / Comidas' },
    { color: '#131316', border: '#1e1e28', label: 'Descanso / Libre' },
  ];

  return (
    <div className="legend">
      <h3 className="legend-title">Categorías</h3>
      {items.map((item, index) => (
        <div key={index} className="legend-item">
          <div 
            className="legend-dot" 
            style={{ background: item.color, border: `1px solid ${item.border}` }}
          ></div>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Legend;

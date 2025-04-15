import React from 'react';

function MetricsCard({ title, value }) {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      minWidth: '150px',
      textAlign: 'center'
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0 0' }}>{value}</p>
    </div>
  );
}

export default MetricsCard;

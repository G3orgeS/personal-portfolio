import React from 'react';
import './Card.css';

const Card = ({ title, icon, text }) => {
  return (
    <div className="card">
      <div className="content">
        {icon}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;




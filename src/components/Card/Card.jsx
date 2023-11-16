import React from 'react';
import './Card.css';

const Card = ({ id, title, icon, text, onClick }) => {
  return (
    <div id={id} className="card" onClick={onClick}>
      <div className="content">
        {icon}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
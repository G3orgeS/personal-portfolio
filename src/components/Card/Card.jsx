import React from 'react';
import './Card.css';

const Card = ({ id, title, icon, text, url, onClick }) => {
  return (
    <div id={id} className="card" onClick={onClick}>
      <div className="content">
        {icon}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
};

export default Card;

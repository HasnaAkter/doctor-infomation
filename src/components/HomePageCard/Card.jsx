import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header flex p-2">
        <img src={props.imageUrl} alt={props.imageAlt} className="card-image" />
        <h2 className="card-title px-2">{props.title}</h2>
      </div>
      <div className="card-content">
        <p>{props.description}</p>
        <p>{props.destitle}</p>
      </div>
    </div>
  );
};

export default Card;

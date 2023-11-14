import React from 'react';
import '../../components/HomePageCard/Physio.css'

const PhysiotherapistCard = ({ name, title, location, availability, cost, profileUrl }) => {
  return (
    <div className="physiotherapist-card">
      <img src={profileUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{location}</p>
        <p>Available On {availability}</p>
        <p>${cost}</p>
        <button className='btn btn-outline btn-warning btn-wide'>View Profile</button>
      </div>
    </div>
  );
};

export default PhysiotherapistCard;

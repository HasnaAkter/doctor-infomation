import React from 'react';
 import '../../components/HomePageCard/Physio.css'

const PhysiotherapistCard = ({ name, title, location, availability, cost, profileUrl }) => {
  return (
    // <div className="physiotherapist-card">
    //   <img src={profileUrl} alt={name} className="card-image" />
    //   <div className="card-content">
    //     <h3>{name}</h3>
    //     <h4>{title}</h4>
    //     <p>{location}</p>
    //     <p>Available On {availability}</p>
    //     <p>${cost}</p>
    //     <button className='btn btn-outline btn-warning btn-wide'>View Profile</button>
    //   </div>
    // </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg physiotherapist-card">
  <img src={profileUrl} alt={name} classNameName="card-image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
    {title}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block  rounded-full  text-sm font-semibold text-gray-700 mr-2 mb-2">{location}</span>
    <span className="inline-block rounded-full  text-sm font-semibold text-gray-700 mr-2 mb-2">${cost}</span>
    
    
  </div>
 <div className='px-6 pt-4 pb-2'>
 <button className='btn btn-outline btn-warning '>View Profile</button>
 </div>
</div>
  );
};

export default PhysiotherapistCard;

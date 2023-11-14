import React from 'react';
import PhysiotherapistCard from '../../components/HomePageCard/PhysiotherapistCard';
import dc1 from "../../assets/Homepages/dc1.jpg";
import dc2 from "../../assets/Homepages/dc2.png";
import dc3 from "../../assets/Homepages/dc3.png";

const PhysiotherapistCardList = () => {
  const physiotherapists = [
    {
      name: 'Karyen Anderson',
      title: 'BTP - Senior Physiotherapist',
      location: 'Dhanmondi, Dhaka, Bangladesh',
      availability: 'Mon, 22 December',
      cost: '$15',
      profileUrl: [dc1],
    },
    {
        name: 'Karyen Anderson',
        title: 'BTP - Senior Physiotherapist',
        location: 'Dhanmondi, Dhaka, Bangladesh',
        availability: 'Mon, 22 December',
        cost: '$15',
        profileUrl: [dc2],
      },
      {
        name: 'Karyen Anderson',
        title: 'BTP - Senior Physiotherapist',
        location: 'Dhanmondi, Dhaka, Bangladesh',
        availability: 'Mon, 22 December',
        cost: '$15',
        profileUrl: [dc3],
      },
    
  ];

  return (
    <div>
      <div className="card-list">
        {physiotherapists.map((physiotherapist, index) => (
          <PhysiotherapistCard key={index} {...physiotherapist} />
        ))}
      </div>
    </div>
  );
};

export default PhysiotherapistCardList;

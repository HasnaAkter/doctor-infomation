import React from "react";
import PhysiotherapistCard from "../../components/HomePageCard/PhysiotherapistCard";
import dc1 from "../../assets/Homepages/dc1.jpg";
import dc2 from "../../assets/Homepages/dc2.png";
import dc3 from "../../assets/Homepages/dc3.png";


const PhysiotherapistCardList = () => {
  const physiotherapists = [
    {
      name: "Karyen Anderson",
      title: "BTP - Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      availability: "Mon, 22 December",
      cost: "$15",
      profileUrl: [dc1],
      employName: "Karyen Anderson",
      employDegicnation: "BTP - Senior Physiotherapist",
      employDetiels:
        "I am dedicated to helping individuals regain their mobility and improve their quality of life. With a strong background in orthopedic and sports injuries, I specialize in creating personalized rehabilitation plans. My goal is to empower patients to achieve their optimal physical health.",
    },
    {
      name: "Karyen Anderson",
      title: "BTP - Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      availability: "Mon, 22 December",
      cost: "$15",
      profileUrl: [dc3],
      employName: "Karyen Anderson",
      employDegicnation: "BTP - Senior Physiotherapist",
      employDetiels:
        "I am dedicated to helping individuals regain their mobility and improve their quality of life. With a strong background in orthopedic and sports injuries, I specialize in creating personalized rehabilitation plans. My goal is to empower patients to achieve their optimal physical health.",
    },
    {
      name: "Karyen Anderson",
      title: "BTP - Senior Physiotherapist",
      location: "Dhanmondi, Dhaka, Bangladesh",
      availability: "Mon, 22 December",
      cost: "$15",
      profileUrl: [dc2],
      urlimg:[dc2],
      employName: "Karyen Anderson",
      employDegicnation: "BTP - Senior Physiotherapist",
      employDetiels:
        "I am dedicated to helping individuals regain their mobility and improve their quality of life. With a strong background in orthopedic and sports injuries, I specialize in creating personalized rehabilitation plans. My goal is to empower patients to achieve their optimal physical health.",
      
    },
  ];

  return (
    <div>
      <div className="card-list ">
        {physiotherapists.map((physiotherapist, index) => (
          <PhysiotherapistCard key={index} {...physiotherapist} />
        ))}
      </div>
    </div>
  );
};

export default PhysiotherapistCardList;

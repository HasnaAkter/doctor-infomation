import React from "react";
import Medical_Help_Center_Banner from "../HomePages/Medical_Help_Center_Banner";
import Services from "../HomePages/Services";
import ContactSection from "../HomePages/ContactSection";
import PatientsSays from "../HomePages/PatientsSays";
import ExpertDoctors from "../HomePages/ExpertDoctors";
import Carousel from "../HomePages/Carousel";
import PhysiotherapistCardList from "../HomePages/PhysiotherapistCardList";

const Home = () => {
  return (
    <div>
      <Medical_Help_Center_Banner></Medical_Help_Center_Banner>
      <Services></Services>
      <br />
      <br />
      {/* <ContactSection></ContactSection> */}
      <br />
      <br />
      <PatientsSays></PatientsSays>
      <br />
      <br />
      <Carousel></Carousel>
      <br />
      <br />
      <ExpertDoctors></ExpertDoctors>
      <br />
      <br />
      {/* <PhysiotherapistCardList></PhysiotherapistCardList> */}
    </div>
  );
};

export default Home;

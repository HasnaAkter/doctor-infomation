import React from 'react';
import Card from "../../components/HomePageCard/Card";
import "../HomePages/Cardlist.css"
import Watch from "../../assets/Homepages/wacth.png"
import Location  from "../../assets/Homepages/location.png"
import Phone from "../../assets/Homepages/phone.png"
const ContactSection = () => {
    return (
        <div>
            <div className="card-list">
      <Card
        imageUrl={Watch}
        imageAlt="Card 1"
        title="Opening Hours"
        description="Open 9.00 am to 5.00pm Everyday"
      />
      <Card
        imageUrl={Location}
        imageAlt="Card 2"
        title="Our Location"
        description="Dhanmondi 17, Dhaka -1200, Bangladesh"
      />
      <Card
        imageUrl={Phone}
        imageAlt="Card 3"
        title="Contact Us"
        description="+88 01750 00 00 00 "
        destitle="+88 01750 00 00 00"
      />
    </div>
        </div>
    );
};

export default ContactSection;
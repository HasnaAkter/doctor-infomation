import React from "react";
import servicesimg from "../../assets/Homepages/services.jpg";
import servicesboximg from "../../assets/Homepages/services-box.jpg";

const Services = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 my-5">
        <img src={servicesimg} alt="" />

        <div>
          <div>
            <div className=" ">
              <h1 className="text-4xl font-semibold">Our Services</h1>{" "}
              <p className="py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <img src={servicesboximg} alt="" />
              <h1 className="text-4xl font-semibold py-3">
                Electro Gastrology Therapy
              </h1>{" "}
              <p className="py-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error
              </p>
              <p>
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

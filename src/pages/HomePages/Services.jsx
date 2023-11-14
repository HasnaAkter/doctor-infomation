import React from "react";
import servicesimg from "../../assets/Homepages/services.jpg";
import servicesboximg from "../../assets/Homepages/services-box.jpg";

const Services = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 my-5 p-3">
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
              <div className="py-3 ">
                <div className="btn  btn-gray-200 p-0">
                  <button className="btn bg-yellow-600 btn-gray-300">
                    Cavity Protection
                  </button>
                  <button className="btn">Cosmetic Dentisty</button>
                  <button className="btn">Oral Surgery</button>
                </div>
              </div>
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
              <div className="py-3">
                {" "}
                <button className="btn btn-outline btn-warning ">
                  More Details
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import helpbanner from "../../assets/Homepages/helpbanner.jpg";

const Medical_Help_Center_Banner = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-2 my-5">
        <div>
          <div className=" my-24">
            <h1 className="text-4xl font-semibold">
              Your Best Medical Help Center
            </h1>{" "}
            <p className="py-3">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <div className="py-3">
                {" "}
                <button className="btn btn-outline  bg-warning text-white">
                  All Services
                </button>
              </div>{" "}
          </div>
        </div>
        <div>
          <img src={helpbanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Medical_Help_Center_Banner;

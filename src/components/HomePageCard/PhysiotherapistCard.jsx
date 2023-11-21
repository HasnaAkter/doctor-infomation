import React from "react";
import "../../components/HomePageCard/Physio.css";

const PhysiotherapistCard = ({
  name,
  title,
  location,
  availability,
  cost,
  urlimg,
  profileUrl,
  employDegicnation,
  employDetiels,
  employName,
}) => {
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
      <img src={profileUrl} alt={name} className="card-image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block  rounded-full  text-sm font-semibold text-gray-700 mr-2 mb-2">
          {location}
        </span>
        <span className="inline-block rounded-full  text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${cost}
        </span>
      </div>
      <div className="px-6  pb-2">
        <button
          className="btn btn-outline btn-warning  "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          View Profile
        </button>
        <dialog id="my_modal_1" className="modal" aria-labelledby="modal-label">
          <div className="modal-box">
          <img src={urlimg} alt={employName} className="card-image" />
            <h3 className="font-bold text-lg">{employName}</h3>
            <h3 className="font-medium text-lg">{employDegicnation}</h3>
            <p className="py-4">{employDetiels}</p>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PhysiotherapistCard;

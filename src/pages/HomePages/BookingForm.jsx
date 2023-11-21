import React from "react";

const BookingForm = () => {
  return (
    <div className="flex ">
      {/* Special Offer Section */}
      <div className="w-full md:w-1/2 p-4 bg-blue-200 text-black">
        <h2 className="text-2xl font-bold mb-4">Contact With Us</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>
        <br />
        <p className="text-lg font-medium mb-2">Contact: +88 01750 14 14 14</p>
        <p className="text-lg font-medium mb-2">Location: Dhanmondi, Dhaka, Bangladesh</p>
        <br />
        <br />
        <p className="text-lg font-bold mb-2">Special Offer!</p>
        <p>Book now and get 10% off on your first appointment!</p>
      </div>

      {/* Booking Form Section */}
      <div className="w-full md:w-1/2 mx-auto bg-white p-8 shadow-md rounded">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full p-2 border rounded"
              placeholder="+88 01750 14 14 14"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="doctor"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Doctor Name
            </label>
            <input
              type="text"
              id="doctor"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-200 text-black py-2 px-4 rounded hover:bg-blue-400"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

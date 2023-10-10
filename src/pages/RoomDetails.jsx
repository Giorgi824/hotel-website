import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
// icons
import { FaCheck } from "react-icons/fa";
// scroll rop component
import FourFields from "../components/FourFields";

const hotelRules = [
  "Check-in: 3:00 PM - 9:00 PM",
  "Check-out: 10:30 AM",
  "No Pets",
  "No Smoking",
];

const RoomDetails = () => {
  const { id } = useParams();
  const {
    state: { rooms },
  } = useContext(RoomContext);
  // get room
  const room = rooms.find((room) => room.id === Number(id));
  // destructure room
  const { name, description, facilities, imageLg, price } = room;
  return (
    <section className="">
      {/* banner */}
      <div className="bg-room h-[560px] bg-cover bg-center relative flex justify-center items-center">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            {/* facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus sed velit maiores totam voluptas mollitia modi.
                Perspiciatis accusantium quas nisi ad autem modi repellat dolor
                inventore quis, eius, sint quasi ipsa, et beatae sapiente. Fugit
                voluptatibus expedita deleniti, hic minima placeat sapiente vel
                temporibus consectetur atque esse illo repellendus laboriosam.
              </p>
              {/* grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  // destructure item
                  const { name, icon } = item;

                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <FourFields className="h-[60px]" />
              </div>
              <button className="btn btn-lg btn-primary w-full">
                Book now for ${price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                illum?
              </p>
              <ul className="flex flex-col gap-y-4">
                {hotelRules.map((txt, idx) => {
                  return (
                    <li key={idx} className="flex items-center gap-x-4">
                      <FaCheck className="text-accent" />
                      {txt}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;

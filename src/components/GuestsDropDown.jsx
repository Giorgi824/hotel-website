import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
// headless ui menu
import { Menu } from "@headlessui/react";
// icons
import { BsChevronDown } from "react-icons/bs";
const listAdults = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];
const listKids = [
  { name: "0 Kids" },
  { name: "1 Kid" },
  { name: "2 Kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

function GuestsDropDown({ guestName }) {
  const {
    state: { adults, kids },
    dispatch,
  } = useContext(RoomContext);
  const listGuest = guestName === "adults" ? listAdults : listKids;
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {guestName === "adults" ? adults : kids === "0 Kids" ? "No kids" : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {listGuest.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              key={index}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white flex justify-center items-center cursor-pointer w-full"
              onClick={() => {
                if (guestName === "adults") {
                  dispatch({ type: "setting/adults", payload: li.name });
                } else {
                  dispatch({ type: "setting/kids", payload: li.name });
                }
              }}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default GuestsDropDown;

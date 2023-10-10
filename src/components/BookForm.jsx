import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import FourFields from "./FourFields";
const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="h-[300px]  w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <FourFields className="flex-1 border-r" />
        {/* btn */}
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;

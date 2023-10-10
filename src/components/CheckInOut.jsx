import { useState } from "react";
// datepicker
import DatePicker from "react-datepicker";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// icons
import { BsCalendar } from "react-icons/bs";
const CheckInOut = ({ text }) => {
  const [date, setDate] = useState(false);
  return (
    <div className="relative flex items-center h-full justify-end ">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={date}
        placeholderText={text}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};

export default CheckInOut;

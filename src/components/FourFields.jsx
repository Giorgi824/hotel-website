import CheckInOut from "./CheckInOut";
import GuestsDropDown from "./GuestsDropDown";

function FourFields({ className }) {
  return (
    <>
      <div className={className}>
        <CheckInOut text="Check in" />
      </div>
      <div className={className}>
        <CheckInOut text="Check out" />
      </div>
      <div className={className}>
        <GuestsDropDown guestName="adults" />
      </div>
      <div className={className}>
        <GuestsDropDown guestName="kids" />
      </div>
    </>
  );
}

export default FourFields;

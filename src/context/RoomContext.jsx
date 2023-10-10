import { createContext, useEffect, useReducer } from "react";
// data
import { roomData } from "../data";
// create context
export const RoomContext = createContext();

const initialState = {
  rooms: roomData,
  adults: "1 Adult",
  kids: "0 Kids",
  total: 0,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setting/rooms":
      return { ...state, rooms: action.payload };
    case "setting/adults":
      return { ...state, adults: action.payload };
    case "setting/kids":
      return { ...state, kids: action.payload };
    case "total":
      return {
        ...state,
        total: Number(state.kids[0]) + Number(state.adults[0]),
      };
    case "loading":
      return { ...state, loading: action.payload };
    default:
      throw new Error("no data");
  }
}

function handleScrolling() {
  window.scrollTo(0, 0);
}

const RoomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { total, kids, adults } = state;

  useEffect(() => {
    dispatch({ type: "total" });
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "loading", payload: true });
    // filter rooms base on total (person)
    const newRooms = roomData.filter((room) => total <= room.maxPerson);
    setTimeout(() => {
      dispatch({ type: "setting/rooms", payload: newRooms });
      dispatch({ type: "loading", payload: false });
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{ state, handleClick, dispatch, handleScrolling }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;

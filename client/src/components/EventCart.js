import React from "react";
import { useDispatch } from "react-redux";
import { setIsEventFalse } from "../utils/toggleSlice";

const EventCart = () => {
  const dispatch = useDispatch();
  const handleOpen = (e) => {
    e.preventDefault();
    dispatch(setIsEventFalse(false));
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4 ">
        <div className="bg-grey-100 px-4 py-2 flex justify-between items-center">
          <span>📅</span>
          <button>
            <span
              onClick={() => {
                handleOpen();
              }}
            >
              ✖
            </span>
          </button>
        </div>
        <div className="p-3"></div>
      </form>
    </div>
  );
};

export default EventCart;

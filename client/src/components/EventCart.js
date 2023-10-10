import React from "react";
import { useDispatch } from "react-redux";
import { setIsEventFalse } from "../utils/toggleSlice";

const EventCart = () => {
  const dispatch = useDispatch();
  const handleOpen = () => {
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
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value=""
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />

            <p></p>

            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value=""
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />

            <div className="flex gap-x-2"></div>
          </div>
        </div>
        <div className="flex justify-center border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventCart;

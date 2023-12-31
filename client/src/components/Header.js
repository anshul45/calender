import React from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setMonthIndex, setSmallCalenderMonthIndex } from "../utils/monthSlice";
import dayjs from "dayjs";

const Header = () => {
  let monthIndex = useSelector((store) => store.month.monthIndex);
  const dispatch = useDispatch();
  const handlePrev = () => {
    dispatch(setMonthIndex(monthIndex - 1));
    dispatch(setSmallCalenderMonthIndex(monthIndex - 1));
  };

  const handleNext = () => {
    dispatch(setMonthIndex(monthIndex + 1));
    dispatch(setSmallCalenderMonthIndex(monthIndex + 1));
  };
  const handleNow = () => {
    dispatch(setMonthIndex(dayjs().month()));
  };
  return (
    <div className="px-4 py-2 flex items-center">
      <img src={logo} alt="app_logo" className="mr-4 w-8 h-8" />
      <h1 className="mr-10 text-3xl text-gray-500 font-bold">Calender</h1>
      <button className="border rounded py-1 px-3.5 mr-5" onClick={handleNow}>
        Today
      </button>
      <button
        className=" cursor-pointer text-gray-600 mx-2"
        onClick={handlePrev}
      >
        ◀
      </button>
      <button
        className=" cursor-pointer text-gray-600 mx-2"
        onClick={handleNext}
      >
        ▶
      </button>
      <h2 className="ml-4 text-3xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </div>
  );
};

export default Header;

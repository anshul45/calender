import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentMonth,
  setDaySelected,
  setMonthIndex,
  setSmallCalenderCurrentMonth,
  setSmallCalenderMonthIndex,
  smallCalenderCurrentMonth,
} from "../utils/monthSlice";

const SmallCalender = () => {
  let smallCalenderMonthIndex = useSelector(
    (store) => store.month.smallCalenderMonthIndex
  );
  let currentMonth = useSelector(
    (store) => store.month.smallCalenderCurrentMonth
  );
  let daySelected = useSelector((store) => store.month.daySelected);

  const dispatch = useDispatch();
  const handlePrev = () => {
    dispatch(setSmallCalenderMonthIndex(smallCalenderMonthIndex - 1));
    dispatch(setDaySelected(null));
  };

  const handleNext = () => {
    dispatch(setSmallCalenderMonthIndex(smallCalenderMonthIndex + 1));
  };

  const currentDay = (day) => {
    const daySelect = daySelected && daySelected.format("DD-MM-YYYY");
    if (day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")) {
      return "bg-blue-600 text-white rounded-full w-7";
    } else if (daySelect === day.format("DD-MM-YYYY")) {
      return "bg-blue-100 text-white rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };
  const handleClick = () => {
    dispatch(setCurrentMonth(smallCalenderMonthIndex));
    dispatch(setMonthIndex(smallCalenderMonthIndex));
  };

  useEffect(() => {
    dispatch(setDaySelected(null));
    dispatch(setSmallCalenderCurrentMonth(smallCalenderMonthIndex));
  }, [smallCalenderMonthIndex]);

  return (
    <div className="mt-9">
      <div className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), smallCalenderMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button className=" cursor-pointer text-gray-600" onClick={handlePrev}>
          ◀
        </button>
        <button
          className=" cursor-pointer text-gray-600 mr-5"
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
      <div className="grid grid-cols-7 mt-2 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1  text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`py-1 w-full ${currentDay(day)}`}
                onClick={() => {
                  handleClick();
                  dispatch(setDaySelected(day));
                }}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalender;

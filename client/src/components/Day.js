import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowIndex }) => {
  const currentDay = () => {
    return day.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <div className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${currentDay()}`}>
          {day.format("DD")}
        </p>
      </div>
    </div>
  );
};

export default Day;

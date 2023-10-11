import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { data } from "../utils/dumy_data";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Day = ({ day, rowIndex }) => {
  const { monthIndex } = useSelector((store) => store.month.monthIndex);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = data.filter(
      (evt) =>
        dayjs(evt.start.dateTime).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [day]);

  useEffect(() => {
    //fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.post("http://localhost:3001/api/calender", {
      accessToken,
    });
  };

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
      <div className="flex-1">
        {dayEvents?.map((evt, idx) => (
          <div
            key={idx}
            className={`bg-green-900 text-white p-0.5 mr-3 text-sm rounded mb-1 truncate`}
          >
            {evt.summary}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;

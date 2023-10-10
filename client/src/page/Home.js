import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import {
  setCurrentMonth,
  setSmallCalenderCurrentMonth,
} from "../utils/monthSlice";

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const monthIndex = useSelector((store) => store.month.monthIndex);
  const currentMonth = useSelector((store) => store.month.currentMonth);

  useEffect(() => {
    dispatch(setCurrentMonth(monthIndex));
    dispatch(setSmallCalenderCurrentMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Home;

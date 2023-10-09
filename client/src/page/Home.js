import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import { getMonth } from "../utils/helper";
import { useSelector } from "react-redux";

const Home = () => {
  const currMonth = useSelector((store) => store.month.monthIndex);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <>
      <div className="flex flex-col">
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

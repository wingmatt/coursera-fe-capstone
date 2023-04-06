import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../routes/Home";
import ReserveTable from "../routes/ReserveTable";



const Main = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  useEffect(() => updateTimes(), [])
  const updateTimes = (selectedDate) => {
    let updatedTimes;
    switch(selectedDate) {
      default:
        updatedTimes =
        [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        ];
        break;
    }
    setAvailableTimes(updatedTimes)
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/reserve-table" element={<ReserveTable availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} ></Route>
      </Routes>
    </main>
  );
};

export default Main;

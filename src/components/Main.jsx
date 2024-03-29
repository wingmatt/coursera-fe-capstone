import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import Home from "../routes/Home";
import ReserveTable from "../routes/ReserveTable";
import ConfirmedBooking from "../routes/ConfirmedBooking";
import { fetchAPI } from "../api/api";

const initializeTimes = () => {
  const newTimes = fetchAPI(new Date());
  return { availableTimes: newTimes };
};
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const newTimes = fetchAPI(action.payload);
    return {
      ...state,
      availableTimes: newTimes,
    };
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/reserve-table"
          element={
            <ReserveTable
              availableTimes={availableTimes.availableTimes}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

export { initializeTimes, updateTimes };

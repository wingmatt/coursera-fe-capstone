import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import Home from "../routes/Home";
import ReserveTable from "../routes/ReserveTable";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
const updateTimes = (action) => {
  if (action.type === "UPDATE_TIMES") {
    switch (action.payload) {
      default:
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
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
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default Main;

export {initializeTimes, updateTimes};
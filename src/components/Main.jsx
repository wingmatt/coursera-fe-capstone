import { Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";
import Home from "../routes/Home";
import ReserveTable from "../routes/ReserveTable";
import { fetchAPI } from "../api/api";

const initializeTimes = async () => {
  const newTimes = await fetchAPI(new Date());
  return newTimes;
};
const updateTimes = async (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const newTimes = await fetchAPI(action.payload);
    console.log(newTimes)
    return {
      ...state,
      availableTimes: newTimes,
    };
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, ["what"]);
  useEffect(() => {
    const fetchData = async function () {
      return await initializeTimes();
    };
    fetchData();
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/reserve-table"
          element={
            <ReserveTable availableTimes={state.availableTimes} dispatch={dispatch} />
          }
        ></Route>
      </Routes>
    </main>
  );
};

export default Main;

export { initializeTimes, updateTimes };

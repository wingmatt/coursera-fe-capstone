import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import ReserveTable from "../routes/ReserveTable";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/reserve-table" element={<ReserveTable/>} ></Route>
      </Routes>
    </main>
  );
};

export default Main;

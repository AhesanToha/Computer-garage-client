import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="px-0 lg:px-8">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

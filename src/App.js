import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Purchase from "./Pages/Home/Purchase";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Profile from "./Pages/Dashboard/Profile";
import AllUser from "./Pages/Dashboard/AllUser";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProducts from "./Pages/Dashboard/AddProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Products from "./Pages/Home/Products";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="px-0 lg:px-8">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/purchase/:toolId"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route
              path="/dashboard/profile"
              element={<Profile></Profile>}
            ></Route>
            <Route
              path="/dashboard/users"
              element={
                <RequireAdmin>
                  <AllUser></AllUser>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="/dashboard/manageOrders"
              element={
                <RequireAdmin>
                  <ManageOrders></ManageOrders>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="/dashboard/addProducts"
              element={
                <RequireAdmin>
                  <AddProducts></AddProducts>
                </RequireAdmin>
              }
            ></Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin />}></Route>
            <Route
              path="/dashboard/manageProducts"
              element={
                <RequireAdmin>
                  <ManageProducts />
                </RequireAdmin>
              }
            ></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

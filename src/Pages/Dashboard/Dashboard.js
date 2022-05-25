import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="lg:text-2xl text-purple-500 font-bold text-center my-2">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      {/*   <label
          for="dashboard-sidebar"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        {/* <!-- Page content here --> */}
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label>
        <ul className="menu lg:p-4 overflow-y-auto w-36 lg:w-64 text-sm lg:text-xl bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointment </Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>

          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

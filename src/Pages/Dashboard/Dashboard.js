import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
        <ul className="menu lg:p-4 overflow-y-auto  w-36 lg:w-64 text-sm lg:text-xl bg-base-200 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>

          {admin && (
            <>
              {" "}
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrders">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProducts">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrders">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

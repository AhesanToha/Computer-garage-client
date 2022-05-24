import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import profile from "../../images/profile.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const menuItem = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>

      <li>
        <Link to="">Products</Link>
      </li>
      <li>
        <Link to="">Blogs</Link>
      </li>
      <li>
        <Link to="">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-accent sticky top-0 z-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Computer Garage
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end    menu menu-horizontal p-0">
        <li>
          {user ? (
            <>
              <Link to="">
                <img
                  className="w-8 rounded-full lg:hidden"
                  src={profile}
                  alt=""
                />
                <h5 className="hidden lg:block">{user?.displayName}</h5>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-accent ">
                <li>
                  <Link onClick={() => signOut(auth)} to="">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <Link to={"/login"}>Log In</Link>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;

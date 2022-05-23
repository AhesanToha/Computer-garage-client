import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";

const Navbar = () => {
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
    <div class="navbar bg-accent sticky top-0 z-50 text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Computer Garage
        </Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div class="navbar-end    menu menu-horizontal p-0">
        <li tabindex="0">
          <Link to="">
            <img className="w-8 rounded-full lg:hidden" src={profile} alt="" />
            <h5 className="hidden lg:block">User Name</h5>
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </Link>
          <ul class="p-2 bg-accent ">
            <li>
              <Link to="">Submenu 1</Link>
            </li>
            <li>
              <Link to="">Submenu 2</Link>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Navbar;

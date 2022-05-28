import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/toha.jpg";

const Portfolio = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar">
          <div class="lg:max-w-md ring ring-primary rounded-full  lg:mr-40">
            <img src={profile} alt="" />
          </div>
        </div>
        <div>
          <h1 class="lg:text-5xl text-2xl font-bold">M. Ahesanul Hoque Toha</h1>
          <small className="lg:text-xl">FrontEnd Web Developer</small>
          <h3 class="pt-2 lg:text-2xl">
            Email: <span className="text-secondary">ahesan868@gmail.com</span>
          </h3>
          <h3 class=" lg:text-2xl">
            Education:{" "}
            <span className="text-secondary">
              Inter 1st Year, Science , HSC-(2022-2023)
            </span>
          </h3>
          <h3 class=" lg:text-2xl">
            Skills:{" "}
            <span className="text-secondary">
              HTML5,CSS3,Tailwind Css, Javascript(es6), React, Node, Express,
              MongoDB,Firebase......and many other libraries and frameworks
            </span>
          </h3>
          <h3 class=" lg:text-2xl ">
            Projects:{" "}
            <span className="text-secondary ">
              <ol>
                <li>
                  1:
                  <a
                    as={Link}
                    rel="noreferrer"
                    target="_blank"
                    href="https://wirehouse-management.web.app/"
                  >
                    Warehouse Management
                  </a>
                </li>
                <li>
                  {" "}
                  1:
                  <a
                    as={Link}
                    rel="noreferrer"
                    target="_blank"
                    href="https://boast-net-2ca91.web.app/"
                  >
                    Boast Net
                  </a>
                </li>
                <li>
                  {" "}
                  1:
                  <a
                    as={Link}
                    rel="noreferrer"
                    target="_blank"
                    href="https://todo-app-f5f94.web.app/"
                  >
                    Todo App
                  </a>
                </li>
              </ol>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

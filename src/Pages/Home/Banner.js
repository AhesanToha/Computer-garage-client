import React from "react";
import BannerImg from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="lg:max-w-2xl rounded-lg  shadow-2xl mt-10 lg:mt-0 lg:animate-bounce"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Computer</span>{" "}
            <span className="text-secondary">Garage!</span>
          </h1>
          <p className="py-6">
            The reason we call our website Computer Garage is because you can
            find all kinds of computer accessories here. Besides, there are
            great opportunities for computer repair on our site
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

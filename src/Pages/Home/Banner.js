import React from "react";
import BannerImg from '../../images/banner.jpg'

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          class="lg:max-w-2xl rounded-lg shadow-2xl"
       alt="" />
        <div>
          <h1 class="text-5xl font-bold"><span className="text-primary">Computer</span> <span className="text-secondary">Garage!</span></h1>
          <p class="py-6">
          The reason we call our website Computer Garage is because you can find all kinds of computer accessories here. Besides, there are great opportunities for computer repair on our site
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

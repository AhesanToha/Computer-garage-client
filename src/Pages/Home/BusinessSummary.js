import React from "react";

const BusinessSummary = () => {
  return (
    <div>
      <h1 className="lg:text-5xl uppercase font-bold text-secondary text-center my-10 hover:text-primary transition-opacity">
        Millions Business Trust Us
      </h1>
      <div className="grid lg:grid-cols-4 gap-4 mb-12">
        <div className="grid text-center shadow-lg w-[90%] pb-8 mx-auto">
          <img
            className="w-24 mx-auto"
            src="https://img.icons8.com/color/48/000000/flag--v1.png"
            alt=""
          />
          <h1 className="text-5xl lg:font-semibold">72</h1>
          <h3 className="text-2xl text-secondary">Countries</h3>
        </div>
        <div className="grid text-center shadow-lg w-[90%] pb-8 mx-auto">
          <img
            className="w-24 mx-auto"
            src="https://img.icons8.com/nolan/96/project.png"
            alt=""
          />
          <h1 className="text-5xl lg:font-semibold">535+</h1>
          <h3 className="text-2xl text-secondary">Completed Project</h3>
        </div>
        <div className="grid text-center shadow-lg w-[90%] pb-8 mx-auto">
          <img
            className="w-24 mx-auto"
            src="https://img.icons8.com/color/96/000000/conference-call--v1.png"
            alt=""
          />
          <h1 className="text-5xl lg:font-semibold">377+</h1>
          <h3 className="text-2xl text-secondary">Happy Clients</h3>
        </div>
        <div className="grid text-center shadow-lg w-[90%] pb-8 mx-auto">
          <img
            className="w-24 mx-auto"
            src="https://img.icons8.com/color/96/000000/satisfaction.png"
            alt=""
          />
          <h1 className="text-5xl lg:font-semibold">437+</h1>
          <h3 className="text-2xl text-secondary">Feedbacks</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

import React from "react";

const Tool = ({ tool }) => {
  const { name, img, description, price, quantity } = tool;
  return (
    <div class="card lg:card-side bg-base-100 shadow-2xl">
      <figure>
        <img className="p-6"
          src={img}
          alt="Album"
        />
      </figure>
      <div class="card-body shadow-xl ">
        <h2 class="text-xl font-bold">{name}</h2>
        <h3 className="lg:text-xl font-semibold">Price: <span className="font-bold text-secondary">${price}</span></h3>
        <h3 className="lg:text-xl font-semibold">Quantity: <span className="font-bold text-secondary">{quantity}</span></h3>
        <small className="font-semibold">{description}</small>
        <div class="card-actions justify-center">
          <button class="mt-6 lg:mt-2 btn btn-sm btn-primary text-slate-200">purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;

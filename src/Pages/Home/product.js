import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ tool }) => {
  const navigate = useNavigate();
  const { name, img, description, price, quantity, _id } = tool;
  const handleNavigate = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl hover:translate-x-2">
      <figure>
        <img className="p-6" src={img} alt="Album" />
      </figure>
      <div className="card-body shadow-xl ">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="lg:text-xl font-semibold">
          Price: <span className="font-bold text-secondary">${price}</span>
        </h3>
        <h3 className="lg:text-xl font-semibold">
          Quantity: <span className="font-bold text-secondary">{quantity}</span>
        </h3>
        <small className="font-semibold">{description}</small>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              handleNavigate(_id);
            }}
            className="mt-6 lg:mt-2 btn btn-sm btn-primary text-slate-200"
          >
            purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

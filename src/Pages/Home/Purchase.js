import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const Purchase = () => {
  const { toolId } = useParams();
  const [orderQuantity, setOrderQuantity] = useState(15);
  const [isDisabled, setIsDisable] = useState(false);
  const [tool, setTool] = useState([]);
  const { name, img, description, price, quantity, _id } = tool;

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

  const handleQuantity = (event) => {
    event.preventDefault();
    const inputQuantity = event.target.quantityInput.value;
    if (inputQuantity < 15) {
      swal("You have to purchase at least 15 products!", "", "error");
      setIsDisable(true);
      return;
    }
    if (inputQuantity > quantity) {
      swal(
        `${inputQuantity} number of products are not available`,
        "",
        "error"
      );
      setIsDisable(true);
      return;
    }
  };
  return (
    <div class="hero min-h-screen shadow-2xl">
      <div class="hero-content flex-col lg:flex-row">
        <img src={img} class="lg:max-w-2xl p-6  rounded-lg " alt="" />
        <div>
          <h1 class="lg:text-3xl font-bold mt-0">{name}</h1>
          <h3 className="lg:text-xl font-semibold">
            Price: <span className="font-bold text-secondary">${price}</span>
          </h3>
          <h3 className="lg:text-xl font-semibold">
            Available Quantity:{" "}
            <span className="font-bold text-secondary">{quantity}</span>
          </h3>
          <p class="py-6">{description}</p>
          <h3>
            Minimum Order Quantity: <strong>15</strong>
          </h3>
          <form onSubmit={handleQuantity}>
            <input
              type="number"
              name="quantityInput"
              defaultValue={15}
              class="text-center p-2 lg:p-3 rounded-sm lg:rounded-lg bg-slate-300 font-bold lg:text-3xl text-2xl mr-8 max-w-[100px]"
            />
            <input
              type="submit"
              value="Purchase"
              disabled={isDisabled}
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

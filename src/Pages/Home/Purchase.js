import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import auth from "../../firebase.init";
import UserInfo from "./UserInfo";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { toolId } = useParams();
  const [isDisabled, setIsDisable] = useState(false);
  const [tool, setTool] = useState([]);
  const { name, img, description, price, quantity, _id } = tool;

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [quantity, toolId]);

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
    const newTool = {
      name,
      img,
      description,
      price,
      quantity: quantity - inputQuantity,
    };

    fetch(`http://localhost:5000/tools/${toolId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTool),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Order has been successfully received!", "", "success");

        setTool(newTool);
      });

    const order = {
      userName: user?.displayName,
      email: user?.email,
      name,
      img,
      description,
      price,
      quantity,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <div class="hero min-h-screen shadow-2xl">
        <div class="hero-content flex-col lg:flex-row">
          <img src={img} class="lg:max-w-2xl p-6  rounded-lg " alt="" />
          <div>
            <UserInfo></UserInfo>
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
    </>
  );
};

export default Purchase;

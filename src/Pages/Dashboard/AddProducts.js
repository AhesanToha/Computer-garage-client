import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddProducts = () => {
  const [user] = useAuthState(auth);

  const AddProduct = (e) => {
    e.preventDefault();
    const newItem = {
      email: user?.email,
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      quantity: e.target.quantity.value,
      img: e.target.img.value,
    };
    fetch(`http://localhost:5000/tools`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        swal("Item Added Successfully", "", "success");
        console.log(data);
        e.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={AddProduct} className="md:w-2/4 mx-auto p-2 mb-10 ">
        <div className="form-group mb-6">
          <input
            type="text"
            name="name"
            className="form-control block 
           
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-white
          bg-accent  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-white focus:bg-secondary  focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Item Name"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group mb-6">
            <input
              type="text"
              name="price"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white
            bg-accent  bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-secondary  focus:border-blue-600 focus:outline-none"
              id="exampleInput123"
              aria-describedby="emailHelp123"
              placeholder="Price"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="quantity"
              className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-white
            bg-accent  bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-secondary  focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Quantity"
              required
            />
          </div>
        </div>

        <div className="form-group mb-6">
          <input
            type="email"
            name="email"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-500
          bg-accent  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-white focus:bg-secondary  focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            value={user?.email}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            name="img"
            className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-white
          bg-accent  bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-white focus:bg-secondary  focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Image Url"
            required
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            name="description"
            className="w-full h-24 bg-accent"
            placeholder="Description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="
        w-full
        px-6
        py-2.5
        bg-gray-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-gray-500 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

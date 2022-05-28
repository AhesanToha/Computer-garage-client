import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://computer-garage.herokuapp.com/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, []);

  return (
    <div>
      <h1 className="lg:text-2xl font-semibold text-center">
        Your All Ordered Products :{orders.length}
      </h1>
      <div>
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.userName}</td>
                <td>{order.email}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

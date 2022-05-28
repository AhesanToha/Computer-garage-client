import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://computer-garage.herokuapp.com/allOrders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="lg:text-2xl font-semibold text-center">
        Manage All Orders: {orders.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer</th>
              <th>Email</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                index={index}
                refetch={refetch}
                order={order}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;

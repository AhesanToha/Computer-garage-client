import React from "react";

const ManageOrderRow = ({ order, refetch, index }) => {
  const { userName, email, name } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{name}</td>
    </tr>
  );
};

export default ManageOrderRow;

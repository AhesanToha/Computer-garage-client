import React from "react";
import swal from "sweetalert";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://computer-garage.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          swal("Admin Added Successfully!", "", "success");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;

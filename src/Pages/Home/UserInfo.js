import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserInfo = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="card max-w-md mb-8 bg-base-200 shadow-md ">
  <div class="card-body">
    <h2 class="lg:text-2xl font-bold">User Information</h2>
    <p className="lg:text-lg font-semibold">Name: {user?.displayName}</p>
    <p className="lg:text-lg font-semibold">Email: {user?.email}</p>
    
  </div>
</div>
  );
};

export default UserInfo;

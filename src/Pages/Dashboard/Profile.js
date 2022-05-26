import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="card max-w-lg lg:w-full mx-auto bg-base-100 shadow-xl text-center">
        <h1 className="lg:text-3xl text-2xl">Your Profile Information</h1>
      <div class="card-body">
        <h2 class="lg:text-2xl text-xl font-semibold">{user?.displayName}</h2>
        <h3 className="lg:text-xl text-sm  font-semibold">Email: {user?.email}</h3>
      </div>
    </div>
  );
};

export default Profile;

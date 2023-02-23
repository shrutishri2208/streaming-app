import React from "react";

const Profile = ({ id, image, name }) => {
  return (
    <div className="flex items-center text-xs mb-2">
      <img alt="profile-img" src={image} className="mr-3 rounded-sm h-8" />
      <p>{name}</p>
    </div>
  );
};

export default Profile;

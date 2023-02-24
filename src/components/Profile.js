import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Profile = ({ id, image, name }) => {
  return (
    <div className="flex items-center text-xs mb-2">
      {/* <img alt="profile-img" src={image} /> */}
      <AccountBoxIcon className="mr-3 rounded-sm scale-125 text-gray-400" />
      <p>{name}</p>
    </div>
  );
};

export default Profile;

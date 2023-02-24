import React, { useState } from "react";
import { profiles } from "../utils/profiles";
import Profile from "./Profile";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import user3 from "../utils/assets/user3.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ProfileList = () => {
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div className="relative ml-4">
      <div
        className="flex items-center profile-btn"
        onMouseEnter={() => {
          setIsProfile(true);
        }}
        onMouseLeave={() => setIsProfile(false)}
      >
        <AccountBoxIcon className="rounded-sm scale-150 mt-1 " />
        <ArrowDropDownIcon className="cursor-pointer profile-arrow" />
      </div>
      {isProfile && (
        <div className="absolute w-48 top-12 right-0 bg-black  profile-list p-2 pb-0">
          {profiles.map((profile, index) => {
            return <Profile {...profile} key={index} />;
          })}
          <div className="text-xs my-2 flex items-center">
            <EditIcon className="ml-1 text-gray-400" />
            <p className="ml-4">Manage Profiles</p>
          </div>
          <div className="text-xs my-2 flex items-center">
            <MoveDownIcon className="ml-1 text-gray-400" />
            <p className="ml-4">Transfer Profiles</p>
          </div>
          <div className="text-xs my-2 flex items-center">
            <PersonIcon className="ml-1 text-gray-400" />
            <p className="ml-4">Account</p>
          </div>
          <div className="text-xs my-2 flex items-center">
            <HelpOutlineIcon className="ml-1 text-gray-400" />
            <p className="ml-4">Help Center</p>
          </div>
          <div className="text-xs my-2 text-center border-t pt-2">
            <p className=""> Sign Out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileList;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";
import NotificationList from "./NotificationList";
import ProfileList from "./ProfileList";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenu(false);
  }, [pathname]);

  return (
    <section className="flex justify-center items-center py-3 fixed top-0 w-full header ">
      <button
        className="absolute left-8 top-4"
        onClick={() => setIsMenu(!isMenu)}
      >
        {!isMenu ? (
          <MenuIcon className="scale-125" />
        ) : (
          <CloseIcon className="scale-125" />
        )}
      </button>
      {/* {isMenu && <Genres />} */}
      {isMenu && <Genres isMenu={isMenu} />}
      <Link to="/">
        <div className="watcher text-3xl font-bold text-blue-800 mr-12">
          StreamR
          {/* STREAMLY */}
        </div>
      </Link>
      <div className="flex absolute right-8 top-4">
        {/* <Search /> */}
        {/* <div className="mr-4">
        <button>Children</button>
      </div> */}
        <NotificationList />
        <ProfileList />
      </div>
    </section>
  );
};

export default Header;

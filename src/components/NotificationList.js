import React, { useState, useEffect } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { notifications } from "../utils/notifications";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";

const NotificationList = () => {
  const [isNotification, setIsNotification] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNotification(false);
  }, [pathname]);

  return (
    <div className="relative mr-4 mt-0.5">
      <div>
        <NotificationsNoneIcon
          className="cursor-pointer"
          onMouseEnter={() => setIsNotification(true)}
          onMouseLeave={() => setIsNotification(false)}
        />
        <p className=" absolute top-0 -right-1 bg-blue-700  text-center rounded-full px-1 text-xs">
          2
        </p>
      </div>
      {isNotification && (
        <div className="notifications-container absolute w-96 top-12 right-0 bg-black border-t-2">
          {notifications.map((notification) => {
            return <Notification {...notification} />;
          })}
        </div>
      )}
    </div>
  );
};

export default NotificationList;

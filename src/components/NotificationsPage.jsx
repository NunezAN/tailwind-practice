import React from "react";
import Notification from "./Notification";

const NotificationsPage = () => {
  return (
    <div className="bg-white w-screen h-screen px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <h1 className="font-bold text-xl">Notifications</h1>
          <span className="text-white bg-blue-900 font-bold text-xl px-2 rounded-md">
            3
          </span>
        </div>
        <span className="text-sm text-gray-500">Mark all as read</span>
      </div>
      <div className="flex flex-col">
        <Notification
          user={"Mark Webber"}
          alert={"reacted to your recent post"}
          post={"My first tournament today!"}
          time={"1m ago"}
        />
        <Notification
          user={"Angela Gray"}
          alert={"followed you"}
          time={"5m ago"}
        />
        <Notification
          user={"Jacob Thompson"}
          alert={"has joined your group"}
          group={"Chess Club"}
          time={"1 day ago"}
        />
        <Notification
          read
          user={"Angela Gray"}
          alert={"followed you"}
          time={"5 days ago"}
        />
        <Notification
          read
          user={"Kimberly Smith"}
          alert={"commented on your picture"}
          time={"1 week ago"}
        />
        <Notification
          read
          user={"Nathan Peterson"}
          alert={"reacted to your recent post"}
          post={"5 end-game strategies to increase your winrate"}
          time={"2 weeks ago"}
        />
        <Notification
          read
          user={"Anna Kim"}
          alert={"left the group"}
          group={"Chess Club"}
          time={"2 weeks ago"}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;

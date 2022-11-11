import React from "react";
import avatar from "../images/image-avatar.png";
const Notification = ({ read, user, alert, post, group, time }) => {
  return (
    <div className="bg-slate-100 bg-opacity-30 w-full p-4 rounded-lg mt-4">
      <div className="flex justify-between items-center">
        <img src={avatar} className="w-[12%] object-cover h-fit" alt="" />
        <div className="w-[88%] text-sm text-gray-500">
          <div className="pl-2">
            <div>
              <h1 className="">
                <span className="text-sm font-bold text-black">{user}</span>
                <span> {alert}</span>
                <span className="font-bold"> {post && post}</span>
                <span className="font-bold text-blue-800"> {group && group}</span>
                {!read && (
                  <div className="bg-red-500 h-2 w-2 rounded-full inline-block ml-1"></div>
                )}
              </h1>
            </div>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

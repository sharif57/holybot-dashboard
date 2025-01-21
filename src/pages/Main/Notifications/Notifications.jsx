import { Button } from "antd";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className=" rounded-lg min-h-screen bg-[#FDFDFD]">
      <div className="px-[32px] py-6 text-white bg-info rounded-t-lg flex items-center gap-3">
          <FaAngleLeft onClick={() => navigate(-1)} className="text-white" size={34} />
        <h1 className="text-[30px] text-[#052255] font-bold">All Notifications</h1> 
      </div>
      <div className="p-[24px]">
        <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
          />
          <div className="space-y-[2px]">
            <h6 className="text-lg">You have received $500 from John Doe</h6>
            <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
          />
          <div className="space-y-[2px]">
            <h6 className="text-lg">You have received $500 from John Doe</h6>
            <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
          />
          <div className="space-y-[2px]">
            <h6 className="text-lg">You have received $500 from John Doe</h6>
            <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
          />
          <div className="space-y-[2px]">
            <h6 className="text-lg">You have received $500 from John Doe</h6>
            <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
          </div>
        </div>
        <div className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
          />
          <div className="space-y-[2px]">
            <h6 className="text-lg">You have received $500 from John Doe</h6>
            <small className="text-[12px] text-gray-500">Fri, 12:30pm</small>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Notifications;

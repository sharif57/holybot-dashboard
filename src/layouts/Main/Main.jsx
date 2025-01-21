import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="flex text-start bg-white min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 pl-[326px] bg-[#F2F5F7]">
        <div className={`w-full z-10 transition-all ${
          isScrolled
            ? "sticky top-0 bg-white shadow-md p-0"
            : "sticky top-0 bg-transparent p-[24px]"
        }`}>
          <Header />
        </div>
        <div className="p-[24px] pt-0.5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;

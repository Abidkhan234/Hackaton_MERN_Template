import { X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { links } from "../../../constants/data";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex flex-col gap-5 py-5 px-4">
      <div className="flex justify-between items-center border-b-2 border-white pb-3">
        <h2 className="font-bold text-3xl">Logo</h2>
        <div className="">
          <Button
            className={`bg-white hover:bg-gray-100 font-medium text-green-500`}
            size={"icon"}
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="size-6" strokeWidth={2} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {links.map((v, i) => (
          <NavLink
            className={({ isActive }) =>
              `text-xl font-medium ${isActive && "relative"} text-center w-full`
            }
            key={i}
            to={v.path}
            onClick={() => setIsSidebarOpen(false)}
          >
            {v.text}
            <div className="absolute bottom-0 h-[2px] w-full transition-all rounded-sm bg-white"></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

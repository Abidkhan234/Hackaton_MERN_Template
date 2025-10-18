import { links } from "../../../constants/data";
import React, { Activity } from "react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import useUIContext from "../../../context/UIContext";
import Sidebar from "../sidebar/Sidebar";
import { AnimatePresence, motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import QueryWrapper from "../wrappers/QueryWrapper";
import { useQuery } from "@tanstack/react-query";
import { fetchProfileData } from "../../../apis/fetchErrorData";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen, token } = useUIContext();

  return (
    <>
      <nav className="py-3 sm:px-10 min-[375px]:px-5 px-2.5 flex justify-between items-center bg-green-400 text-white fixed z-30 top-0 left-0 right-0">
        <div className="">
          <h2 className="font-bold text-3xl">
            <NavLink to={`/`}>Logo</NavLink>
          </h2>
        </div>
        <div className="sm:flex hidden items-center gap-10">
          {links.map((v, i) => (
            <NavLink
              className={({ isActive }) =>
                `text-lg font-medium relative ${isActive ? "" : "group"}
            `
              }
              key={i}
              to={v.path}
            >
              {v.text}
              <div className="absolute bottom-0 h-[2px] w-0 group-hover:w-full transition-all rounded-sm bg-white"></div>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center sm:gap-5 gap-2.5">
          <div className="sm:hidden block">
            <Button
              className={`bg-white hover:bg-gray-100 font-medium text-green-500`}
              size={`icon`}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="size-5" strokeWidth={3} />
            </Button>
          </div>
          {token ? (
            // <UserAvatar />
            <span className="bg-white size-10 cursor-pointer rounded-full flex justify-center items-center text-black">A</span>
          ) : (
            <>
              <NavLink to={`/auth/login`}>
                <Button
                  className={`bg-white hover:bg-gray-100 font-medium text-lg text-green-500 max-[375px]:!px-3`}
                  size={`lg`}
                >
                  Login
                </Button>
              </NavLink>
              <NavLink to={`/auth/register`}>
                <Button
                  className={`bg-white hover:bg-gray-100 font-medium text-lg text-green-500 max-[375px]:!px-3`}
                  size={`lg`}
                >
                  Sign Up
                </Button>
              </NavLink>
            </>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: "0%",
            }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-full max-w-[280px] bg-green-400 text-white z-40"
          >
            <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const UserAvatar = () => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["user-porfile"],
    queryFn: fetchProfileData,
  });

  return (
    <QueryWrapper isLoading={isLoading} error={error} isError={isError}>
      <Avatar>
        <AvatarFallback>
          {data?.userName.charAt(0).toUpperCase() || "A"}
        </AvatarFallback>
      </Avatar>
    </QueryWrapper>
  );
};

export default Navbar;

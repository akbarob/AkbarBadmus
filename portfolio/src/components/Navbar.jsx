import React, { useState } from "react";
import { images } from "../constant";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
motion;
const Navbar = ({ theme, isDark, setIsDark, setActive }) => {
  const [Toggle, setToggle] = useState(false);
  const switcher = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  return (
    <nav className="flex items-center justify-between py-2 px-4 backdrop-blur-sm bg-slate-200/50 border-2 border-solid sticky top-0 z-50">
      <div className="flex items-center justify-center">
        <img src={images.AkbarBadmus} className="w-[100px] h-[20-px] " />
      </div>
      <div className=" hidden md:flex-1 md:flex justify-center items-center">
        <ul className="flex">
          {["home", "about", "projects", "skills", "contact"].map((item, i) => {
            return (
              <li key={i} className="flex justify-between mx-8">
                <a
                  href={`#${item}`}
                  className="capitalize font-semibold transition-all ease-in-out duration-75 hover:text-gray-800"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:hidden">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="bg-amber-600 rounded-full w-6 h-6 p-1 text-white"
        />
        <AnimatePresence>
          {Toggle && (
            <motion.div
              animate={{
                opacity: 1,
                x: [300, 0],
                transition: {
                  duration: 0.8,
                },
              }}
              exit={{ x: [0, 500] }}
              initial={{ opacity: 0 }}
              className="fixed z-50 w-2/3 h-screen right-0 bottom-0 top-0"
            >
              <div className="absolute  bg-white h-full ">
                <img src={images.bgWhite} className=" object-cover h-full" />
              </div>
              <div className="absolute z-50 flex p-2 w-full justify-center">
                <HiX
                  onClick={() => setToggle(false)}
                  className="bg-amber-600 rounded-full w-6 h-6 p-1 text-white flex justify-end absolute right-2"
                />
                <ul className="p-2 flex flex-col my-2 w-full h-full ml-10">
                  {["home", "about", "projects", "skills", "contact"].map(
                    (item, i) => {
                      return (
                        <li key={i} className="flex flex-col text-left ">
                          <a
                            href={`#${item}`}
                            onClick={() => setToggle(false)}
                            className="text-gray-400 dark:text-red-500 capitalize font-semibold transition-all ease-in-out duration-75 hover:text-gray-800 my-10 "
                          >
                            {item}
                          </a>
                        </li>
                      );
                    }
                  )}
                  <button
                    onClick={switcher}
                    className="flex items-center justify-center py-2 px-8  transition-all ease-in-out duration-700 "
                  >
                    <p>Theme:</p>
                    <p>{isDark ? <BsToggle2On /> : <BsToggle2Off />}</p>
                  </button>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        onClick={switcher}
        className=" items-center justify-center py-2 px-8   transition-all ease-in-out duration-700 shadow-lg hidden md:flex"
      >
        <p className="">Theme:</p>
        <p>{isDark ? <BsToggle2On /> : <BsToggle2Off />}</p>
      </button>
    </nav>
  );
};

export default Navbar;

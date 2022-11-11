import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="fixed inset-y-0 right-2   h-screen">
      <div className=" md:flex flex-col justify-center items-center my-[1000%] bg-amber-400 dark:bg-white rounded-xl hidden">
        {["home", "about", "projects", "skills", "contact"].map((item, i) => {
          return (
            <a
              key={item + i}
              href={`#${item}`}
              className={`${
                active === item ? "bg-amber-700" : ""
              } w-[10px] h-[10px] rounded-[50%] bg-white dark:bg-amber-400 m-2 transition-all duration-200 ease-in-out hover:bg-amber-900 hover:dark:bg-amber-900`}
            >
              {/* {console.log("active-item:", active, item)} */}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationDots;

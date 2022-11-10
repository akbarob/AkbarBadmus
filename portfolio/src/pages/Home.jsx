import { motion } from "framer-motion";
import React from "react";
import { images } from "../constant";

const Home = () => {
  const scaleVaraints = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      id="home"
      className="flex md:flex-row flex-col md:items-center justify-center mt-5"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" flex md:mr-5 items-start justify-start mx-10 md:mx-0"
      >
        <div className="flex flex-col md:items-end md:justify-end items-start">
          <div className="flex  shadow-lg rounded-md py-4 px-8 border-[1px] border-black/10">
            <span className="text-4xl animate-wave">👋🏾</span>
            <div className="ml-6">
              <p>Hello, I am </p>
              <h1 className="text-2xl font-bold">AKBAR</h1>
            </div>
          </div>

          <div className="items-end flex flex-col shadow-lg  rounded-md mt-9 py-4 px-8  border-[1px] border-black/10 uppercase text-right">
            <p className="text-2xl font-semibold">Web Developer</p>
            <p className="">Designer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="relative mt-6 md:mt-0"
      >
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut", delayChildren: 0.5 }}
          src={images.circle}
          alt="profile"
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-[90%]"
        />
        <img
          src={images.profile}
          className="w-full object-contain relative z-10"
        />
      </motion.div>
      <motion.div
        variants={scaleVaraints}
        whileInView={scaleVaraints.whileInView}
        className="flex md:flex-col flex-row flex-wrap justify-evenly items-start md:pr-10 mt-6"
      >
        {[images.redux, images.react, images.tailwind].map((item, i) => (
          <div
            className=" w-[150px] h-[150px] rounded-[50%] shadow-xl flex items-center justify-center md:even:ml-10 odd:w-[100px] odd:h-[100px]  md:my-5 even bg-white"
            key={i}
          >
            {" "}
            <img src={item} alt="item" className="w-[60%] h-[60%]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;

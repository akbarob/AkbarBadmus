import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { images } from "../constant";
import { Client, urlFor } from "../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  console.log(urlFor(abouts.imgUrl));
  useEffect(() => {
    const query = `*[_type == 'abouts']`;
    Client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div
      id="about"
      className=" flex flex-col items-center justify-center mt-5 h-screen"
    >
      <motion.h2
        whileInView={{ y: [-50, 0] }}
        className="font-bold text-2xl mb-12"
      >
        About Me
      </motion.h2>
      <div className="w-4/5 h-[500px] bg-white rounded-3xl p-10 flex  items-center justify-center shadow-lg">
        <p className="md:text-justify text-md md:text-xl">
          Hello! I'm Akbar, a front-end developer from Nigeria. I love building
          web applications with React, and I'm currently upscaling for a great
          Career. I am on a journey to make the world a better place while
          constantly learning daily . I still don't know if it's "front-end",
          "frontend, or "front end", and at this point I'm too afraid to ask.
        </p>
      </div>
    </div>
  );
};

export default About;

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Client, urlFor } from "../client";
import { useStateProvider } from "../Context/State";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const { setActive } = useStateProvider();

  const [skills, setSkills] = useState([]);
  console.log(skills);
  useEffect(() => {
    const query = `*[_type == 'skills']`;

    Client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <div
      id="skills"
      className="flex  flex-col items-center justify-center mt-5  mb-32  h-screen pt-20"
      whileInView={() => setActive("skills")}
    >
      <motion.h2
        whileInView={{ y: [-50, 0] }}
        className="font-bold text-xl mb-12"
      >
        My Skills
      </motion.h2>
      <motion.ul
        whileInView={{
          x: [-200, 0],
        }}
        className="grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center "
      >
        {skills.map((skill, i) => {
          return (
            <motion.li key={skill + i} className="">
              <div className=" w-24 h-24 md:w-[100px] md:h-[100px] bg-white rounded-full mx-4 my-4 flex items-center justify-center shadow-lg p-8">
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  className=" w-full h-full  object-contain hover:scale-125 transition-all duration-500 ease-in-out"
                />
              </div>
              <p>{skill.name}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skills;

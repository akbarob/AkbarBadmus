import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Client, urlFor } from "../client";
import { useStateProvider } from "../Context/State";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { setActive } = useStateProvider();

  useEffect(() => {
    const query = `*[_type == 'projects'] |  order(serial)`;
    Client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <motion.div
      whileInView={() => setActive("projects")}
      id="projects"
      className=" flex flex-col items-center justify-center mt-5 mb-32  pt-20"
    >
      <motion.h2
        whileInView={{ y: [-50, 0] }}
        className="font-bold text-xl mb-12"
      >
        Projects
      </motion.h2>
      <h2 className="text-lg  ">
        {" "}
        I Know that <span className="font-bold italic"> Good Code </span> means
        <span className="font-bold italic "> Good Buisness</span>
      </h2>
      <div className=" flex justify-center items-start flex-wrap mt-8 ">
        {projects?.map((project, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item w-[190px] flex justify-center items-center flex-col m-8 cursor-pointer group bg-white dark:bg-amber-300 p-4 rounded-xl"
          >
            <img
              src={urlFor(project.imgUrl)}
              alt={project.title}
              className="w-full h-[170px] xl:w-[320px] object-contain rounded-lg "
            />

            <div
              className={`backdrop-blur hidden opacity-80 justify-evenly items-center absolute  w-full h-[150px] group-hover:flex px-4 `}
            >
              <a
                href={project.projectLink}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillEye
                  className="shadow-lg bg-white rounded-full hover:bg-amber-500 hover:dark:text-black"
                  size={40}
                />
              </a>
              <a
                href={project.codeLink}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  className="shadow-lg bg-white rounded-full hover:bg-amber-500 hover:dark:text-black"
                  size={40}
                />
              </a>
            </div>
            <a
              href={project.projectLink}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <h2 className="mt-2 font-bold truncate cursor-pointer">
                {project.title}
              </h2>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

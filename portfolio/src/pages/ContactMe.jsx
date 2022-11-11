import React from "react";
import { BsPhone } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion } from "framer-motion";

const Style = {
  div: "flex w-full md:w-[400px] h-[150px] bg-white justify-evenly items-center my-10 rounded-xl shadow-lg ",
  p: "font-bold text-2xl cursor-pointer px-2",
};
const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center h-screen p-8"
    >
      <motion.h2
        whileInView={{ y: [-50, 0] }}
        className="font-bold text-xl mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="">
        <motion.div
          whileInView={{
            x: [200, 0],
          }}
          className={Style.div}
        >
          <BsPhone size={40} />
          <IoLogoWhatsapp
            size={40}
            className="bg-green-600 text-white rounded-md"
          />
          <p className={Style.p}>+234 809-548-1372</p>
        </motion.div>

        <motion.div
          whileInView={{
            x: [-200, 0],
          }}
          className={Style.div}
        >
          {/* <MdAttachEmail size={40} className="text-blue-500" /> */}
          <span className="text-3xl">📩</span>

          <p className={Style.p}>
            <a
              href="mailto:akbarbadmus07@gmail.com"
              className="flex flex-col justify-center items-center"
            >
              Akbarbadmus@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;

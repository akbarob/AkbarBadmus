import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  const styles = {
    div: "flex items-center justify-center w-10 h-10 rounded-3xl bg-white border-[1px] border-solid border-gray-200 hover:bg-blue-500 my-3 cursor-pointer",
    icon: "w-4 h-4  hover:text-indigo-300",
  };
  return (
    <div className=" fixed bottom-5 left-5 z-50">
      <div className={styles.div}>
        <BsTwitter className={styles.icon} />
      </div>
      <div className={styles.div}>
        <BsInstagram className={styles.icon} />
      </div>
      <div className={styles.div}>
        <BsLinkedin className={styles.icon} />
      </div>
    </div>
  );
};

export default SocialMedia;

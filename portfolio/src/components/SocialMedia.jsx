import React from "react";
import { BsTwitter, BsGithub, BsLinkedin, BsBehance } from "react-icons/bs";

const SocialMedia = () => {
  const styles = {
    div: "flex items-center justify-center w-10 h-10 rounded-3xl bg-white border-[1px] border-solid border-gray-200 hover:bg-blue-500 hover:dark:bg-amber-500 my-3 cursor-pointer",
    icon: "w-4 h-4  hover:text-indigo-400",
  };
  return (
    <div className=" fixed bottom-10 left-5 z-50">
      <div className={styles.div}>
        <a
          href="https://twitter.com/akbar_ob"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter className={styles.icon} />
        </a>
      </div>
      <div className={styles.div}>
        <a
          href="https://github.com/akbarob"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className={styles.icon} />
        </a>
      </div>
      <div className={styles.div}>
        <a
          href="https://www.linkedin.com/in/akbar-badmus-10790a179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className={styles.icon} />
        </a>
      </div>
      <div className={styles.div}>
        <a
          href="https://www.behance.net/akbarbadmus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsBehance className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

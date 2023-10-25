import React, { useState } from "react";

import "./Sidebar.scss";
import { motion } from "framer-motion";

const Sidebar = () => {
  const Link = ["Home", "About", "Portfolio", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const toggleBetween = () => {
    setIsOpen(!isOpen);
    console.log("you have opened the navBAr ");
  };
  const Variant = {
    open: {
      transition: {
        stagerChildren: 0.1,
      },
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  };
  const linksVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",

        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,

        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <motion.div className="Links" variants={Variant}>
          {Link.map((link, index) => (
            <motion.a
              href={`#${link}`}
              key={index}
              onClick={()=> setIsOpen(false)}
              variants={linksVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{scale:0.95}}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <button onClick={toggleBetween}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </button>
    </motion.div>
  );
};

export default Sidebar;

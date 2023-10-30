import React, { useRef } from "react";
import "./work.scss";
import Projects from "./Projects";
import { motion, useScroll, useSpring } from "framer-motion";
import { items } from "./Items";

const Work = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="workModel" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {

        return(
          <Projects item={item} key={item.id} />
        )
      } 
      )}
    </div>
  );
};

export default Work;

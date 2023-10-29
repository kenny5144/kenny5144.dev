import { React, useRef } from "react";
import { motion, useScroll,  useTransform } from "framer-motion";

import "./Project.scss";
const Projects = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="projects">
        <div className="content">
          <div className="imageContainer " ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h5 className="">{item.title}</h5>
            <p>{item.des}</p>
            <span className="tools">
              <p className="">Tools Used</p> <span>{item.tools}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

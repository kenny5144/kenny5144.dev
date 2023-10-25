import { React, useRef } from "react";
import devicef from "../img/devicef.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "./Project.scss";
const Projects = () => {
  const works = [
    {
      id: 1,
      title: "Kennys Studio",
      img: devicef,
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste itaque atque molestiae soluta ratione sint, accusamus reiciendis magni quod sit alias consequatur temporibus repellendus enim cupiditate sunt qui dolore vero.",
      tools: [""],
    },
    {
      id: 1,
      title: "Fawn Soft",
      img: devicef,
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste itaque atque molestiae soluta ratione sint, accusamus reiciendis magni quod sit alias consequatur temporibus repellendus enim cupiditate sunt qui dolore vero.",
      tools: [""],
    },
    {
      id: 1,
      title: "aquin",
      img: devicef,
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste itaque atque molestiae soluta ratione sint, accusamus reiciendis magni quod sit alias consequatur temporibus repellendus enim cupiditate sunt qui dolore vero.",
      tools: [""],
    },
  ];
const uref =useRef()

  const { scrollYProgress } = useScroll({
    target: uref,
  });

  const y = useTransform(scrollYProgress, [0, 2], [-300, 500]);

  return (
    <section>
      <div className="projects" >
        <span></span>
        {works.map((work) => {
          return (
            <div className="content" >
              <div className="imageContainer " ref={uref}>
                <img src={work.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{y}}>
                <h5>{work.title}</h5>
                <p>{work.des}</p>
                <span className="tools">
                  <p>Tools Used</p> <span>{work.tools}</span>
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BotonChoose } from "../../components/BotonChoose/BotonChoose";
import "./ChooseReact.css";

const Choose: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const imageTextContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const imageOverlayVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.3 } },
  };

  const contentWrapperVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const listContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fboxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1.0 } },
  };

  const fboxButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="choose-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="choose-image-text-container">
        <motion.div
          className="choose-image-overlay"
          style={{ backgroundImage: "url('/choose/choose1.png')" }}
          variants={imageOverlayVariants}
        ></motion.div>
        <motion.div className="choose-text-container" variants={titleVariants}>
          <h1>Why Choose Bethelor?</h1>
        </motion.div>
      </motion.div>

      <div className="choose-content">
        <motion.div className="choose-content-wrapper" variants={contentWrapperVariants}>
          <motion.div className="choose-description" variants={descriptionVariants}>
            <p>
              At Bethelor, we may be a small local team—but we go above and beyond to deliver big results.
              <br />
              <br />
              Our commitment goes beyond construction. We build trust, create beautiful and functional spaces, and treat every project like it’s our own home.
            </p>
            <BotonChoose />
          </motion.div>
          <div className="choose-details">
            <motion.div className="choose-list" variants={listContainerVariants}>
              <ul>
                {["Locally owned and operated in Maryland",
                  "Friendly, skilled, and detail-oriented crew",
                  "Transparent pricing and clear communication",
                  "Clean job sites, respectful of your home",
                  "Flexible scheduling and fast project turnaround"].map((item, idx) => (
                    <motion.li key={idx} variants={listItemVariants}>
                      {item}
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
            <motion.div className="choose-stats" variants={statsContainerVariants}>
              <motion.div className="choose-stat" variants={statItemVariants}>
                <span>+12</span>
                <p>COMPLETED PROJECTS SINCE 2023</p>
              </motion.div>
              <motion.div className="choose-stat" variants={statItemVariants}>
                <span>100%</span>
                <p>CLIENT SATISFACTION GOAL</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div className="f-box" variants={fboxVariants}>
        <motion.h3 variants={titleVariants}>
          Thinking About Remodeling Your Home?
        </motion.h3>
        <motion.img
          className="imgchoose"
          src="/choose/boton.png"
          alt="Get a Free Estimate"
          variants={fboxButtonVariants}
          whileHover="hover"
          whileTap="tap"
        />
      </motion.div>
    </motion.section>
  );
};

export default Choose;
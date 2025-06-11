import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ProcessReact.css";
import BotonProcess from "../BotonProcess/BotonProcess";

const processSteps = [
  {
    img: "/process/process1.png",
    title: "Project Consultation & Planning",
    description: (
      <>
        We start by listening to your goals, needs, and vision. Whether you’re
        remodeling your kitchen, bathroom, or entire home, we define the
        scope, timeline, and budget.
        <br />
        <br />
        This step ensures we understand exactly what you want — and how to make
        it happen.
      </>
    ),
  },
  {
    img: "/process/process2.png",
    title: "Design & Material Selection",
    description: (
      <>
        Once we understand your goals, we move into the design phase. We’ll
        help you choose layouts, finishes, colors, fixtures, tiles, flooring,
        and cabinetry that match your style and budget.
        <br />
        <br />
        You’ll get a clear plan before any work begins.
      </>
    ),
  },
  {
    img: "/process/process3.png",
    title: "Construction & Installation",
    description: (
      <>
        Now it’s time to bring the plan to life. Our team begins the
        construction process — from demolition to framing, plumbing,
        electrical, drywall, and installation.
        <br />
        <br />
        We keep the worksite clean and communicate with you at every step.
      </>
    ),
  },
  {
    img: "/process/process4.png",
    title: "Final Walkthrough & Quality Check",
    description: (
      <>
        Once construction is complete, we do a full walkthrough together to
        make sure every detail meets your expectations.
        <br />
        <br />
        We handle any final adjustments and leave your space clean, functional,
        and ready to enjoy.
      </>
    ),
  },
];

const Process: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <motion.section
      className="process-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="process-container">
        <motion.div className="process-header" variants={headerVariants}>
          <h2 className="process-title">Our Remodeling Process</h2>
          <p className="process-description">
            We follow a clear, client-focused process to ensure every remodeling
            project is completed on time, on budget, and with high-quality results.
          </p>
        </motion.div>
        <motion.div className="process-content">
          {processSteps.map((step, idx) => (
            <motion.div
              className="process-item"
              key={idx}
              variants={itemVariants}
            >
              <img
                className="process-item-image"
                src={step.img}
                alt={step.title}
              />
              <h4 className="process-item-title">{step.title}</h4>
              <p className="process-item-description">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="process-footer" variants={footerVariants}>
          <BotonProcess />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Process;
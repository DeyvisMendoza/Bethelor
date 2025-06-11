import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./FormReact.css";
import BotonForm from "../BotonForm/BotonForm";

const Form: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <motion.section
      className="form-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.div className="form-image-container" variants={imageVariants}>
        <img src="/form/Form1 copy.png" alt="Let's talk about your project" className="form-image" />
      </motion.div>
      <motion.div className="form-content" variants={contentVariants}>
        <motion.div className="form-header">
          <motion.h2 className="form-title" variants={textItemVariants}>
            Let’s Talk About Your Project in Maryland
          </motion.h2>
          <motion.p className="form-description" variants={textItemVariants}>
            Tell us your vision, and we’ll make it real. Whether you’re updating a
            small bathroom or planning a full home remodel, our team is ready to
            help—on time and within budget.
          </motion.p>
        </motion.div>
        <div className="form-communications-container">
          <motion.div className="form-input-container">
            <motion.h3 className="form-communications-title" variants={textItemVariants}>Communications</motion.h3>
            <div className="form-communications-list">
              <motion.div className="form-communication-item" variants={listItemVariants}>
                <img src="/form/form1.png" alt="Address icon" />
                <div className="form-communication-info">
                  <span>Address</span>
                  <p>
                    59 Serpens Ct, Rosedale, <br />
                    MD 21237
                  </p>
                </div>
              </motion.div>
              <motion.div className="form-communication-item" variants={listItemVariants}>
                <img src="/form/form2.png" alt="Phone icon" />
                <div className="form-communication-info">
                  <span>
                    Phone & Mail Support 24/7
                  </span>
                  <p>
                    Mail: Contact@bethelor.com
                    <br />
                    Phone number: +1 240 618 7916
                  </p>
                </div>
              </motion.div>
              <motion.div className="form-communication-item" variants={listItemVariants}>
                <img src="/form/form3.png" alt="Working time icon" />
                <div className="form-communication-info">
                  <span>Working Time</span>
                  <p>
                    Monday - Friday: 8:00am - 5:00pm
                    <br />
                    Holiday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="form-extra">
            <motion.h3 variants={textItemVariants}>Drop A Line</motion.h3>
            <form action="" className="form-inputs">
              <motion.div className="form-inputs-container" variants={listItemVariants}>
                <div className="forminput-container">
                  <input
                    type="text"
                    className="forminput-input"
                    placeholder="*Full Name"
                  />
                  <span className="forminput-corner forminput-corner-left"></span>
                  <span className="forminput-corner forminput-corner-right"></span>
                  <span className="forminput-corner forminput-corner-bottom"></span>
                  <span className="forminput-corner forminput-corner-top"></span>
                </div>
                <div className="forminput-container">
                  <input
                    type="text"
                    className="forminput-input"
                    placeholder="*Email"
                  />
                  <span className="forminput-corner forminput-corner-left"></span>
                  <span className="forminput-corner forminput-corner-right"></span>
                  <span className="forminput-corner forminput-corner-bottom"></span>
                  <span className="forminput-corner forminput-corner-top"></span>
                </div>
              </motion.div>
              <motion.div className="form-inputs-container" variants={listItemVariants}>
                <div className="forminput-container">
                  <input
                    type="text"
                    className="forminput-input"
                    placeholder="*Phone Number"
                  />
                  <span className="forminput-corner forminput-corner-left"></span>
                  <span className="forminput-corner forminput-corner-right"></span>
                  <span className="forminput-corner forminput-corner-bottom"></span>
                  <span className="forminput-corner forminput-corner-top"></span>
                </div>
                <div className="forminput-container">
                  <input
                    type="text"
                    className="forminput-input"
                    placeholder="*Address"
                  />
                  <span className="forminput-corner forminput-corner-left"></span>
                  <span className="forminput-corner forminput-corner-right"></span>
                  <span className="forminput-corner forminput-corner-bottom"></span>
                  <span className="forminput-corner forminput-corner-top"></span>
                </div>
              </motion.div>
              <motion.div className="form-inputs-container" variants={listItemVariants}>
                <div className="forminput-container">
                  <input
                    type="text"
                    className="forminput-input"
                    placeholder="Zip Code"
                  />
                  <span className="forminput-corner forminput-corner-left"></span>
                  <span className="forminput-corner forminput-corner-right"></span>
                  <span className="forminput-corner forminput-corner-bottom"></span>
                  <span className="forminput-corner forminput-corner-top"></span>
                </div>
              </motion.div>
              <motion.div className="forminput-container1" variants={listItemVariants}>
                <textarea
                  className="forminput-textarea"
                  placeholder="Briefly describe your project"
                ></textarea>
                <span className="forminput-corner1 forminput-corner-left1"></span>
                <span className="forminput-corner1 forminput-corner-right1"></span>
                <span className="forminput-corner1 forminput-corner-bottom1"></span>
                <span className="forminput-corner1 forminput-corner-top1"></span>
              </motion.div>
              <motion.div className="privacy-container" variants={listItemVariants}>
                <input type="checkbox" id="privacy" className="checkbox" />
                <label htmlFor="privacy" className="privacy-label">
                  <span className="main-text">
                    I agree to receive occasional project updates and special
                    offers from Bethelor. My information will stay private and
                    never be shared without permission.
                  </span>
                </label>
              </motion.div>
              <motion.div className="form-button-container" variants={buttonVariants}>
                <BotonForm />
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Form;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./ServicesReact.css";
import { services } from "../../lib/dataServices";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const headerTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const accordionItemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const detailedIconsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const singleIconTextVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.section className="services-section" ref={ref}>
      <div className="services-header">
        <motion.div
          className="services-intro"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="services-title" variants={headerTextVariants}>
            Our Services.
          </motion.h2>
          <motion.p
            className="services-description"
            variants={headerTextVariants}
          >
            At Bethelor, we offer high-quality home remodeling services in
            Maryland, specializing in kitchens, bathrooms, basements, full home
            renovations, and more. Our team is committed to turning your ideas
            into reality with reliable craftsmanship and attention to detail.
          </motion.p>
        </motion.div>
      </div>
      <div className="accordion">
        {services.map((service, idx) => (
          <motion.div
            className={`accordion-item${activeIndex === idx ? " active" : ""}`}
            key={service.title}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={accordionItemVariants}
            custom={idx}
            layout
          >
            <motion.div
              className="accordion-header"
              onClick={() => handleAccordion(idx)}
            >
              <div className="accordion-content-inner">
                <h3 className="accordion-button">{service.title}</h3>
                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <motion.div
                      key="accordion-expanded-content"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                    >
                      <p>
                        {service.description.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                      <ul>
                        {service.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <motion.a
                        href={service.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="
                          inline-flex items-center justify-center
                          bg-black text-white
                          px-6 py-3
                          text-sm
                          font-semibold
                          transition-colors duration-300 ease-in-out
                          hover:bg-gray-800
                          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                          px-4 py-2 sm:px-6 sm:py-3
                          text-xs sm:text-sm
                          mt-4
                        "
                        onClick={(e) => e.stopPropagation()}
                      >
                        {service.textobuton}
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                className="accordion-content-img"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
              <div className="accordion-content-icons">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "start",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {activeIndex === idx ? (
                      <motion.span
                        key="minus"
                        className="icon-close"
                        initial={{ rotate: 0, opacity: 0 }}
                        animate={{ rotate: 180, opacity: 1 }}
                        exit={{ rotate: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        -
                      </motion.span>
                    ) : (
                      <motion.span
                        key="plus"
                        className="icon"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        +
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      key="accordion-detailed-icons"
                      className="accordion-content-icons-general"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={detailedIconsVariants}
                    >
                      {service.icons.map((icon, i) => (
                        <motion.div
                          className="accordion-content-icons-text"
                          key={i}
                          variants={singleIconTextVariants}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                              flexDirection: "row",
                              gap: "10px",
                            }}
                          >
                            <img src={icon.icon} alt="" />
                            <h4>{icon.title}</h4>
                          </div>
                          <p>{icon.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
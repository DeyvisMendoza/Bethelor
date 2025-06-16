import React from "react";
import { motion, useInView } from "framer-motion";
import "../../components/BrandsReact/BrandsReact.css"

export const AboutLogos = () => {
  const trustedBrandsLogoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const trustedBrandsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2,
        staggerChildren: 0.2,
      },
    },
  };

  const trustedBrandsTitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div className="trusted-brands" variants={trustedBrandsVariants}>
      <motion.h3
        className="trusted-brands-title"
        variants={trustedBrandsTitleVariants}
      >
        Brands We Trust for Remodeling in Maryland
      </motion.h3>
      <motion.div
        className="trusted-brands-logo"
        variants={trustedBrandsLogoVariants}
      >
        <img src="/brands/brands5.svg" alt="Trusted Brands Logos" />
      </motion.div>
    </motion.div>
  );
};

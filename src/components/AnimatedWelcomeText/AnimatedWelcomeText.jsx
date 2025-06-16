// src/components/AnimatedWelcomeText.jsx
import React from 'react';
import { motion } from 'framer-motion';
import "../../styles/sections/home/welcome.css";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre las animaciones de los hijos
      delayChildren: 1,     // Retraso antes de que los hijos empiecen a animarse
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Un tipo de animación con rebote
      damping: 10,
      stiffness: 100,
    },
  },
};

const AnimatedWelcomeText = () => {
  return (
    <motion.div
      className="text-container absolute inset-0 flex flex-col justify-end"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>Home Remodeling in Maryland</motion.h1>
      <motion.p variants={itemVariants}>
        Kitchens, bathrooms, basements & more.
        <br />
        High-quality results. Trusted service.
      </motion.p>
    </motion.div>
  );
};

export default AnimatedWelcomeText;
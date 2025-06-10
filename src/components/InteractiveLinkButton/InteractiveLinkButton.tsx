import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// SVG de la flecha con una rotación para inclinarla
const ArrowSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    // Añade la transformación de rotación aquí
    // rotate(-45) rota 45 grados en sentido anti-horario, lo que hará que apunte arriba-derecha
    transform="rotate(-45)"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

interface InteractiveLinkButtonProps {
  href: string;
  className?: string;
  variants?: any;
}

export const InteractiveLinkButton: React.FC<InteractiveLinkButtonProps> = ({
  href,
  className,
  variants,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = {
    stiffness: 200,
    damping: 10,
  };

  const x = useSpring(useTransform(mouseX, (val) => {
    if (!buttonRef.current) return 0;
    const rect = buttonRef.current.getBoundingClientRect();
    const center = rect.width / 2;
    const delta = val - center;
    return isHovered ? delta * 0.4 : 0;
  }), springConfig);

  const y = useSpring(useTransform(mouseY, (val) => {
    if (!buttonRef.current) return 0;
    const rect = buttonRef.current.getBoundingClientRect();
    const center = rect.height / 2;
    const delta = val - center;
    return isHovered ? delta * 0.4 : 0;
  }), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const buttonElement = buttonRef.current;
    if (buttonElement) {
      buttonElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        buttonElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [mouseX, mouseY]);

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      className={`interactive-link-button ${className || ""}`}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="button-arrow-wrapper"
        style={{ x, y }}
      >
        <ArrowSVG />
      </motion.div>
    </motion.a>
  );
};
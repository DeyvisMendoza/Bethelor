// src/components/ServicesReact.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { services } from "../../../src/lib/dataServices.ts"; // Importa los datos

import "./ServicesReact.css"; // Asegúrate de tener el CSS adecuado para los estilos

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  // Ajustado el 'amount' para que la animación empiece antes cuando la sección entra en vista
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Se activa cuando el 10% de la sección es visible

  const handleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  // Variantes para el contenedor principal de los textos de cabecera
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Aumentado el retraso entre la aparición de los hijos
        delayChildren: 0.4, // Retraso inicial antes de que los hijos comiencen a aparecer
      },
    },
  };

  // Variantes para el título y el párrafo de la cabecera
  const headerTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Duración ligeramente aumentada
        ease: "easeOut",
      },
    },
  };

  // Variantes para cada ítem individual del acordeón (la aparición escalonada)
  const accordionItemVariants = {
    hidden: { opacity: 0, y: 70 }, // Más desplazamiento inicial
    visible: (i: number) => ({
      // Función para aplicar un retraso basado en el índice
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Retraso escalonado más pronunciado (0.15 segundos entre cada ítem)
        duration: 0.6, // Duración más larga para una aparición más suave
        ease: "easeOut",
      },
    }),
  };

  // Variantes para el contenido desplegable del acordeón (el texto, lista, botón de video)
  const contentVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto", // IMPORTANTE: Animar a 'auto' para altura dinámica
      y: 0,
      transition: {
        duration: 0.5, // Duración un poco más larga para una apertura más suave
        ease: "easeInOut", // Suavizado de entrada y salida
        when: "beforeChildren", // Anima el contenedor antes que sus hijos
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.4, // Duración para el cierre
        ease: "easeIn", // Suavizado de entrada
      },
    },
  };

  // Variantes para los iconos detallados (dentro del acordeón abierto)
  const detailedIconsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08, // Ligeramente más retraso entre cada icono
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

  // Variantes para cada texto de icono individual
  const singleIconTextVariants = {
    hidden: { opacity: 0, x: 30 }, // Más desplazamiento lateral
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 30, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="services-section"
      ref={ref}
      // No necesitamos 'initial' o 'animate' aquí directamente, los hijos lo manejarán
    >
      <div className="services-header">
        <motion.div
          className="services-intro"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animar cuando la sección esté en vista
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
            key={service.title} // Asegúrate de que service.title es único o usa un ID
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animar cuando la sección esté en vista
            variants={accordionItemVariants}
            custom={idx} // Pasa el índice como prop 'custom' para las variantes
            layout // Crucial para una animación de altura suave
          >
            <motion.div
              className="accordion-header"
              onClick={() => handleAccordion(idx)}
              // Aquí no necesitamos una transición de layout, el padre ya la tiene
            >
              <div className="accordion-content-inner">
                <h3 className="accordion-button">{service.title}</h3>
                <AnimatePresence mode="wait">
                  {" "}
                  {/* mode="wait" para que una animación termine antes de que la otra empiece */}
                  {activeIndex === idx && (
                    <motion.div
                      key="accordion-expanded-content" // Clave única para AnimatePresence
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
                      {/* <motion.a
                                                href={service.videoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                            >
                                                <img src={service.video} alt={`Watch video for ${service.title}`} />
                                            </motion.a> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                className="accordion-content-img"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave para hover
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
              <div className="accordion-content-icons">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "start",
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
                        transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave
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
                        transition={{ duration: 0.3, ease: "easeOut" }} // Transición más suave
                      >
                        +
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      key="accordion-detailed-icons" // Clave única
                      className="accordion-content-icons-general"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={detailedIconsVariants} // Variantes para los iconos detallados
                    >
                      {service.icons.map((icon, i) => (
                        <motion.div
                          className="accordion-content-icons-text"
                          key={i}
                          variants={singleIconTextVariants} // Variantes para cada texto de icono
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

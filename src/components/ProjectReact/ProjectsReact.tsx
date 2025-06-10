import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import "./ProjectsReact.css";
import { InteractiveLinkButton } from "../InteractiveLinkButton/InteractiveLinkButton";

const projectImages = [
  "/project/project1.png",
  "/project/project2.png",
  // Agrega más imágenes si las tienes
];

const categories = [
  { name: "ALL PROJECTS", count: 12 },
  { name: "KITCHEN REMODELING", count: 3 },
  { name: "BATHROOM REMODELING", count: 3 },
  { name: "BASEMENT REMODELING", count: 1 },
  { name: "WINDOW & DOOR REPLACEMENT", count: 5 },
];

export const Projects: React.FC = () => {
  const [current, setCurrent] = useState(1); // Inicia en 1 para la primera imagen real
  const trackRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const imagesWithClones = [
    projectImages[projectImages.length - 1], // last as first clone
    ...projectImages,
    projectImages[0], // first as last clone
  ];

  // Función para calcular el ancho de la imagen dinámicamente y el gap
  const calculateSlideWidth = useCallback(() => {
    if (trackRef.current && trackRef.current.children.length > 1) {
      const firstImage = trackRef.current.children[1] as HTMLImageElement; // Acceder a la primera imagen real (segundo hijo)

      // Si la imagen no está cargada aún, reintenta
      if (firstImage.clientWidth === 0) {
        // Podrías añadir un pequeño retraso aquí o usar un onLoad en la imagen
        // para asegurar que ha cargado. Para este ejemplo, solo retorna.
        return;
      }

      let gapValue = 0;
      const computedTrackStyle = window.getComputedStyle(trackRef.current);
      const gapString = computedTrackStyle.gap || computedTrackStyle.columnGap;

      if (gapString && gapString.endsWith("px")) {
        gapValue = parseFloat(gapString);
      } else if (gapString && gapString.endsWith("rem")) {
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        gapValue = parseFloat(gapString) * rootFontSize;
      } else {
        gapValue = 10; // Fallback al valor que tienes en CSS por defecto (0.625rem = 10px)
      }

      // El ancho de una "slide" es el ancho de la imagen más el gap
      setImageWidth(firstImage.clientWidth + gapValue);
    }
  }, []);

  // Hook para observar el tamaño de la imagen y recalcular slideWidth
  useEffect(() => {
    // Ejecuta el cálculo inicialmente
    calculateSlideWidth();

    // Configura un ResizeObserver para re-calcular cuando el tamaño del track o sus hijos cambie
    const observer = new ResizeObserver((entries) => {
      // Solo recalcula si el track o la primera imagen real han cambiado de tamaño
      const trackEntry = entries.find(
        (entry) => entry.target === trackRef.current
      );
      const firstImageEntry =
        trackRef.current && trackRef.current.children.length > 1
          ? entries.find(
              (entry) => entry.target === trackRef.current?.children[1]
            )
          : undefined;
      if (trackEntry || firstImageEntry) {
        calculateSlideWidth();
      }
    });

    if (trackRef.current) {
      observer.observe(trackRef.current); // Observa el contenedor del track
      // También observa la primera imagen real, si existe, para detectar cambios en su ancho
      if (trackRef.current.children.length > 1) {
        observer.observe(trackRef.current.children[1]);
      }
    }

    return () => observer.disconnect(); // Limpiar el observador al desmontar
  }, [calculateSlideWidth]);

  // Actualiza la posición inicial del slider sin transición cuando imageWidth cambia
  // Esto asegura que el slider se posicione correctamente al cargar y al redimensionar
  useEffect(() => {
    if (trackRef.current && imageWidth > 0) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${
        current * imageWidth
      }px)`;
      // Forzar un reflow para asegurar que la transición 'none' se aplique
      void trackRef.current.offsetHeight; // Usar 'void' para indicar que no usamos el valor de retorno
    }
  }, [imageWidth]); // Dependencia: imageWidth

  // updateSlider ahora solo actualiza la posición del transform con o sin transición
  const updateSlider = useCallback(
    (index: number, animate = true) => {
      if (trackRef.current && imageWidth > 0) {
        trackRef.current.style.transition = animate
          ? "transform 0.8s ease-in-out"
          : "none";
        trackRef.current.style.transform = `translateX(-${
          index * imageWidth
        }px)`;
      }
    },
    [imageWidth]
  );

  const handleRight = () => {
    const nextIndex = current + 1;
    setCurrent(nextIndex);
    updateSlider(nextIndex);
  };

  const handleLeft = () => {
    const nextIndex = current - 1;
    setCurrent(nextIndex);
    updateSlider(nextIndex);
  };

  // Infinite loop effect
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (current === imagesWithClones.length - 1) {
        setCurrent(1);
        updateSlider(1, false);
      } else if (current === 0) {
        setCurrent(imagesWithClones.length - 2);
        updateSlider(imagesWithClones.length - 2, false);
      }
    };
    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        track.removeEventListener("transitionend", handleTransitionEnd);
      };
    }
  }, [current, imagesWithClones.length, updateSlider]);

  // --- Definición de las variantes de animación con Framer Motion ---

  const headerContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headerImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  const categoriesContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.7,
      },
    },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sliderContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.9 },
    },
  };

  const sliderButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };

  return (
    <motion.section
      className="projects-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Title and Introduction */}
      <div className="projects-header">
        <motion.div
          className="projects-intro"
          variants={headerContainerVariants}
        >
          <motion.h2 className="projects-title" variants={textItemVariants}>
            Our Projects.
          </motion.h2>
          <motion.p
            className="projects-description"
            variants={textItemVariants}
          >
            Explore some of our featured remodeling projects across Maryland.
            From kitchens and bathrooms to full home makeovers, we bring quality
            and creativity into every space.
          </motion.p>
        </motion.div>
        {/* <motion.img
                    src="/project/boton-rigth.png"
                    alt="See all projects"
                    className="projects-image"
                    variants={headerImageVariants}
                /> */}
        <InteractiveLinkButton
          href={""}
          className="projects-view-all-button" // Clase CSS para el estilo
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Categories List */}
        <motion.div
          className="project-categories"
          variants={categoriesContainerVariants}
        >
          <ul className="categories-list">
            {categories.map((cat) => (
              <motion.li
                className="category-item"
                key={cat.name}
                variants={categoryItemVariants}
                whileHover={{ scale: 1.05, color: "#000" }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name} <span className="category-count">{cat.count}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Featured Projects Slider */}
        <motion.div
          className="slider-container"
          variants={sliderContainerVariants}
        >
          <div
            className="slider-track"
            ref={trackRef}
            style={{ display: "flex" }}
          >
            {imagesWithClones.map((src, idx) => (
              <img
                key={idx}
                // Eliminar el ID fijo aquí. Usaremos el ref para el cálculo.
                // id={`slider-img-${idx}`}
                src={src}
                className="slider-img"
                alt={`Project ${idx}`}
                draggable={false}
                style={{ userSelect: "none" }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="slider-controls">
            <motion.img
              src="/project/boton-left.png"
              className="slider-btn left"
              alt="Previous"
              onClick={handleLeft}
              style={{ cursor: "pointer" }}
              variants={sliderButtonVariants}
              whileHover="hover"
              whileTap="tap"
            />
            <motion.img
              src="/project/boton-rigth-white.png"
              className="slider-btn right"
              alt="Next"
              onClick={handleRight}
              style={{ cursor: "pointer" }}
              variants={sliderButtonVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

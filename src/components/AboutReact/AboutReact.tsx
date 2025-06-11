import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Importar motion y useInView
import "./AboutReact.css";

const About: React.FC = () => {
    const cicleContainerRef = useRef<HTMLDivElement>(null);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const handleCicleClick = () => {
        if (cicleContainerRef.current) {
            cicleContainerRef.current.classList.toggle("swap");
        }
    };

    // --- Definición de las variantes de animación con Framer Motion ---

    // Variantes para el contenedor principal del header (título)
    const headerContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delayChildren: 0.3 
            }
        }
    };

    // Variantes para el título del header
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Variantes para el contenedor de círculos
    const cicleContainerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6 
            }
        }
    };

    // Variantes para el contenedor de texto principal
    const textContainerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delayChildren: 0.2, 
                delay: 0.8 
            }
        }
    };

    // Variantes para los elementos de texto individuales (h3 y p)
    const textContentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Variantes para el contenedor de imágenes
    const imagesContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
                delayChildren: 1.0 
            }
        }
    };

    // Variantes para cada imagen individual
    const imageVariants = (direction: 'left' | 'right' | 'bottom') => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'bottom' ? 50 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    });


    return (
        <motion.section
            className="about-section"
            ref={sectionRef} 
            initial="hidden" 
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="about-header">
                <motion.div
                    className="about-intro"
                    variants={headerContainerVariants} 
                >
                    <motion.h2 className="about-title" variants={titleVariants}>
                        About Bethelor.
                    </motion.h2>

                    {/*
                    <motion.p className="about-description" variants={textContentVariants}>
                        Explore some of our featured remodeling About across Maryland. From
                        kitchens and bathrooms to full home makeovers, we bring quality and
                        creativity into every space.
                    </motion.p>
                    */}
                </motion.div>
            </div>
            <div className="about-cicle-text">
                <motion.div
                    className="container-cicles"
                    id="cicleContainer"
                    ref={cicleContainerRef}
                    onClick={handleCicleClick}
                    variants={cicleContainerVariants} 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                >
                    
                    <div className="cicle-white">
                        <p>Done Projects</p>
                        <span>+12</span>
                    </div>
                    <div className="cicle-black">
                        <p>Done Projects</p>
                        <span>2023</span>
                    </div>
                </motion.div>

                <motion.div
                    className="container-text"
                    variants={textContainerVariants} 
                >
                    <motion.h3 variants={textContentVariants}>
                        Home Remodeling with Integrity, Craftsmanship, and Vision.
                    </motion.h3>
                    <motion.p variants={textContentVariants}>
                        At Bethelor, we specialize in home remodeling and improvement services
                        across Maryland. From kitchens and bathrooms to complete home
                        renovations, we bring precision, passion, and personalized attention to
                        every project—big or small.
                        <br />
                        <br />
                        Founded by skilled professionals with years of hands-on experience, Bethelor
                        is built on trust, hard work, and a clear commitment to quality. We work
                        closely with homeowners to transform their spaces with smart design, durable
                        materials, and reliable results.
                        <br />
                        <br />
                        Our team takes pride not only in what we build—but in how we make our clients
                        feel throughout the process.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                className="about-images"
                variants={imagesContainerVariants} 
            >
                
                <motion.img
                    src="/about/about1.png" 
                    alt="About image 1"
                    className="about-image1"
                    variants={imageVariants('left')} 
                />
                <motion.img
                    src="/about/about2.png" 
                    alt="About image 2"
                    className="about-image2"
                    variants={imageVariants('bottom')} 
                />
                <motion.img
                    src="/about/about3.png" 
                    alt="About image 3"
                    className="about-image3"
                    variants={imageVariants('right')} 
                />
            </motion.div>
        </motion.section>
    );
};

export default About;
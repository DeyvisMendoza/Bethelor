import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./BrandsReact.css";

import {brandItemsData} from "../../lib/dataBrands"

const Brands: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

    // --- Definición de las variantes de animación con Framer Motion ---

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const brandLogoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const brandDetailsContainerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const brandItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const imageAndTitleVariants = {
        initial: { opacity: 1, y: 0, scale: 1 },
        hovered: { opacity: 0, y: -20, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
    };

 
    const descriptionVariants = {
        initial: { opacity: 0, y: 100 }, // Comienza más abajo, casi al fondo del contenedor de 300px
        hovered: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
    };

    const titleHoverMoveVariants = {
        initial: { y: 0 },
        hovered: { y: -70, transition: { duration: 0.3, ease: "easeOut" } }, 
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
                staggerChildren: 0.2
            }
        }
    };

    const trustedBrandsTitleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const trustedBrandsLogoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
    };


    return (
        <motion.section
            className="brands-section"
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <motion.div className="brand-logo" variants={brandLogoVariants}>
                <img src="/brands/brands0.png" alt="Bethelor Logo" />
            </motion.div>

            <motion.div
                className="brand-details"
                variants={brandDetailsContainerVariants}
            >
                {brandItemsData.map((item) => (
                    <motion.div
                        className="brand-item"
                        key={item.id}
                        variants={brandItemVariants}
                        onMouseEnter={() => setHoveredItemId(item.id)}
                        onMouseLeave={() => setHoveredItemId(null)}
                    >
                        <motion.img
                            src={item.imgSrc}
                            alt={item.title}
                            animate={hoveredItemId === item.id ? "hovered" : "initial"}
                            variants={imageAndTitleVariants}
                        />
                        <motion.div className="brand-description">
                            <motion.h3
                                className="brand-title"
                                animate={hoveredItemId === item.id ? "hovered" : "initial"}
                                variants={titleHoverMoveVariants}
                                layout 
                            >
                                {item.title}
                            </motion.h3>
                           
                            <motion.p
                                className="brand-text"
                                animate={hoveredItemId === item.id ? "hovered" : "initial"}
                                variants={descriptionVariants}
                            >
                                {item.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="trusted-brands"
                variants={trustedBrandsVariants}
            >
                <motion.h3 className="trusted-brands-title" variants={trustedBrandsTitleVariants}>
                    Brands We Trust for Remodeling in Maryland
                </motion.h3>
                <motion.div className="trusted-brands-logo" variants={trustedBrandsLogoVariants}>
                    <img src="/brands/brands5.svg" alt="Trusted Brands Logos" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Brands;
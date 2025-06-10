import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import { BotonHeader } from "../BotonHeader/BotonHeader";

export const Header = () => {
    // refs para animación hover
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;
        const text = textRef.current;
        if (!wrapper || !container || !text) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            container.style.transform = `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${y * 0.05}px))`;
            text.style.transform = `translate(calc(-28% + ${x * 0.6}px), calc(-50% + ${y * 0.6}px))`;
        };
        const handleMouseLeave = () => {
            container.style.transform = `translate(-50%, -50%)`;
            text.style.transform = `translate(-28%, -50%)`;
        };

        wrapper.addEventListener("mousemove", handleMouseMove);
        wrapper.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            wrapper.removeEventListener("mousemove", handleMouseMove);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="left-header">
                    {/* Botón hamburguesa en móvil */}
                    <div className="menu-mobile-button" onClick={() => setMobileMenuOpen(prev => !prev)}>
                        <img src="/header/menu-icon.png" alt="menu" width={32} height={32} />
                    </div>

                    {/* Botón con animación hover */}
                    <div className="hover-wrapper" ref={wrapperRef}>
                        <div className="hover-container" ref={containerRef}>
                            <p className="hover-text" ref={textRef}>MENU</p>
                        </div>
                    </div>

                    <div className="containerLogo">
                        <h1 className="name-logo">BETHELOR</h1>
                        <p className="texto-alternativo">Home Construction & Remodeling</p>
                    </div>
                </div>

                {/* Opciones de contacto (escondidas en móvil) */}
                <div className="contact-info">
                    <div className="item"><img src="/header/location.png" alt="" className="invertible-img" /><p>59 Serpent Cir</p></div>
                    <div className="item"><img src="/header/phone.png" alt="" className="invertible-img" /><p>+1 240 618 7916</p></div>
                    <div className="item"><img src="/header/send.png" alt="" className="invertible-img" /><p>Contact@bethelor.com</p></div>
                    <div className="container-request"><BotonHeader /></div>
                </div>
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="mobile-menu"
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            <li>Inicio</li>
                            <li>Servicios</li>
                            <li>Proyectos</li>
                            <li>Contacto</li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

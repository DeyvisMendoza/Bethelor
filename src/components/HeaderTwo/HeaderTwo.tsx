import "./HeaderTwo.css";
import { BotonHeader } from "../BotonHeader/BotonHeader";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";



function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  
  return (
    <AnimatePresence>
    <header className={`header-container ${menuOpen ? "open" : ""}`}>
      <div className="header-top-bar">
        <div className="header-top-content">
          <div className="contact-info">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/header/location.png" alt="Location" className="invertible-img" />
              <p>59 Serpent Cir, Roadside, MO 21337</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/header/phone.png" alt="Phone" className="invertible-img" />
              <p>+1 240 618 7916</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/header/send.png" alt="Email" className="invertible-img" />
              <p>Contact@bethelor.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className= {`header-bottom-bar ${menuOpen ? "open" : ""}`}>
        <div className="header-bottom-content">
          <div className="logo">
            <div className="logo-text">
            <a href="">
              <img src="/footer/logo.png" alt="menu"/>
            </a>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
            {menuOpen && (
              <motion.nav
                className={`main-nav ${menuOpen ? "open" : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/about">ABOUT US</a></li>
                  <li><a href="/services">SERVICES</a></li>
                  <li><a href="/projects">PROJECTS</a></li>
                  <li><a href="/blogs">BLOGS</a></li>
                  <li><a href="/contact">CONTACT</a></li>
                  <div className="container-request1">
                    <BotonHeader />
                  </div>
                </ul>
              </motion.nav>
            )}
          <div className="container-request">
            <BotonHeader />
          </div>
        </div>
      </div>
    </header>
    </AnimatePresence>
  );
}

export default Header;
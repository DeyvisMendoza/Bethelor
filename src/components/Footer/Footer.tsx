import React from "react";
import "./Footer.css";
import { BotonFooter } from "../BotonFooter/BotonFooter";

// Si BotonFooter es un componente React, importa así:

// Si las imágenes están en public/icons, usa process.env.PUBLIC_URL o importa directamente si están en src/assets
const socialIcons = [
    { href: "#facebook", src: "/footer/facebook.png", alt: "Facebook" },
    { href: "#twitter", src: "/footer/twitter.png", alt: "Twitter" },
    { href: "#pinterest", src: "/footer/pinterest.png", alt: "Pinterest" },
    { href: "#telegram", src: "/footer/telegram.png", alt: "Telegram" },
];

const Footer: React.FC = () => (
    <>
        <style>
            {`
                .name-logo {
                    font-family: "Bebas Neue", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 2rem;
                }
                .texto-alternativo {
                    display: block;
                    font-size: 10px;
                    margin-top: -15px;
                    margin-bottom: 25px;
                }
            `}
        </style>
        <footer className="footer-bg footer-text footer-py footer-px">
            <div className="footer-container footer-grid footer-gap">
                {/* Column 1: Logo and Contact */}
                <div className="footer-logo">
                    <h3 className="name-logo">BETHELOR</h3>
                    <p className="texto-alternativo">Home Construction & Remodeling</p>
                    <div className="footer-contact-item">
                        <span className="footer-contact-label">Address</span>
                        <p className="footer-contact-info">59 Serpens Ct, Rosedale, MD 21237</p>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-label">Mail us:</span>
                        <p className="footer-contact-info">Contact@bethelor.com</p>
                    </div>
                    <div className="footer-contact-item">
                        <span className="footer-contact-label">Call us:</span>
                        <p className="footer-contact-info">+1 240 618 7916</p>
                    </div>
                </div>

                {/* Column 2: Explore Our Projects */}
                <div className="footer-col">
                    <h3 className="footer-col-title">Explore Our Projects</h3>
                    <ul className="footer-list">
                        <li><a href="/projects" className="footer-link-hover">All Projects</a></li>
                        <li><a href="/projects/kitchens" className="footer-link-hover">Kitchens</a></li>
                        <li><a href="/projects/bathrooms" className="footer-link-hover">Bathrooms</a></li>
                        <li><a href="/projects/painting" className="footer-link-hover">Interior & Exterior Painting</a></li>
                        <li><a href="/projects/additions" className="footer-link-hover">Home Additions</a></li>
                        <li><a href="/projects/repair" className="footer-link-hover">Home Repair & Improvement</a></li>
                    </ul>
                </div>

                {/* Column 3: Links */}
                <div className="footer-col">
                    <h3 className="footer-col-title">Links</h3>
                    <ul className="footer-list">
                        <li><a href="/" className="footer-link-hover">Home</a></li>
                        <li><a href="/services" className="footer-link-hover">Services</a></li>
                        <li><a href="/about" className="footer-link-hover">About Us</a></li>
                        <li><a href="/contact" className="footer-link-hover">Contact</a></li>
                        <li><a href="/blogs" className="footer-link-hover">Blogs</a></li>
                        <li><a href="/privacy" className="footer-link-hover">Privacy Policy</a></li>
                        <li><a href="/terms" className="footer-link-hover">Terms of Use</a></li>
                    </ul>
                </div>

                {/* Column 4: CTA and Social Links */}
                <div className="footer-col">
                    <p className="footer-cta-desc">
                        Ready to remodel your house in Maryland? Contact Bethelor today for a
                        free quote and expert guidance from start to finish.
                    </p>
                    <BotonFooter />
                    <div className="footer-socials">
                        {socialIcons.map((icon) => (
                            <a href={icon.href} className="footer-social-link" key={icon.alt}>
                                <img src={icon.src} alt={icon.alt} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>Copyright © 2025 Mako by CeeaThemes. All Rights Reserved.</p>
                <div className="footer-bottom-links">
                    <a href="/terms" className="footer-link-hover">
                        Terms of Use / Privacy Environmental Policy
                    </a>
                </div>
            </div>
            </footer>
        {/* </footer> */}
    </>
);

export default Footer;

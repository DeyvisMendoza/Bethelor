import "./HeaderBlack.css";
import { BotonHeader } from "../BotonHeader/BotonHeader";

function Header() {
  return (
    <header className="header-container">
      <div className="header-top-bar">
        <div className="header-top-content">
          <div className="contact-info">
            <div className="flex items-center space-x-2 gap-2 cursor-pointer">
              <img
                src="public/header/location.png"
                alt=""
                className="invertible-img"
              />
              <p>59 Serpent Cir, Roadside, MO 21337</p>
            </div>
            <div className="flex items-center space-x-2 gap-2 cursor-pointer">
              <img
                src="public/header/phone.png"
                alt=""
                className="invertible-img"
              />
              <p>+1 240 618 7916</p>
            </div>
            <div className="flex items-center space-x-2 gap-2 cursor-pointer">
              <img
                src="public/header/send.png"
                alt=""
                className="invertible-img"
              />
              <p>Contact@bethelor.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-bar">
        <div className="header-bottom-content">
          <div className="logo">
            <div className="logo-text">
              <h1>BETHELHOR</h1>
              <p>Home Construction & Remodeling</p>
            </div>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about-us">ABOUT US</a>
              </li>
              <li>
                <a href="/services">SERVICES</a>
              </li>
              <li>
                <a href="/projects">PROJECTS</a>
              </li>
              <li>
                <a href="/blogs">BLOGS</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="container-request">
            <BotonHeader />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
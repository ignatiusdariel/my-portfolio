import { useEffect, useState } from "react";
import logo from "@assets/porto-logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(
          (e.currentTarget as HTMLAnchorElement).getAttribute("href")!
        );
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false); // close menu on link click
        }
      });
    });
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="classified-nav">
        {/* Left ID Block */}
        <div className="flex items-center pb-1">
          <img
            src={logo}
            alt="My Logo"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain mr-2"
          />
          <div className="nav-id">
            <span className="codename">IGNATIUS DARIEL</span>
            <span className="clearance">Clearance Level: FRONT-END DEV</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`nav-mobile-overlay ${menuOpen ? "visible" : ""}`}>
        <ul className="nav-mobile-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
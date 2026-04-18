import { useEffect } from "react";
import logo from "@assets/porto-logo.png";

const Navigation = () => {
  // Smooth scroll for anchor links
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
        }
      });
    });
  }, []);

  return (
    <nav className="classified-nav">
      {/* Left ID Block */}
      <div className="flex items-center pb-1">
        <img
          src={logo}
          alt="Court Replay Logo"
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain mr-2"
        />
        <div className="nav-id">
          <span className="codename">IGNATIUS DARIEL</span>
          <span className="clearance">Clearance Level: FRONT-END DEV</span>
        </div>
      </div>

      {/* Right Links */}
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
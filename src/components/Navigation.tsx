import { useEffect } from "react";

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
      <div className="nav-id">
        <span className="codename">IGNATIUS DARIEL</span>
        <span className="clearance">Clearance Level: DEV-ALPHA</span>
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
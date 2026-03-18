import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Code, Smartphone, Globe } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-eyebrow">
        Dossier No. 001 — Developer Portfolio
      </div>

      <h1 className="hero-title">
        Full
        <br />
        <span className="acc">Stack</span>
        <br />
        Developer
      </h1>

      <div className="hero-role">
        // Architect of digital noir —
      </div>

      <div className="term">
        <span className="p">$</span>
        <span className="c">whoami</span>
      </div>

      <div className="term">
        <span className="p">→</span>
        <span style={{ color: "var(--amber)" }}>j.noir</span>
        <span className="c">&nbsp;| dev | builder | problem_solver</span>
      </div>

      <div className="term">
        <span className="p">$</span>
        <span className="c">status --current</span>
      </div>

      <div className="term">
        <span className="p">→</span>
        <span style={{ color: "var(--green-code)" }}>
          AVAILABLE FOR NEW MISSIONS
        </span>
      </div>

      <div className="hero-stack">
        <div className="si">React</div>
        <div className="si">Node.js</div>
        <div className="si">TypeScript</div>
        <div className="si">Python</div>
        <div className="si">PostgreSQL</div>
        <div className="si">Docker</div>
      </div>

      <div
        className="hero-scroll-hint"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        style={{ cursor: "pointer" }}
      >
        <div className="scroll-bar" />
        Scroll to reveal
      </div>
    </section>
  );
};

export default Hero;
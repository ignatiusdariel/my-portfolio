const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-eyebrow">
        Dossier No. 001 — Developer Portfolio
      </div>

      <h1 className="hero-title">
        <span className="acc">Software</span>
        <br />
        Engineer
      </h1>

      <div className="hero-role">
        // Portfolio of a {" "}
        <span style={{ color: "white" ,background: "var(--amber-bright)" }}>Front-End Developer</span>
        {" "} —
      </div>

      <div className="term">
        <span className="p">$</span>
        <span className="c">whoami</span>
      </div>

      <div className="term">
        <span className="p">→</span>
        <span style={{ color: "var(--amber)" }}>ign.dariel</span>
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
        <div className="si">Flutter</div>
        <div className="si">Kotlin</div>
        <div className="si">React</div>
        <div className="si">Node.js</div>
        <div className="si">TypeScript</div>
        <div className="si">Git</div>
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
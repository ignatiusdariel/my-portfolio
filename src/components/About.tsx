const About = () => {
  return (
    <>
      <div>

        {/* Section Divider */}
        <div className="divider">— Frame 002 · Subject Profile —</div>

        <section className="about-section">
          {/* Left: Dossier Card */}
          <div className="dossier-card">
            <div className="id-photo">
              <span>◉</span>
            </div>

            <div className="df">
              <div className="df-l">Agent ID</div>
              <div className="df-v">IGNATIUS — #DEV-0042</div>
            </div>

            <div className="df">
              <div className="df-l">Specialization</div>
              <div className="df-v">Full Stack Engineering</div>
            </div>

            <div className="df">
              <div className="df-l">Base of Operations</div>
              <div className="df-v">Singapore</div>
            </div>

            <div className="df">
              <div className="df-l">Years Active</div>
              <div className="df-v">5+ Years Field Experience</div>
            </div>

            <div className="df">
              <div className="df-l">Status</div>
              <div className="df-v" style={{ color: "var(--green-code)" }}>
                ● AVAILABLE
              </div>
            </div>

            <div className="stamp">
              <span>VERIFIED OPERATIVE</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <h2>
              The <span>Operative</span>
              <br />
              Behind the Code
            </h2>

            <p>
              I build systems that work in the shadows —{" "}
              <strong>
                clean architecture, ruthless efficiency, zero tolerance for bloat.
              </strong>{" "}
              My code doesn't just run; it endures.
            </p>

            <p>
              Five years navigating the labyrinth of full-stack development.
              Shipped products used by thousands, architected APIs handling
              millions of requests, survived more legacy codebases than any person
              should.
            </p>

            <p>
              The best software is invisible — it simply works, letting people do
              what they came to do.{" "}
              <strong>That's the mission. Every time.</strong>
            </p>

            {/* Skill Bars */}
            <div className="skill-bars">
              <div className="skill-row">
                <span className="skill-name">Frontend</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: "92%" }} />
                </div>
                <span className="skill-pct">92%</span>
              </div>

              <div className="skill-row">
                <span className="skill-name">Backend</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: "88%" }} />
                </div>
                <span className="skill-pct">88%</span>
              </div>

              <div className="skill-row">
                <span className="skill-name">DevOps</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: "74%" }} />
                </div>
                <span className="skill-pct">74%</span>
              </div>

              <div className="skill-row">
                <span className="skill-name">Databases</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: "83%" }} />
                </div>
                <span className="skill-pct">83%</span>
              </div>

              <div className="skill-row">
                <span className="skill-name">System Design</span>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: "79%" }} />
                </div>
                <span className="skill-pct">79%</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
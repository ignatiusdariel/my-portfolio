import React from "react";
import { FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiTypescript, SiNodedotjs } from "react-icons/si";

const About = () => {
  return (
    <div id="about">
      {/* Section Divider */}
      <div className="divider">— Page 002 · Subject Profile —</div>

      <section className="about-section">
        {/* Left: Dossier Card */}
        <div className="dossier-card">
          <div className="dossier-card-inner">
            {/* Photo */}
            <div className="id-photo">
              <span>◉</span>
            </div>

            {/* Fields */}
            <div className="dossier-fields">
              <div className="df">
                <div className="df-l">Agent ID</div>
                <div className="df-v">IGNATIUS — #DEV-0042</div>
              </div>
              <div className="df">
                <div className="df-l">Specialization</div>
                <div className="df-v">Mobile Application Engineering</div>
              </div>
              <div className="df">
                <div className="df-l">Base of Operations</div>
                <div className="df-v">Indonesia</div>
              </div>
              <div className="df">
                <div className="df-l">Years Active</div>
                <div className="df-v">2+ Years Field Experience</div>
              </div>
              <div className="df">
                <div className="df-l">Status</div>
                <div className="df-v" style={{ color: "var(--green-code)" }}>
                  ● AVAILABLE
                </div>
              </div>
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
            I build reliable, user-focused software with a strong emphasis on{" "}
            <strong>clean architecture, performance, and maintainable systems</strong>.
            My experience spans <strong>mobile and web application development</strong>,
            where I translate product requirements into scalable solutions that balance
            thoughtful engineering with practical business needs.
          </p>

          <p>
            With a front-end engineering focus, I specialize in developing{" "}
            <strong>responsive interfaces, scalable application structures, and efficient data flows</strong>.
            I contribute across the product lifecycle — from feature development and system
            improvements to <strong>performance optimization and application deployment</strong> —
            delivering stable, polished applications that adapt to real-world product demands
            in fast-paced startup environments.
          </p>

          {/* Skill Reel */}
          <div className="skill-reel-wrap">
            <div className="skill-scroll">
              {[...Array(2)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <div className="skill-item"><SiFlutter className="skill-icon" /><span>Flutter</span></div>
                  <div className="skill-item"><SiKotlin className="skill-icon" /><span>Kotlin</span></div>
                  <div className="skill-item"><FaReact className="skill-icon" /><span>React</span></div>
                  <div className="skill-item"><SiTypescript className="skill-icon" /><span>TypeScript</span></div>
                  <div className="skill-item"><SiNodedotjs className="skill-icon" /><span>Node.js</span></div>
                  <div className="skill-item"><FaGitAlt className="skill-icon" /><span>Git</span></div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
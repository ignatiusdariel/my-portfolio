const Skills = () => {
  return (
    <>
      {/* Section Divider */}
      <div className="divider">— Page 004 · Operational Record —</div>

      <section id="resume">
        <h2>
          The <span>Record</span>
        </h2>

        <div className="resume-grid">
          {/* LEFT COLUMN */}
          <div className="resume-col">
            <h3>// Experience</h3>

            <div className="ti">
              <div className="ti-date">2022 — Present</div>
              <div className="ti-role">Senior Full Stack Engineer</div>
              <div className="ti-place">Acme Tech Corp</div>
              <div className="ti-desc">
                Led architecture of microservices platform. Reduced API response
                time by 60%. Managed team of 4 engineers across 3 time zones.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2020 — 2022</div>
              <div className="ti-role">Frontend Developer</div>
              <div className="ti-place">Dark Horse Studio</div>
              <div className="ti-desc">
                Built React dashboards for fintech clients. Shipped 12+ features
                per quarter. Introduced TypeScript migration reducing bugs by 40%.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2019 — 2020</div>
              <div className="ti-role">Junior Developer</div>
              <div className="ti-place">Freelance / Agency Work</div>
              <div className="ti-desc">
                Delivered 20+ client projects across full stack. Learned fast,
                broke things faster, fixed everything.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-col">
            <h3>// Education</h3>

            <div className="ti">
              <div className="ti-date">2015 — 2019</div>
              <div className="ti-role">B.Sc. Computer Science</div>
              <div className="ti-place">University of Somewhere</div>
              <div className="ti-desc">
                Graduated with Honours. Thesis: Distributed systems optimization.
                Final year project awarded Best in Department.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2021</div>
              <div className="ti-role">AWS Solutions Architect</div>
              <div className="ti-place">Amazon Web Services</div>
              <div className="ti-desc">
                Certified in cloud architecture, serverless patterns, and
                infrastructure as code.
              </div>
            </div>

            <h3 style={{ marginTop: "36px" }}>// Arsenal</h3>

            <div className="tech-grid">
              {[
                "React","Next.js","TypeScript",
                "Node.js","Python","PostgreSQL",
                "Redis","Docker","AWS",
                "GraphQL","Git","Linux"
              ].map((tech, i) => (
                <div key={i} className="tech-item">{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
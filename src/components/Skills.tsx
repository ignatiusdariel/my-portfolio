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
              <div className="ti-date">2024 — Present</div>
              <div className="ti-role">Mobile Engineer</div>
              <div className="ti-place">UR (PT. Rahmat Tuhan Lestari)</div>
              <div className="ti-desc">
                Led the full mobile application lifecycle — from concept, development, deployment and maintenance — for multiple projects, contributed to <strong> newer web front-ends</strong>.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2025 — Present</div>
              <div className="ti-role">Website Developer</div>
              <div className="ti-place">Freelance</div>
              <div className="ti-desc">
                Built websites for local businesses, improving online presence and brand visibility.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2023</div>
              <div className="ti-role">Mobile Developer (Project)</div>
              <div className="ti-place">Bangkit Google Academy - Konseria App</div>
              <div className="ti-desc">
                Worked on the Android front-end using Jetpack Compose (Kotlin), designing the app's concept, theme, UI/UX, and implementing core features for secure ticket booking and fraud prevention.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-col">
            <h3>// Education</h3>

            <div className="ti">
              <div className="ti-date">2020 — 2024</div>
              <div className="ti-role">B.Sc. Computer Science</div>
              <div className="ti-place">Institut Teknologi Harapan Bangsa</div>
              <div className="ti-desc">
                Pursuing a Bachelor of Computer Science in Information Technology. Focused on software development, mobile & web applications, and system optimization.
              </div>
            </div>

            <div className="ti">
              <div className="ti-date">2021</div>
              <div className="ti-role">AWS Academy Graduate</div>
              <div className="ti-place">Amazon Web Services</div>
              <div className="ti-desc">
                Completed the AWS Academy Cloud Foundations course, earning the AWS Academy Graduate badge. Gained skill in cloud architecture, serverless patterns, and infrastructure.
              </div>
            </div>

            <h3 style={{ marginTop: "36px" }}>// Arsenal</h3>

            <div className="tech-grid">
              {[
                "Flutter", "Kotlin", "IOS",
                "React", "Node.js", "TypeScript",
                "Android", "Git", "Java",
                "Golang", "Python", "PHP"
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
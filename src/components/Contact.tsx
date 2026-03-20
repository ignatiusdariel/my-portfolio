import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "hello@yourmail.com",
    href: "mailto:hello@yourmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
    icon: "linkedin",
  },
];

const ICON_MAP: any = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [posterVisible, setPosterVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPosterVisible(true);
          setTimeout(() => setFormVisible(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact ">
      <div className="sectionLabel">— Page 005 · Transmission End —</div>

      <div className="layout">
        <div className={posterVisible ? "posterWrap posterVisible" : "posterWrap"}>
          <WantedPoster />
        </div>

        <ContactForm visible={formVisible} />
      </div>
    </section>
  );
};

export default Contact;

/* ================= POSTER ================= */

const WantedPoster = () => {
  return (
    <div className="poster">
      <div className="posterTexture" />

      <div className="posterInner">
        <p className="posterBadge">✦ WANTED ✦</p>
        <p className="posterSubBadge">BY THE ORDER OF THE DARK WEB</p>

        <div className="posterPhoto">
          <div className="posterSilhouette">
            <div className="silHead" />
            <div className="silBody" />
          </div>
          <div className="posterPhotoLabel">SUBJECT UNKNOWN</div>
        </div>

        <h2 className="posterName">
          Let's <span className="posterAccent">Build</span>
          <br />
          Something
          <br />
          Dark.
        </h2>

        <div className="posterDivider">— ✦ —</div>

        <p className="posterDesc">
          Full Stack Developer
          <br />
          <span className="posterDescSub">
            Last seen shipping clean code at midnight
          </span>
        </p>

        <div className="posterReward">
          <span className="rewardLabel">REWARD</span>
          <span className="rewardAmt">A Great Product</span>
        </div>

        <div className="posterLinks">
          {CONTACT_LINKS.map(({ label, value, href, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="posterLink"
              >
                <span className="posterLinkIcon">
                  <Icon className="icon" />
                </span>
                <span className="posterLinkText">{value}</span>
              </a>
            );
          })}
        </div>

        <p className="posterFooter">DEAD OR ALIVE — PREFERABLY HIRED</p>
      </div>

      <div className="pin pinTL" />
      <div className="pin pinTR" />
      <div className="pin pinBL" />
      <div className="pin pinBR" />
    </div>
  );
};

/* ================= FORM ================= */

const ContactForm = ({ visible }: { visible: boolean }) => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    setTimeout(() => {
      setStatus("success");
    }, 1400);
  };

  return (
    <div className={visible ? "formPanel formVisible" : "formPanel"}>
      <p className="formEyebrow">// Send a Direct Transmission</p>

      {status === "success" ? (
        <div className="successMsg">
          <span className="successIcon">✦</span>
          <p>
            Transmission received.
            <br />
            I'll respond within 24 hours.
          </p>
          <button className="resetBtn" onClick={() => setStatus("idle")}>
            Send another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="row">
            <div className="field">
              <label className="label">Name</label>
              <input className="input" required />
            </div>

            <div className="field">
              <label className="label">Email</label>
              <input type="email" className="input" required />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <textarea className="textarea" rows={5} required />
          </div>

          {error && <p className="errorMsg">{error}</p>}

          <button type="submit" className="submitBtn" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <span className="spinner" />
                Transmitting...
              </>
            ) : (
              <>
                Send Transmission
                <span className="arrow">→</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
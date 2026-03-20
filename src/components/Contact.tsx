import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "ignatiusworkemail@gmail.com",
    href: "mailto:ignatiusworkemail@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/ignatiusdariel",
    href: "https://github.com/ignatiusdariel",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ignatius-wirawan",
    href: "https://www.linkedin.com/in/ignatius-wirawan/",
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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const EMAILJS_SERVICE_ID = 'service_h0ugs88';
  const EMAILJS_TEMPLATE_ID = 'template_hi1h7jf';
  const EMAILJS_PUBLIC_KEY = '7gDYlP36yAWUCfwrA';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic guard — adjust field names to whatever your state uses
    if (!form.name?.trim() || !form.email?.trim() || !form.message?.trim()) {
      setError('All fields are required.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'ignatiusworkemail@gmail.com',
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('success');
      // reset form fields — adapt to your state shape
      setForm({ name: '', email: '', message: '' });

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setError('Transmission failed. Please try again or email me directly.');
    }
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
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>

            <div className="field">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="textarea"
              rows={5}
              required
            />
          </div>

          {error && <p className="errorMsg">{error}</p>}

          <button type="submit" className="submitBtn" disabled={status === "sending"}>
            {status === "sending" ? (
              <><span className="spinner" />Transmitting...</>
            ) : (
              <>Send Transmission <span className="arrow">→</span></>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
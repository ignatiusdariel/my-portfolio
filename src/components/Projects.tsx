import { useEffect, useRef, useState } from 'react';
import { Project, PROJECTS } from '@/data/data';
import CaseBoard from './CaseBoard';

const SPROCKET_COUNT = 17;

// ── Sprocket row ────────────────────────────────────────────
function SprocketRow() {
  return (
    <div className={"sprRow"}>
      {Array.from({ length: SPROCKET_COUNT }).map((_, i) => (
        <div key={i} className={"sprH"} />
      ))}
    </div>
  );
}

// ── Single film cell ────────────────────────────────────────
function FilmCell({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <div className={"frameUnit"}>
      <SprocketRow />
      <div
        className={"cell"}
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        aria-label={`Open case file: ${project.title}`}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(project); }}
      >
        <span className={"cellNum"}>{project.num} ▲</span>
        <span className={"cellExp"}>ISO 400</span>

        {/* Default bg */}
        <div className={"cellBg"}>
          <span className={"projIcon"}>⬡</span>
        </div>

        {/* Code preview on hover */}
        <div className={"codePreview"}>
          <pre className={"pre"}>{project.code}</pre>
        </div>

        {/* Overlay */}
        <div className={"cellOverlay"}>
          <span className={"cellTitle"}>{project.title}</span>
          <div className={"cellTags"}>
            {project.tags.map(tag => (
              <span key={tag} className={"cellTag"}>{tag}</span>
            ))}
          </div>
          <span className={"openHint"}>// click to open case file</span>
        </div>
      </div>
      <SprocketRow />
    </div>
  );
}

// ── Phase type ──────────────────────────────────────────────
type Phase = 'entering' | 'open' | 'exiting';

// ── Film Reel section ───────────────────────────────────────
const DOUBLED = [...PROJECTS, ...PROJECTS];

export default function FilmReel() {
  const headRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<Project | null>(null);
  const [phase, setPhase] = useState<Phase>('entering');
  const [paused, setPaused] = useState(false);

  // Scroll reveal for header
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Pause reel animation while case board is open
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = paused ? 'paused' : 'running';
    }
  }, [paused]);

  // Open a case
  const openCase = (project: Project) => {
    setSelected(project);
    setPhase('entering');
    setPaused(true);
    // tiny delay so overlay mounts, then transition to 'open'
    requestAnimationFrame(() => {
      setTimeout(() => setPhase('open'), 30);
    });
    document.body.style.overflow = 'hidden';
  };

  // Close the case
  const closeCase = () => {
    setPhase('exiting');
    setTimeout(() => {
      setSelected(null);
      setPhase('entering');
      setPaused(false);
      document.body.style.overflow = '';
    }, 400);
  };

  return (
    <>
      {/* Section Divider */}
      <div className="divider">— Page 003 · Reel of Work —</div>

      <section id="work" className={"section"}>
        <div ref={headRef} className={`projects-head`}>
          <h2 className={"heading"}>List of projects</h2>
          <p className={"sub"}>// Click any frame to open the case file</p>
        </div>

        <div className={"reelWrap"}>
          <div ref={trackRef} className={"reelTrack"}>
            {DOUBLED.map((project, i) => (
              <div key={i} className={"frameGroup"}>
                <FilmCell project={project} onOpen={openCase} />
                <div className={"frameSep"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case board portal */}
      {selected && (
        <CaseBoard
          project={selected}
          onClose={closeCase}
          phase={phase}
        />
      )}
    </>
  );
}

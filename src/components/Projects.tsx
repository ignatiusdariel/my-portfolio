import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project, PROJECTS } from '@/data/data';
import CaseBoard from './CaseBoard';

const SPROCKET_COUNT = 17;

function SprocketRow() {
  return (
    <div className="sprRow">
      {Array.from({ length: SPROCKET_COUNT }).map((_, i) => (
        <div key={i} className="sprH" />
      ))}
    </div>
  );
}

function FilmCell({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <div className="frameUnit">
      <SprocketRow />
      <div
        className="cell"
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        aria-label={`Open case file: ${project.title}`}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(project); }}
      >
        <span className="cellNum">{project.num} ▲</span>
        <span className="cellExp">ISO 400</span>

        {/* ── Project image fills the cell ── */}
        <div className="cellImg">
          <img
            src={project.previewUrl}
            alt={project.title}
            loading="lazy"
          />
        </div>

        <div className="cellOverlay">
          <span className="cellTitle">{project.title}</span>
          <div className="cellTags">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="cellTag">{tag}</span>
            ))}
          </div>
          <span className="openHint">// click to open case file</span>
        </div>
      </div>
      <SprocketRow />
    </div>
  );
}

type Phase = 'entering' | 'open' | 'exiting';
const DOUBLED = [...PROJECTS, ...PROJECTS];

export default function FilmReel() {
  const navigate = useNavigate();
  const headRef  = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<Project | null>(null);
  const [phase,    setPhase]    = useState<Phase>('entering');

  // ── animation offset tracking ────────────────────────────
  const animPaused    = useRef(false);
  const currentOffset = useRef(0);  // px translated so far
  const rafId         = useRef<number>(0);
  const lastTime      = useRef<number>(0);
  const SPEED         = 0.05; // px per ms at 1× — adjust to taste

  // drag state
  const isDragging   = useRef(false);
  const dragStartX   = useRef(0);
  const dragStartOff = useRef(0);

  // track total width of one set (half of doubled)
  const getHalfWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 2;
  }, []);

  const applyOffset = (offset: number) => {
    const half = getHalfWidth();
    if (half === 0) return;
    // wrap so it loops seamlessly
    const wrapped = ((offset % half) + half) % half;
    currentOffset.current = wrapped;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${wrapped}px)`;
    }
  };

  // animation loop
  const animate = useCallback((time: number) => {
    if (lastTime.current) {
      const delta = time - lastTime.current;
      if (!animPaused.current && !isDragging.current) {
        applyOffset(currentOffset.current + SPEED * delta);
      }
    }
    lastTime.current = time;
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [animate]);

  // scroll reveal
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

  // ── drag handlers ────────────────────────────────────────
  const onDragStart = (clientX: number) => {
    isDragging.current = true;
    dragStartX.current   = clientX;
    dragStartOff.current = currentOffset.current;
    if (wrapRef.current) wrapRef.current.style.cursor = 'grabbing';
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - clientX; // drag left = scroll forward
    applyOffset(dragStartOff.current + delta);
  };

  const onDragEnd = () => {
    isDragging.current = false;
    if (wrapRef.current) wrapRef.current.style.cursor = 'grab';
  };

  // mouse events
  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX);
  const onMouseUp   = () => onDragEnd();
  const onMouseLeave= () => { onDragEnd(); animPaused.current = false; };

  // touch events
  const onTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const onTouchMove  = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const onTouchEnd   = () => onDragEnd();

  // cell hover pause/resume
  const onCellEnter = () => { animPaused.current = true; };
  const onCellLeave = () => { if (!isDragging.current) animPaused.current = false; };

  // open/close case board
  const openCase = (project: Project) => {
    setSelected(project);
    setPhase('entering');
    animPaused.current = true;
    requestAnimationFrame(() => setTimeout(() => setPhase('open'), 30));
    document.body.style.overflow = 'hidden';
  };

  const closeCase = () => {
    setPhase('exiting');
    setTimeout(() => {
      setSelected(null);
      setPhase('entering');
      animPaused.current = false;
      document.body.style.overflow = '';
    }, 400);
  };

  return (
    <>
      <div className="divider">— Page 003 · Reel of Work —</div>

      <section id="work" className="section">
        <div ref={headRef} className="projects-head">
          <div className="projects-head-row">
            <div>
              <h2 className="heading">List of projects</h2>
              <p className="sub">// Click any frame to open the case file — drag to scroll</p>
            </div>
            <button
              className="showAllBtn"
              onClick={() => navigate('/projects')}
            >
              Show All →
            </button>
          </div>
        </div>

        <div
          ref={wrapRef}
          className="reelWrap"
          style={{ cursor: 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* override CSS animation — JS drives transform now */}
          <div
            ref={trackRef}
            className="reelTrack"
            style={{ animation: 'none', willChange: 'transform' }}
          >
            {DOUBLED.map((project, i) => (
              <div
                key={i}
                className="frameGroup"
                onMouseEnter={onCellEnter}
                onMouseLeave={onCellLeave}
              >
                <FilmCell project={project} onOpen={openCase} />
                <div className="frameSep" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <CaseBoard project={selected} onClose={closeCase} phase={phase} />
      )}
    </>
  );
}
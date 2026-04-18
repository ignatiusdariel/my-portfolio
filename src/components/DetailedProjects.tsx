import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project, PROJECTS } from '@/data/data';
import CaseBoard from '@/components/CaseBoard';

type Phase = 'entering' | 'open' | 'exiting';

export default function DetailedProjectsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Project | null>(null);
  const [phase,    setPhase]    = useState<Phase>('entering');

  const openCase = (project: Project) => {
    setSelected(project);
    setPhase('entering');
    requestAnimationFrame(() => setTimeout(() => setPhase('open'), 30));
    document.body.style.overflow = 'hidden';
  };

  const closeCase = () => {
    setPhase('exiting');
    setTimeout(() => {
      setSelected(null);
      setPhase('entering');
      document.body.style.overflow = '';
    }, 400);
  };

  return (
    <div className="projects-page">
      {/* Film overlay effects carry over */}
      <div className="projects-page-header">
        <button className="backBtn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div>
          <p className="projects-page-eyebrow">CASE FILES — ALL OPERATIONS</p>
          <h1 className="projects-page-title">Project Archive</h1>
          <p className="projects-page-sub">
            {PROJECTS.length} cases on record // click any to open the board
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div
            key={project.num}
            className="project-card"
            onClick={() => openCase(project)}
            role="button"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') openCase(project); }}
          >
            {/* film frame top sprockets */}
            <div className="card-sprockets">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card-spr" />
              ))}
            </div>

            <div className="card-body">
              <div className="card-num-row">
                <span className="card-num">{project.num} ▲</span>
                <span className={`card-status card-status--${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="card-title">{project.title}</h3>
              <p className="card-subtitle">{project.subtitle}</p>
              <p className="card-desc">{project.description}</p>

              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="card-tag">{tag}</span>
                ))}
              </div>

              <div className="card-footer">
                <span className="card-year">{project.year}</span>
                <span className="card-hint">// open case file →</span>
              </div>
            </div>

            {/* film frame bottom sprockets */}
            <div className="card-sprockets">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card-spr" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <CaseBoard project={selected} onClose={closeCase} phase={phase} />
      )}
    </div>
  );
}
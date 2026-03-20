import { useState, useEffect, useRef } from 'react';
import { Project } from '@/data/data';

// ── Status badge colour map ─────────────────────────────────
const STATUS_COLOR: Record<Project['status'], string> = {
    SOLVED: '#2a5c2a',
    ACTIVE: '#8b2000',
    COLD: '#2a3a5c',
};
const STATUS_LABEL: Record<Project['status'], string> = {
    SOLVED: '✔ CASE CLOSED',
    ACTIVE: '⚠ ACTIVE',
    COLD: '❄ COLD CASE',
};

// ── Pin component ───────────────────────────────────────────
function Pin({ color = '#c0392b' }: { color?: string }) {
    return (
        <div className={"pin"} style={{ background: color }}>
            <div className={"pinShine"} />
        </div>
    );
}

// ── String connector (CSS-drawn) ────────────────────────────
function StringLine({ from, to, color = '#c8852a' }: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    color?: string;
}) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return (
        <div
            className={"string"}
            style={{
                left: from.x,
                top: from.y,
                width: len,
                transform: `rotate(${angle}deg)`,
                background: color,
            }}
        />
    );
}

// ── Polaroid photo card ─────────────────────────────────────
function Polaroid({ title, sub, rotate }: { title: string; sub: string; rotate: number }) {
    return (
        <div className={"polaroid"} style={{ transform: `rotate(${rotate}deg)` }}>
            <Pin />
            <div className={"polaroidPhoto"}>
                <div className={"polaroidSilhouette"} />
                <span className={"polaroidOverlay"}>{title}</span>
            </div>
            <p className={"polaroidCaption"}>{sub}</p>
        </div>
    );
}

// ── Evidence card ───────────────────────────────────────────
function EvidenceCard({
    label, text, rotate, index,
}: { label: string; text: string; rotate: number; index: number }) {
    const pinColors = ['#c0392b', '#e67e22', '#2980b9', '#27ae60'];
    return (
        <div
            className={"evidenceCard"}
            style={{ transform: `rotate(${rotate}deg)`, animationDelay: `${index * 0.12}s` }}
        >
            <Pin color={pinColors[index % pinColors.length]} />
            <p className={"evidenceLabel"}>{label}</p>
            <p className={"evidenceText"}>{text}</p>
        </div>
    );
}

// ── Handwritten note ────────────────────────────────────────
function HandwrittenNote({ text, rotate }: { text: string; rotate: number }) {
    return (
        <div className={"note"} style={{ transform: `rotate(${rotate}deg)` }}>
            <Pin color="#f1c40f" />
            <p className={"noteText"}>{text}</p>
        </div>
    );
}

// ── Tech suspect tag ────────────────────────────────────────
function SuspectTag({ name, index }: { name: string; index: number }) {
    const rotations = [-3, 2, -1, 4, -2, 3, -4, 1];
    return (
        <div
            className={"suspectTag"}
            style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
        >
            <Pin color="#c0392b" />
            <span className={"suspectName"}>{name}</span>
        </div>
    );
}

// ── Code snippet card ───────────────────────────────────────
function CodeCard({ code, filename }: { code: string; filename?: string }) {
    return (
        <div className={"codeCard"}>
            <Pin color="#2980b9" />
            {filename && <p className={"codeFilename"}>{filename}</p>}
            <pre className={"codeBlock"}>{code}</pre>
        </div>
    );
}

// ── Main CaseBoard ──────────────────────────────────────────
interface Props {
    project: Project;
    onClose: () => void;
    phase: 'entering' | 'open' | 'exiting';
}

export default function CaseBoard({ project, onClose, phase }: Props) {
    const boardRef = useRef<HTMLDivElement>(null);
    const [itemsVisible, setItemsVisible] = useState(false);

    useEffect(() => {
        if (phase === 'open') {
            const t = setTimeout(() => setItemsVisible(true), 300);
            return () => clearTimeout(t);
        } else {
            setItemsVisible(false);
        }
    }, [phase]);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const statusColor = STATUS_COLOR[project.status];

    return (
        <div
            className={`${"overlay"} ${"styles"[phase]}`}
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
            {/* ── Transition film flash ── */}
            <div className={"filmFlash"} />

            {/* ── Corkboard ── */}
            <div
                ref={boardRef}
                className={`${"board"} ${itemsVisible ? "boardVisible" : ''}`}
            >
                {/* GRAIN texture */}
                <div className={"boardGrain"} />

                {/* ── Header tape strip ── */}
                <div className={"headerTape"}>
                    <div className={"headerTapeLeft"}>
                        <span className={"caseNum"}>CASE FILE #{project.num}</span>
                        <span
                            className={"caseStatus"}
                            style={{ background: statusColor }}
                        >
                            {STATUS_LABEL[project.status]}
                        </span>
                    </div>
                    <button className={"closeBtn"} onClick={onClose} aria-label="Close case">
                        ✕ CLOSE FILE
                    </button>
                </div>

                {/* ── Board content ── */}
                <div className={"boardContent"}>

                    {/* LEFT COLUMN */}
                    <div className={"leftCol"}>

                        {/* Main polaroid / title card */}
                        <div className={`${"titleCard"} ${itemsVisible ? "itemIn" : ''}`}
                            style={{ animationDelay: '0s' }}>
                            <Pin color="#c0392b" />
                            <Pin color="#c0392b" />
                            <div className={"titleCardInner"}>
                                <p className={"titleCardNum"}>{project.num}</p>
                                <h2 className={"titleCardName"}>{project.title}</h2>
                                <p className={"titleCardSub"}>{project.subtitle}</p>
                                <div className={"titleMeta"}>
                                    <span>{project.year}</span>
                                    <span>·</span>
                                    <span>{project.role}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description note */}
                        <HandwrittenNote
                            text={project.description}
                            rotate={-1}
                        />

                        {/* Outcome card */}
                        <div className={`${"outcomeCard"} ${itemsVisible ? "itemIn" : ''}`}
                            style={{ animationDelay: '0.2s' }}>
                            <Pin color="#27ae60" />
                            <p className={"outcomeLabel"}>OUTCOME</p>
                            <p className={"outcomeText"}>{project.outcome}</p>
                        </div>

                        {/* Links */}
                        {(project.liveUrl || project.repoUrl) && (
                            <div className={`${"linksCard"} ${itemsVisible ? "itemIn" : ''}`}
                                style={{ animationDelay: '0.3s' }}>
                                <Pin color="#8e44ad" />
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                        className={"linkBtn"}>
                                        ↗ LIVE SITE
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                                        className={"linkBtn"}>
                                        ⌥ SOURCE CODE
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CENTRE COLUMN — evidence cards */}
                    <div className={"centreCol"}>
                        <p className={`${"colHeader"} ${itemsVisible ? "itemIn" : ''}`}
                            style={{ animationDelay: '0.05s' }}>
                            ── EVIDENCE ──
                        </p>
                        {project.clues.map((clue, i) => (
                            <div key={i} className={itemsVisible ? "itemIn" : ''}
                                style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                                <EvidenceCard
                                    label={clue.label}
                                    text={clue.text}
                                    rotate={i % 2 === 0 ? -1.5 : 1.5}
                                    index={i}
                                />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={"rightCol"}>

                        {/* Suspects board */}
                        <div className={`${"suspectsWrap"} ${itemsVisible ? "itemIn" : ''}`}
                            style={{ animationDelay: '0.15s' }}>
                            <p className={"suspectsHeader"}>SUSPECTS IDENTIFIED</p>
                            <div className={"suspectsGrid"}>
                                {project.suspects.map((s, i) => (
                                    <SuspectTag key={s} name={s} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* Code snippet */}
                        <div className={`${itemsVisible ? "itemIn" : ''}`}
                            style={{ animationDelay: '0.25s' }}>
                            <CodeCard code={project.code} filename={project.codeFile} />
                        </div>

                        {/* Decorative polaroids */}
                        <div className={"polaroids"}>
                            <Polaroid title="BUILD" sub="Architecture diagram" rotate={-4} />
                            <Polaroid title="DEPLOY" sub="Production metrics" rotate={3} />
                        </div>
                    </div>
                </div>

                {/* ── String web (purely decorative) ── */}
                <svg className={"stringLayer"} aria-hidden>
                    <line x1="30%" y1="22%" x2="50%" y2="45%" stroke="#c8852a" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 3" />
                    <line x1="50%" y1="45%" x2="72%" y2="28%" stroke="#c8852a" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 3" />
                    <line x1="22%" y1="55%" x2="48%" y2="45%" stroke="#e74c3c" strokeWidth="0.8" strokeOpacity="0.28" />
                    <line x1="48%" y1="45%" x2="70%" y2="60%" stroke="#e74c3c" strokeWidth="0.8" strokeOpacity="0.25" />
                    <line x1="35%" y1="70%" x2="55%" y2="45%" stroke="#c8852a" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="3 4" />
                </svg>

            </div>
        </div>
    );
}

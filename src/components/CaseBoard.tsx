import { useState, useEffect, useRef } from 'react';
import { Project } from '@/data/data';

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

function Pin({ color = '#c0392b' }: { color?: string }) {
    return (
        <div className="pin" style={{ background: color }}>
            <div className="pinShine" />
        </div>
    );
}

function Polaroid({ title, sub, rotate }: { title: string; sub: string; rotate: number }) {
    return (
        <div className="polaroid" style={{ transform: `rotate(${rotate}deg)` }}>
            <Pin />
            <div className="polaroidPhoto">
                <div className="polaroidSilhouette" />
                <span className="polaroidOverlay">{title}</span>
            </div>
            <p className="polaroidCaption">{sub}</p>
        </div>
    );
}

function EvidenceCard({ label, text, rotate, index }: {
    label: string; text: string; rotate: number; index: number;
}) {
    const pinColors = ['#c0392b', '#e67e22', '#2980b9', '#27ae60'];
    return (
        <div
            className="evidenceCard"
            style={{ transform: `rotate(${rotate}deg)`, animationDelay: `${index * 0.12}s` }}
        >
            <Pin color={pinColors[index % pinColors.length]} />
            <p className="evidenceLabel">{label}</p>
            <p className="evidenceText">{text}</p>
        </div>
    );
}

function HandwrittenNote({ text, rotate }: { text: string; rotate: number }) {
    return (
        <div className="note" style={{ transform: `rotate(${rotate}deg)` }}>
            <Pin color="#f1c40f" />
            <p className="noteText">{text}</p>
        </div>
    );
}

function SuspectTag({ name, index }: { name: string; index: number }) {
    const rotations = [-3, 2, -1, 4, -2, 3, -4, 1];
    return (
        <div
            className="suspectTag"
            style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
        >
            <Pin color="#c0392b" />
            <span className="suspectName">{name}</span>
        </div>
    );
}

// ── Image preview card — replaces code snippet ──────────────
function ImageCard({ imageUrl, filename }: { imageUrl?: string; filename?: string }) {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    return (
        <div className="codeCard">
            <Pin color="#2980b9" />
            {filename && <p className="codeFilename">{filename}</p>}
            <div className="imageCardWrap">
                {imageUrl && !errored ? (
                    <>
                        {!loaded && (
                            <div className="imageCardPlaceholder">
                                <span className="imageCardLoading">// loading preview...</span>
                            </div>
                        )}
                        <img
                            src={imageUrl}
                            alt={filename ?? 'Project preview'}
                            className="imageCardImg"
                            style={{ display: loaded ? 'block' : 'none' }}
                            onLoad={() => setLoaded(true)}
                            onError={() => setErrored(true)}
                        />
                    </>
                ) : (
                    <div className="imageCardPlaceholder">
                        <span className="imageCardLoading">// no preview available</span>
                    </div>
                )}
            </div>
        </div>
    );
}

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

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <div
            className={`overlay overlay--${phase}`}  
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="filmFlash" />

            <div
                ref={boardRef}
                className={`board ${itemsVisible ? 'boardVisible' : ''}`}
            >
                <div className="boardGrain" />

                <div className="headerTape">
                    <div className="headerTapeLeft">
                        <span className="caseNum">CASE FILE #{project.num}</span>
                        <span className="caseStatus" style={{ background: STATUS_COLOR[project.status] }}>
                            {STATUS_LABEL[project.status]}
                        </span>
                    </div>
                    <button className="closeBtn" onClick={onClose} aria-label="Close case">
                        ✕ CLOSE FILE
                    </button>
                </div>

                <div className="boardContent">

                    {/* LEFT */}
                    <div className="leftCol">
                        <div
                            className={`titleCard ${itemsVisible ? 'itemIn' : ''}`}
                            style={{ animationDelay: '0s' }}
                        >
                            <Pin color="#c0392b" />
                            <Pin color="#c0392b" />
                            <div className="titleCardInner">
                                <p className="titleCardNum">{project.num}</p>
                                <h2 className="titleCardName">{project.title}</h2>
                                <p className="titleCardSub">{project.subtitle}</p>
                                <div className="titleMeta">
                                    <span>{project.year}</span>
                                    <span>·</span>
                                    <span>{project.role}</span>
                                </div>
                            </div>
                        </div>

                        <HandwrittenNote text={project.description} rotate={-1} />

                        <div
                            className={`outcomeCard ${itemsVisible ? 'itemIn' : ''}`}
                            style={{ animationDelay: '0.2s' }}
                        >
                            <Pin color="#27ae60" />
                            <p className="outcomeLabel">OUTCOME</p>
                            <p className="outcomeText">{project.outcome}</p>
                        </div>

                        {(project.liveUrl || project.repoUrl) && (
                            <div
                                className={`linksCard ${itemsVisible ? 'itemIn' : ''}`}
                                style={{ animationDelay: '0.3s' }}
                            >
                                <Pin color="#8e44ad" />
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="linkBtn">
                                        ↗ LIVE SITE
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="linkBtn">
                                        ⌥ SOURCE CODE
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CENTRE */}
                    <div className="centreCol">
                        <p
                            className={`colHeader ${itemsVisible ? 'itemIn' : ''}`}
                            style={{ animationDelay: '0.05s' }}
                        >
                            ── EVIDENCE ──
                        </p>
                        {project.clues.map((clue, i) => (
                            <div
                                key={i}
                                className={itemsVisible ? 'itemIn' : ''}
                                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                            >
                                <EvidenceCard
                                    label={clue.label}
                                    text={clue.text}
                                    rotate={i % 2 === 0 ? -1.5 : 1.5}
                                    index={i}
                                />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="rightCol">
                        <div
                            className={`suspectsWrap ${itemsVisible ? 'itemIn' : ''}`}
                            style={{ animationDelay: '0.15s' }}
                        >
                            <p className="suspectsHeader">SUSPECTS IDENTIFIED</p>
                            <div className="suspectsGrid">
                                {project.suspects.map((s, i) => (
                                    <SuspectTag key={s} name={s} index={i} />
                                ))}
                            </div>
                        </div>

                        {/* ── Image preview replaces code card ── */}
                        <div
                            className={itemsVisible ? 'itemIn' : ''}
                            style={{ animationDelay: '0.25s' }}
                        >
                            <ImageCard imageUrl={project.previewUrl} filename={project.codeFile} />
                        </div>

                        <div className="polaroids">
                            <Polaroid title="BUILD" sub="Architecture diagram" rotate={-4} />
                            <Polaroid title="DEPLOY" sub="Production metrics" rotate={3} />
                        </div>
                    </div>
                </div>

                <svg className="stringLayer" aria-hidden>
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
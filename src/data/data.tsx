export interface ProjectClue {
    label: string;
    text: string;
}

export interface Project {
    num: string;
    title: string;
    tags: string[];
    code: string;
    // ── Case board detail fields ──
    subtitle: string;
    status: 'SOLVED' | 'ACTIVE' | 'COLD';
    year: string;
    description: string;
    role: string;
    outcome: string;
    clues: ProjectClue[];
    suspects: string[];
    liveUrl?: string;
    repoUrl?: string;
    codeFile?: string;
}

export const PROJECTS: Project[] = [
    {
        num: '001', title: 'NightWatch',
        subtitle: 'Real-time Security Monitoring Platform',
        status: 'SOLVED',
        year: '2023',
        tags: ['React', 'Node.js', 'MongoDB'],
        role: 'Lead Engineer & Architect',
        outcome: 'Deployed to 3 enterprise clients. Monitors 50k+ events/day with <200ms latency.',
        description: 'A covert surveillance system for digital infrastructure — NightWatch tracks anomalies, fires alerts, and logs every suspicious packet that crosses the wire. Built for a security firm that needed eyes everywhere, all the time.',
        clues: [
            { label: 'MOTIVE', text: 'Client needed real-time breach detection across 12 servers. Existing tools were 4 minutes behind.' },
            { label: 'EVIDENCE', text: 'WebSocket pipeline delivering 50,000 events/day. Custom alert engine with severity triage.' },
            { label: 'METHOD', text: 'Event-driven Node.js backend, React dashboard with live D3 charts, MongoDB time-series storage.' },
            { label: 'ALIBI', text: 'All logs cryptographically signed. Zero false positives in first 90 days of production.' },
        ],
        suspects: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'D3.js', 'JWT'],
        code: `const watch = createServer({
    port: 3000,
    middleware: [auth, cors],
    routes: loadRoutes('./api')
  });
  watch.listen();`,
        codeFile: 'server.js',
        liveUrl: 'https://nightwatch.demo',
        repoUrl: 'https://github.com/yourhandle/nightwatch',
    },
    {
        num: '002', title: 'Cipher API',
        subtitle: 'End-to-End Encryption Microservice',
        status: 'ACTIVE',
        year: '2023',
        tags: ['Python', 'FastAPI', 'Redis'],
        role: 'Solo Developer',
        outcome: 'Processes 2M+ encryption requests/month. 99.97% uptime across 18 months.',
        description: 'A microservice built for one purpose: secrets. Cipher API wraps AES-256 encryption behind a clean REST interface, deployed as a sidecar to any architecture that needs data protection without the complexity.',
        clues: [
            { label: 'MOTIVE', text: 'Fintech startup needed GDPR-compliant field-level encryption without rewriting their stack.' },
            { label: 'EVIDENCE', text: 'AES-256-GCM encryption, PBKDF2 key derivation, Redis TTL-based key rotation.' },
            { label: 'METHOD', text: 'FastAPI for async throughput, Redis for ephemeral key caching, Docker sidecar deployment.' },
            { label: 'VERDICT', text: 'Passed third-party security audit. Zero data exposure incidents.' },
        ],
        suspects: ['Python', 'FastAPI', 'Redis', 'AES-256', 'Docker', 'AWS Lambda'],
        code: `@app.post("/encrypt")
  async def encrypt(data: Schema):
    key = derive_key(SECRET)
    return {
      "cipher": aes_encrypt(data, key)
    }`,
        codeFile: 'routes/encrypt.py',
        repoUrl: 'https://github.com/yourhandle/cipher-api',
    },
    {
        num: '003', title: 'ShadowDB',
        subtitle: 'High-Performance Query Abstraction Layer',
        status: 'SOLVED',
        year: '2022',
        tags: ['PostgreSQL', 'TypeScript', 'ORM'],
        role: 'Backend Engineer',
        outcome: 'Cut average query time from 1.4s to 87ms. Adopted by 2 internal teams.',
        description: 'When the old ORM became the bottleneck, ShadowDB was the answer. A typed query builder that speaks raw SQL under the hood but exposes a clean TypeScript API — fast, predictable, and fully auditable.',
        clues: [
            { label: 'MOTIVE', text: 'Legacy ORM causing N+1 queries. Dashboard load times hitting 6 seconds. Users filing complaints.' },
            { label: 'EVIDENCE', text: 'Query execution reduced from avg 1.4s to 87ms. Connection pooling, prepared statements, query cache.' },
            { label: 'METHOD', text: 'Custom TypeScript query builder, PgBouncer connection pooling, Redis result caching layer.' },
            { label: 'ALIBI', text: 'Comprehensive test suite. 99% type coverage. Zero regression after migration.' },
        ],
        suspects: ['TypeScript', 'PostgreSQL', 'Redis', 'PgBouncer', 'Jest', 'Node.js'],
        code: `const query = db
    .select('*')
    .from('missions')
    .where('status', 'active')
    .orderBy('priority', 'desc')
    .limit(20);`,
        codeFile: 'lib/query-builder.ts',
        repoUrl: 'https://github.com/yourhandle/shadowdb',
    },
    {
        num: '004', title: 'Dossier App',
        subtitle: 'Secure Document Management System',
        status: 'ACTIVE',
        year: '2023',
        tags: ['Next.js', 'Tailwind', 'Supabase'],
        role: 'Full Stack Developer',
        outcome: '400+ active users. 15,000+ documents managed. SOC 2 Type I compliant.',
        description: 'A document intelligence platform for teams that deal in sensitive information. Built on Next.js and Supabase, Dossier gives teams a secure, searchable vault for files that cannot afford to be lost or leaked.',
        clues: [
            { label: 'MOTIVE', text: 'Legal team drowning in 15,000 documents across Google Drive, email, and USB drives. No audit trail.' },
            { label: 'EVIDENCE', text: 'Row-level security via Supabase RLS. Full-text search with pg_trgm. Activity audit log.' },
            { label: 'METHOD', text: 'Next.js 14 App Router, Supabase Auth + Storage, Tailwind UI, Vercel edge deployment.' },
            { label: 'VERDICT', text: 'Passed SOC 2 Type I audit. No unauthorized access in production lifetime.' },
        ],
        suspects: ['Next.js', 'Supabase', 'Tailwind', 'PostgreSQL', 'Vercel', 'TypeScript'],
        code: `export default function Page() {
    const [data] = useDossier(id);
    return (
      <Layout>
        <FileView data={data} />
      </Layout>
    );
  }`,
        codeFile: 'app/dossier/[id]/page.tsx',
        liveUrl: 'https://dossier.app',
        repoUrl: 'https://github.com/yourhandle/dossier',
    },
    {
        num: '005', title: 'ReconBot',
        subtitle: 'Automated Web Intelligence Crawler',
        status: 'COLD',
        year: '2022',
        tags: ['Python', 'Selenium', 'Lambda'],
        role: 'Lead Developer',
        outcome: 'Scraped and structured 2M+ records. Saved 400 manual research hours.',
        description: 'A headless operative deployed to gather intelligence from the open web. ReconBot runs on AWS Lambda, disguises its fingerprint, and delivers structured data to S3 without leaving a trace — except the results.',
        clues: [
            { label: 'MOTIVE', text: 'Market research team spending 20hrs/week manually pulling competitor pricing data.' },
            { label: 'EVIDENCE', text: '2M+ records collected across 14 target sites. Proxy rotation, fingerprint spoofing, rate limiting.' },
            { label: 'METHOD', text: 'Selenium on Lambda, rotating residential proxies, SQS job queue, S3 data lake, Glue ETL.' },
            { label: 'STATUS', text: 'Project sunset after client pivoted. Bot is dormant but deployable within 10 minutes.' },
        ],
        suspects: ['Python', 'Selenium', 'AWS Lambda', 'SQS', 'S3', 'Glue'],
        code: `def run_mission(target):
    driver = init_headless()
    data = extract(driver, target)
    store_s3(data, bucket=ENV)
    return {"status": "ok"}`,
        codeFile: 'bot/mission.py',
        repoUrl: 'https://github.com/yourhandle/reconbot',
    },
    {
        num: '006', title: 'GridLine',
        subtitle: 'Live Data Visualization Dashboard',
        status: 'ACTIVE',
        year: '2024',
        tags: ['React', 'D3.js', 'WebSockets'],
        role: 'Frontend Engineer',
        outcome: 'Renders 10k data points at 60fps. Used by 3 operations teams in real-time.',
        description: 'A live command center for operational data. GridLine ingests WebSocket streams and renders them as interactive D3 charts with zero perceptible lag — built for the kind of data that cannot wait for a page refresh.',
        clues: [
            { label: 'MOTIVE', text: 'Ops team using Excel to track live logistics. Data was always 15 minutes stale. Decisions suffered.' },
            { label: 'EVIDENCE', text: '10,000 data points rendered at 60fps. Canvas-based D3 for performance. Virtual scrolling.' },
            { label: 'METHOD', text: 'React + D3 hybrid rendering, WebSocket with exponential backoff, Web Workers for data processing.' },
            { label: 'VERDICT', text: 'Zero dropped frames in stress tests. Latency from event to render: avg 12ms.' },
        ],
        suspects: ['React', 'D3.js', 'WebSockets', 'Web Workers', 'Canvas API', 'TypeScript'],
        code: `const ws = new WebSocket(WS_URL);
  ws.onmessage = (e) => {
    const { x, y, val } = parse(e.data);
    chart.update({ x, y, val });
  };`,
        codeFile: 'src/realtime/stream.ts',
        liveUrl: 'https://gridline.demo',
        repoUrl: 'https://github.com/yourhandle/gridline',
    },
];
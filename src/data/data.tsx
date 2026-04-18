export interface ProjectClue {
    label: string;
    text: string;
}

export interface Project {
    num: string;
    title: string;
    tags: string[];
    previewUrl: string;
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
        num: '001',
        title: 'UR POS',
        subtitle: 'POS FnB',
        status: 'ACTIVE',
        year: '2021',
        tags: ['Flutter', 'Android', 'iOS', 'Thermal Printers', 'Bluetooth Printers', 'Firebase'],
        role: 'Mobile Developer & Maintainer',
        outcome: 'Developed new features, maintained fixes and improvements since 2024. Executed Flutter version migration and managed full release cycle on Google Play and App Store.',
        description: 'A feature-rich POS application for the F&B industry — one of the most complete POS solutions on the market. Packed with multi-outlet management, inventory tracking, sales reporting, thermal and bluetooth printer support, and deep Firebase integration for real-time sync across devices.',
        clues: [
            { label: 'MOTIVE', text: 'F&B businesses needed a single POS that could handle everything — orders, printers, inventory, and reporting — without stitching together multiple tools.' },
            { label: 'EVIDENCE', text: 'Bluetooth and thermal printer integration, multi-outlet support, real-time Firebase sync, and full App Store & Google Play deployment.' },
            { label: 'METHOD', text: 'Flutter cross-platform development targeting Android and iOS. Firebase for backend sync. Managed releases via Google Console and Appstore Connect.' },
            { label: 'VERDICT', text: 'Active in production since 2021. Ongoing maintenance and feature development since 2024. Successfully migrated Flutter version with zero downtime.' },
        ],
        suspects: ['Flutter', 'Firebase', 'Android', 'iOS', 'Bluetooth', 'Google Console', 'Appstore Connect'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/UR%20POS.png',
        codeFile: 'lib/main.dart',
    },
    {
        num: '002',
        title: 'Natta Eats',
        subtitle: 'Social Media for FnB',
        status: 'SOLVED',
        year: '2024',
        tags: ['Flutter', 'Android', 'iOS', 'Firebase', 'Google Console', 'Appstore Connect'],
        role: 'Mobile Developer & Maintainer',
        outcome: 'Continued development through to production release. Revamped UI, shipped major features, and drove the full process from development to deployment on both platforms.',
        description: 'A social media application built around the F&B industry. Users can share their culinary experiences, discover places, review restaurants, and follow other food enthusiasts — blending the social feed experience with location-aware dining discovery.',
        clues: [
            { label: 'MOTIVE', text: 'No existing social platform focused purely on culinary experiences and F&B discovery. Gap in the market for food-first social content.' },
            { label: 'EVIDENCE', text: 'Full social feed with post creation, location tagging, and culinary reviews. Firebase-backed real-time updates and authentication.' },
            { label: 'METHOD', text: 'Flutter for cross-platform mobile, Firebase for auth and database, Google Console and Appstore Connect for distribution.' },
            { label: 'VERDICT', text: 'Successfully shipped to production. UI revamp completed. App live on both Android and iOS.' },
        ],
        suspects: ['Flutter', 'Firebase', 'Android', 'iOS', 'Google Console', 'Appstore Connect'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/Natta%20Eats.png',
        codeFile: 'lib/main.dart',
    },
    {
        num: '003',
        title: 'UR Self Order',
        subtitle: 'Self Order App',
        status: 'ACTIVE',
        year: '2020',
        tags: ['Flutter', 'Android', 'iOS', 'Firebase', 'Google Console', 'Appstore Connect'],
        role: 'Mobile Developer & Maintainer',
        outcome: 'Developed new features, maintained fixes and continuous improvements since 2024. Executed Flutter version migration. Reduced table wait times and improved order accuracy across client restaurants.',
        description: 'A self-order application that empowers customers to scan a QR code at their table and browse, customize, and place orders directly from their own phone — eliminating wait times and reducing order errors for F&B businesses.',
        clues: [
            { label: 'MOTIVE', text: 'Restaurants needed to reduce reliance on waitstaff for order taking, cut errors, and speed up table turnover.' },
            { label: 'EVIDENCE', text: 'QR code-based table assignment, full menu browsing, item customization, and real-time order submission to kitchen.' },
            { label: 'METHOD', text: 'Flutter cross-platform, Firebase for real-time order sync, QR integration for table detection, deployed via Google Console and Appstore Connect.' },
            { label: 'VERDICT', text: 'Active in production since 2020. Ongoing feature development and maintenance since 2024. Flutter version migration completed successfully.' },
        ],
        suspects: ['Flutter', 'Firebase', 'Android', 'iOS', 'QR Code', 'Google Console', 'Appstore Connect'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/UR%20Selforder.png',
        codeFile: 'lib/main.dart',
    },
    {
        num: '004',
        title: 'Court Replay',
        subtitle: 'Sports Action Replay',
        status: 'ACTIVE',
        year: '2026',
        tags: ['React', 'Node.js', 'Vite', 'Arduino', 'Hardware', 'CCTV'],
        role: 'Front End Developer & Engineer',
        outcome: 'Developed the full application from start to finish. Built the frontend web interface, engineered the hardware setup using ethernet-wired CCTV cameras, Arduino microcontrollers, and physical trigger buttons.',
        description: 'An action replay system for sports courts. When a player presses a physical button, the system instantly captures and plays back the 30 seconds of gameplay that occurred just before the press — letting athletes review key moments, disputed calls, or highlight plays in real time.',
        clues: [
            { label: 'MOTIVE', text: 'Sports players and coaches needed an instant replay system without expensive broadcast equipment — built for local courts and training facilities.' },
            { label: 'EVIDENCE', text: 'Physical button triggers 30-second lookback capture. Ethernet-wired CCTV feeds into a Node.js buffer. React frontend displays the replay instantly.' },
            { label: 'METHOD', text: 'React + Vite frontend, Node.js video buffer server, Arduino microcontroller for button input, ethernet CCTV for low-latency video capture.' },
            { label: 'VERDICT', text: 'Full system operational. Hardware and software integrated end-to-end. Real-time replay with sub-second trigger response.' },
        ],
        suspects: ['React', 'Node.js', 'Vite', 'Arduino', 'CCTV', 'Ethernet', 'Hardware'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/Court%20Replay.png',
        codeFile: 'src/App.tsx',
        repoUrl: 'https://github.com/ignatiusdariel/court-replay',
    },
    {
        num: '005',
        title: 'Website Ko Enzo',
        subtitle: 'Company Profile Website',
        status: 'SOLVED',
        year: '2025',
        tags: ['React', 'Webflow', 'CMS', 'Web Development'],
        role: 'Website Developer',
        outcome: 'Delivered a polished company profile website for a digital marketing agency, fully tailored to the owner\'s design preferences and brand identity. Project completed on time and to client satisfaction.',
        description: 'A freelance project developing a company profile website for a digital marketing business owner. The site showcases services, portfolio, and brand story — designed and built according to the client\'s personal aesthetic and business goals.',
        clues: [
            { label: 'MOTIVE', text: 'Digital marketing business owner needed a strong online presence to attract clients and showcase their services professionally.' },
            { label: 'EVIDENCE', text: 'Fully custom company profile site with service pages, portfolio section, and contact flow. CMS integration for easy content updates.' },
            { label: 'METHOD', text: 'React for component structure, Webflow for CMS-driven content management, tailored to client\'s brand and taste.' },
            { label: 'VERDICT', text: 'Project delivered and signed off. Client operational with a live, maintainable website.' },
        ],
        suspects: ['React', 'Webflow', 'CMS', 'HTML', 'CSS', 'Web Development'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/Zest.png',
        codeFile: 'src/App.tsx',
    },
    {
        num: '006',
        title: 'OSA Voting',
        subtitle: 'Voting Website for Election',
        status: 'SOLVED',
        year: '2025',
        tags: ['React', 'Node.js', 'Frontend', 'Website'],
        role: 'Website Developer',
        outcome: 'Developed a complete voting and election website for the Fakultas Hukum alumni of Universitas Parahyangan. Completed all client requests and revisions within approximately one and a half months.',
        description: 'A secure voting platform developed for the alumni election of Fakultas Hukum UNPAR. The system allows authenticated alumni to cast votes, view candidates, and track election progress — built to handle a real institutional election with accuracy and reliability.',
        clues: [
            { label: 'MOTIVE', text: 'UNPAR Fakultas Hukum alumni needed a trustworthy digital voting platform for their official election — replacing manual or paper-based processes.' },
            { label: 'EVIDENCE', text: 'Authenticated voter access, candidate profiles, live vote tallying, and admin dashboard for oversight and result publication.' },
            { label: 'METHOD', text: 'React frontend with Node.js backend. Role-based access control for voters and administrators. Deployed and maintained through revision cycles.' },
            { label: 'VERDICT', text: 'Election completed successfully. All client revisions delivered within the agreed timeline of approximately 6 weeks.' },
        ],
        suspects: ['React', 'Node.js', 'Frontend', 'Authentication', 'Role-based Access', 'Web Development'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/unpar.jpeg',
        codeFile: 'src/App.tsx',
    },
    {
        num: '007',
        title: 'OSA Portal',
        subtitle: 'Community Portal Website',
        status: 'ACTIVE',
        year: '2026',
        tags: ['React', 'Node.js', 'Frontend', 'Website'],
        role: 'Website Developer',
        outcome: 'Developed a community portal for IMI (Ikatan Motor Indonesia) where members can discover events, post daily activities, and stay connected with the broader community.',
        description: 'A community portal built for IMI (Ikatan Motor Indonesia) — a motorcycle community organization. The platform serves as a central hub where members can find upcoming events, share daily riding activities, and engage with their community online.',
        clues: [
            { label: 'MOTIVE', text: 'IMI needed a central digital home to connect members, share events, and build community engagement beyond physical meetups.' },
            { label: 'EVIDENCE', text: 'Event listings, member activity feed, community announcements, and info pages for the IMI organization.' },
            { label: 'METHOD', text: 'React frontend for dynamic community feed and event pages. Node.js backend for content management and user interactions.' },
            { label: 'VERDICT', text: 'Portal live and active. Community members onboarded and engaging with events and activity posts.' },
        ],
        suspects: ['React', 'Node.js', 'Frontend', 'Community', 'Web Development'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/imi.jpeg',
        codeFile: 'src/App.tsx',
    },
    {
        num: '008',
        title: 'Captify',
        subtitle: 'Mikrotik Portal WiFi',
        status: 'ACTIVE',
        year: '2026',
        tags: ['React', 'Node.js', 'Mikrotik', 'WiFi', 'Hardware', 'Frontend'],
        role: 'Front End Developer & Engineer',
        outcome: 'Built the frontend portal and configured Mikrotik hardware for captive portal access. Set up data collection pipelines, inter-hardware communication to the server, and integrated surveys, social media links, and ad placements for venue owners.',
        description: 'A WiFi captive portal solution for cafes, hotels, and restaurants. When customers connect to the venue\'s WiFi, they are greeted with a branded portal that captures their data, presents ads or surveys, and links to social media — turning free WiFi into a marketing and data collection asset for the business owner.',
        clues: [
            { label: 'MOTIVE', text: 'Venue owners were giving away free WiFi with zero return. Captify turns the WiFi login moment into a data capture and marketing opportunity.' },
            { label: 'EVIDENCE', text: 'Mikrotik captive portal intercepts WiFi connections. Custom React portal collects user data, displays ads, and shows surveys before granting access.' },
            { label: 'METHOD', text: 'React frontend for the captive portal UI. Node.js server for data collection and storage. Mikrotik hardware configuration for portal redirect and access control.' },
            { label: 'VERDICT', text: 'System operational across venue deployments. Hardware and software pipeline functioning end-to-end. Owner dashboard live with collected data and analytics.' },
        ],
        suspects: ['React', 'Node.js', 'Mikrotik', 'Hardware', 'WiFi', 'Captive Portal', 'Frontend'],
        previewUrl: 'https://ik.imagekit.io/5sw5jrmgr/portfolio/Courtify.png',
        codeFile: 'src/App.tsx',
    },
];
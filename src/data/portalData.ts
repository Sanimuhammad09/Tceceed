export interface HeroSlide {
  id: number;
  badge: string;
  badgeIcon?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface StatItem {
  icon: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  description: string;
}

export interface StrategicGoal {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  tag: string;
}

export interface ProgrammeCard {
  id: string;
  title: string;
  category: string;
  cohort: string;
  description: string;
  completionRate: string;
  progressPercent: number;
  image: string;
  metricLabel: string;
  metricValue: string;
  link: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  division: string;
  badge: string;
  credentials: string;
  bio: string;
  image: string;
  extension: string;
  department: string;
}

export interface ResearchStream {
  id: string;
  category: 'solar' | 'biogas' | 'wind' | 'hybrid';
  title: string;
  streamNumber: string;
  badge: string;
  unit: string;
  description: string;
  image: string;
  leadInvestigator: string;
  specs: { label: string; value: string }[];
  status: string;
  trl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'general' | 'programmes' | 'research' | 'reports' | 'press';
  categoryLabel: string;
  date: string;
  year: number;
  readTime: string;
  summary: string;
  image?: string;
  tags: string[];
  author?: string;
  downloadable?: boolean;
  featured?: boolean;
}

export const PORTAL_LOGOS = {
  logo1: {
    src: '/assets/logos/logo1.png',
    alt: 'TETFund Logo - Tertiary Education Trust Fund Nigeria',
    title: 'TETFund',
    caption: 'Tertiary Education Trust Fund',
  },
  logo2: {
    src: '/assets/logos/logo2.png',
    alt: 'Federal Polytechnic Nasarawa Crest Logo',
    title: 'FedPoly Nasarawa',
    caption: 'The Federal Polytechnic Nasarawa',
  },
  logo3: {
    src: '/assets/logos/logo3.png',
    alt: 'TCECEED Official Logo - Centre of Excellence for Clean Energy',
    title: 'TCECEED',
    caption: 'Centre of Excellence for Clean Energy and Entrepreneurship Development',
  },
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: 'Federal Polytechnic Nasarawa • TETFund Centre',
    title: 'Pioneering Clean Energy Innovation & Sustainable Solutions',
    subtitle: 'Centre of Academic Excellence',
    description: "Addressing Nigeria's energy transition through practical Solar PV innovation, advanced technical internships, and scalable entrepreneurship incubation.",
    image: '/assets/images/solar_panels_rig.png',
    primaryCtaText: 'Explore Research',
    primaryCtaLink: '/research',
    secondaryCtaText: 'Apply for Internship',
    secondaryCtaLink: '/internship',
  },
  {
    id: 2,
    badge: 'Certified Technical Workforce',
    badgeIcon: 'workspace_premium',
    title: 'Empowering the Next Generation of Renewable Technicians',
    subtitle: 'Vocational & Academic Mastery',
    description: 'Equipping polytechnic diplomates and graduate engineers with hands-on skills in solar microgrids, biogas digesters, and energy auditing.',
    image: '/assets/images/pv_training_cohort.png',
    primaryCtaText: 'View Training Programmes',
    primaryCtaLink: '/internship',
    secondaryCtaText: 'Our National Mandate',
    secondaryCtaLink: '/about',
  },
  {
    id: 3,
    badge: 'Industry Alliances & Spin-Offs',
    badgeIcon: 'handshake',
    title: 'Bridging Industry & Academia Through Practical Internships',
    subtitle: 'Commercial Spin-Outs & Patents',
    description: 'Strategic collaborations with Transblue Energy Konsult and True-Blue Energy Services Limited to launch commercial-ready ventures.',
    image: '/assets/images/graduates_alumni_group.png',
    primaryCtaText: 'Partner With Us',
    primaryCtaLink: '/contact',
    secondaryCtaText: 'Centre Governance',
    secondaryCtaLink: '/management',
  },
];

export const STAT_COUNTERS: StatItem[] = [
  {
    icon: 'domain_verification',
    value: '1 of 12',
    label: 'TETFund Centres of Excellence',
    description: 'Designated nationwide by Federal Presidential Approval',
  },
  {
    icon: 'solar_power',
    value: '<10%',
    label: 'Rural Grid Deficit Addressed',
    description: 'Confronted via indigenous decentralized off-grid solutions',
  },
  {
    icon: 'group',
    value: '500+',
    numericTarget: 500,
    suffix: '+',
    label: 'Trained Fellows & Interns',
    description: 'Graduated through certified vocational clean-tech cohorts',
  },
  {
    icon: 'biotech',
    value: '6-Mo',
    label: 'Technical Fellowship',
    description: 'Full-immersion industrial skills & prototype incubation',
  },
];

export const STRATEGIC_GOALS: StrategicGoal[] = [
  {
    id: 'goal-1',
    number: '01',
    title: 'Hands-On Technical Training',
    description: 'Hosting bi-annual technical bootcamps, inverter assembly labs, and solar plant commissioning courses for students, technicians, and artisans.',
    icon: 'build',
    badge: 'Active Programs Running',
    tag: 'Technical Skilling',
  },
  {
    id: 'goal-2',
    number: '02',
    title: 'Applied Energy Research',
    description: 'Conducting high-impact research on solar photovoltaic efficiency in sub-Saharan dust climates, anaerobic biomass digesters, and energy storage chemistry.',
    icon: 'science',
    badge: 'TETFund Grant Supported',
    tag: 'R&D Delivery',
  },
  {
    id: 'goal-3',
    number: '03',
    title: 'Enterprise Incubation',
    description: 'Providing seed grants, workspace incubation, and intellectual property backing to transform academic prototypes into commercial clean-tech startups.',
    icon: 'rocket_launch',
    badge: 'Spin-Off Venture Hub',
    tag: 'Entrepreneurship',
  },
  {
    id: 'goal-4',
    number: '04',
    title: 'Policy & Stakeholder Advisory',
    description: 'Advising federal, state ministries, and rural electrification agencies with empirical research data to draft sustainable national clean-energy policies.',
    icon: 'policy',
    badge: 'Government Strategic Advisory',
    tag: 'Policy Frameworks',
  },
];

export const FEATURED_PROGRAMMES: ProgrammeCard[] = [
  {
    id: 'prog-solar',
    title: 'Solar PV Installation & Energy Storage Systems',
    category: 'Solar PV Systems',
    cohort: 'Cohort 2024/2025',
    description: 'Full-scope training covering solar panel angle calibration, charge controller diagnostics, battery chemistry matching, and hybrid inverter wiring.',
    completionRate: '96%',
    progressPercent: 96,
    image: '/assets/images/solar_panels_rig.png',
    metricLabel: 'Practical Completion Rate',
    metricValue: '96%',
    link: '/internship',
  },
  {
    id: 'prog-biogas',
    title: 'Biogas Production & Clean Cooking Solutions',
    category: 'Biomass & Bio-energy',
    cohort: 'R&D Lab 02',
    description: 'Converting agricultural and domestic organic waste into pressurized methane gas for domestic cooking, clean electricity generation, and nutrient-rich biofertilizer.',
    completionRate: '12 Digesters',
    progressPercent: 82,
    image: '/assets/images/biogas_demonstration_unit.png',
    metricLabel: 'Community Deployment',
    metricValue: '12 Digesters',
    link: '/research',
  },
  {
    id: 'prog-cert',
    title: 'Industry Internship & Spin-Off Technical Award',
    category: 'Workforce Certification',
    cohort: 'Accredited',
    description: 'Graduates receive verified credentials endorsed by TETFund, Federal Polytechnic Nasarawa, and corporate partner True-Blue Energy Services Limited.',
    completionRate: '88%',
    progressPercent: 88,
    image: '/assets/images/graduates_alumni_group.png',
    metricLabel: 'Employment & Self-Reliance',
    metricValue: '88%',
    link: '/internship',
  },
];

export const LEADERSHIP_ROSTER: LeadershipMember[] = [
  {
    id: 'director',
    name: 'Dr. Yusuf Abdullahi',
    role: 'Centre Director',
    division: 'Directorate',
    badge: 'Executive Head',
    credentials: 'PhD in Renewable Energy Systems',
    bio: 'Leads overarching grant execution, corporate collaborations, and ministerial briefings. Spearheads the Centre mandate to translate polytechnic innovation into commercial energy security.',
    image: '/assets/images/director_accord_signing.png',
    extension: 'Ext: 101',
    department: 'Office of the Director',
  },
  {
    id: 'technical',
    name: 'Engr. Fatima Bello',
    role: 'Technical & Research Officer',
    division: 'Tech Labs',
    badge: 'R&D Division',
    credentials: 'Registered COREN Engineer, M.Eng Electrical',
    bio: 'Leads experimental solar micro-grid development, photovoltaic performance analytics, and research prototypes under tropical weather conditions.',
    image: '/assets/images/circuit_inverter_assembly.png',
    extension: 'Ext: 104',
    department: 'Technical & Laboratory Division',
  },
  {
    id: 'admin',
    name: 'Mallam Ibrahim Audu',
    role: 'Registrar / Administrative Officer',
    division: 'Registry',
    badge: 'Secretariat',
    credentials: 'Senior Administrative Officer, MPA',
    bio: 'Directs academic protocol, operational staff administration, trainee admissions, and statutory council correspondence across all departments.',
    image: '/assets/images/workshop_fabrication_hall.png',
    extension: 'Ext: 102',
    department: 'Central Registry',
  },
  {
    id: 'entrepreneurship',
    name: 'Mrs. Grace Ocheni',
    role: 'Head of Entrepreneurship',
    division: 'Incubator',
    badge: 'Venture Lab',
    credentials: 'MBA Innovation Management, B.Sc Economics',
    bio: 'Coordinates student spin-outs, clean energy seed grants, enterprise investor demo days, and market launch pathways with private industry.',
    image: '/assets/images/pv_training_cohort.png',
    extension: 'Ext: 107',
    department: 'Venture & Incubation Hub',
  },
];

export const RESEARCH_STREAMS: ResearchStream[] = [
  {
    id: 'stream-solar',
    category: 'solar',
    streamNumber: 'Stream 01',
    unit: 'Solar PV Lab Unit',
    badge: 'Active Demonstration Hub',
    title: 'Solar Photovoltaic & Micro-Grid Systems',
    description: 'Researching decentralized smart solar micro-grids, lead-carbon versus lithium battery charge algorithms under high ambient temperatures, inverter fault detection, and community mini-grids configured for rural northern agricultural nodes.',
    image: '/assets/images/solar_panels_rig.png',
    leadInvestigator: 'Dr. M. I. Abubakar & Team',
    status: 'Field Tested',
    trl: 'TRL 7',
    specs: [
      { label: 'Efficiency Rate', value: '92.4%' },
      { label: 'Field Testing', value: '18 Hubs' },
      { label: 'Lead Tech', value: 'MPPT Alg' },
    ],
  },
  {
    id: 'stream-wind',
    category: 'wind',
    streamNumber: 'Stream 02',
    unit: 'Fabrication Yard',
    badge: 'Mechanical Workshop',
    title: 'Mechanical Fabrication & Low-Speed Wind Turbines',
    description: 'Prototyping horizontal and vertical-axis wind turbines optimized for the low-to-medium wind speed corridors (3.2 m/s – 6.5 m/s) of Central Nigeria. All tubular masts, bearing housings, and furling tail fins are cast and welded inside our Federal Poly engineering workshops.',
    image: '/assets/images/workshop_fabrication_hall.png',
    leadInvestigator: 'Engr. D. K. Garba & Fabrication Team',
    status: 'Operational Rig',
    trl: 'TRL 5',
    specs: [
      { label: 'Material Source', value: '100% Local' },
      { label: 'Rated Wind', value: '3.8 m/s' },
      { label: 'Mast Design', value: 'Tubular Tilt' },
    ],
  },
  {
    id: 'stream-hybrid',
    category: 'hybrid',
    streamNumber: 'Stream 03',
    unit: 'Applied Electromechanical',
    badge: 'Applied Prototype',
    title: 'Hybrid Clean Energy Mobile Inverter Carts',
    description: 'Modular wheel-mounted energy stations coupling automotive alternators, dual-frequency pulse transformers, and deep-cycle lithium-ferro phosphate packs. Built to replace smoky petrol generators for small-scale market vendors, welding kiosks, and mobile medical screening booths.',
    image: '/assets/images/circuit_inverter_assembly.png',
    leadInvestigator: 'Engr. M. K. Tanko & Fellows',
    status: 'Patent Pending (NG/PT/2024/091)',
    trl: 'TRL 6',
    specs: [
      { label: 'Capacity', value: '3.5 kVA' },
      { label: 'Run Time', value: '14 hrs' },
      { label: 'Battery Type', value: 'LiFePO4' },
    ],
  },
  {
    id: 'stream-biogas',
    category: 'biogas',
    streamNumber: 'Stream 04',
    unit: 'Agro-Industrial Pilot',
    badge: 'Bio-Fertilizer Refinery',
    title: 'Anaerobic Biogas Digestion & Bio-Fertilizer Refinery',
    description: 'Conversion of livestock slurry, municipal organic sludge, and cassava peels from Nasarawa agricultural markets into scrubbing-grade methane gas (CH4 > 65%). Digested bio-effluent is packaged as pathogen-free organic nitrogen fertilizer, closing the ecological cycle for local farming cooperatives.',
    image: '/assets/images/biogas_demonstration_unit.png',
    leadInvestigator: 'Dr. Yusuf Abdullahi & Agro Tech Unit',
    status: 'Community Pilot Active',
    trl: 'TRL 8',
    specs: [
      { label: 'Methane Purity', value: '68.5% CH₄' },
      { label: 'Daily Yield', value: '14.2 m³' },
      { label: 'LPG Offset', value: '₦185k/mo' },
    ],
  },
];

export const NEWS_DISPATCHES: NewsArticle[] = [
  {
    id: 'news-grad-2024',
    title: 'TCECEED Celebrates Graduation of Inaugural 6-Month Clean Energy & Solar PV Technology Cohort in Partnership with True-Blue Energy Services',
    category: 'programmes',
    categoryLabel: 'Hosted Programme Milestone',
    date: 'May 2024',
    year: 2024,
    readTime: '4 min read',
    summary: 'The Centre has successfully concluded its landmark capacity intervention, awarding accredited competence certificates to 45+ polytechnic engineers and youth technicians. The extensive curriculum featured field-level solar inverter diagnostics, multi-panel string sizing, safety grounding, and agricultural waste biogas digester construction.',
    image: '/assets/images/graduates_alumni_group.png',
    tags: ['45 Certified Technicians', 'True-Blue Energy Accord', 'NABTEB Verified'],
    author: 'Secretariat Dispatch Office',
    featured: true,
    downloadable: true,
  },
  {
    id: 'news-fabrication-bays',
    title: 'Federal Polytechnic Nasarawa Expands Fabrication Bays for Micro-Grid Development and Low-Speed Wind Turbines',
    category: 'general',
    categoryLabel: 'Infrastructure Expansion',
    date: 'April 18, 2024',
    year: 2024,
    readTime: '3 min read',
    summary: 'Upgraded workshops now accommodate precision sheet-metal cutting, wind turbine blade pitch balancing, and heavy transformer casing fabrication to support sub-Saharan village mini-grids.',
    image: '/assets/images/workshop_fabrication_hall.png',
    tags: ['Infrastructure', 'TETFund Intervention', 'Wind Turbine'],
    author: 'Directorate of Works',
  },
  {
    id: 'news-commercialization-accord',
    title: 'TCECEED Secures Bilateral Clean-Tech Commercialization Accord with Transblue Energy Konsult Limited',
    category: 'general',
    categoryLabel: 'Strategic Partnership',
    date: 'March 29, 2024',
    year: 2024,
    readTime: '3 min read',
    summary: 'Under the 3-year renewable accord, student and faculty solar PV prototypes developed in the innovation incubator will be matched with private capital for distribution in agro-allied corridors.',
    image: '/assets/images/director_accord_signing.png',
    tags: ['Strategic Partnership', 'Technology Transfer', 'Incubation'],
    author: 'Commercialization Desk',
  },
  {
    id: 'news-ministerial-delegation',
    title: 'Ministerial Delegation from Federal Ministry of Education Inspects State-of-the-Art Biogas and Photovoltaic Laboratories at Nasarawa',
    category: 'reports',
    categoryLabel: 'Federal Governance',
    date: 'February 14, 2024',
    year: 2024,
    readTime: '5 min read',
    summary: 'High-level inspectors commended the research centre’s benchmark equipment standards, highlighting the high-output spectrometer and modular anaerobic digestion testing stations as national best practices.',
    image: '/assets/images/solar_panels_rig.png',
    tags: ['Federal Inspection', 'Accreditation', 'FME Oversight'],
    author: 'Office of the Rector',
  },
  {
    id: 'news-biogas-bulletin',
    title: 'Research Bulletin: Optimizing Biogas Yield in Agrarian North-Central Nigerian Climates Using Cassava Peel Substrates',
    category: 'research',
    categoryLabel: 'Academic Publication',
    date: 'January 2024',
    year: 2024,
    readTime: '6 min read',
    summary: 'TCECEED research team publishes breakthrough data on anaerobic digestate retention ratios using cassava peel and cattle dung biomass combinations, recording 68.5% methane concentration.',
    image: '/assets/images/biogas_demonstration_unit.png',
    tags: ['Biogas Research', 'Peer-Reviewed', 'Bio-Energy'],
    author: 'Dr. Yusuf Abdullahi',
    downloadable: true,
  },
  {
    id: 'news-inverter-masterclass',
    title: 'Grassroots Solar Microgrid Wiring & Circuitry Practical Training Masterclass Enrolls 60 Technical Apprentices',
    category: 'programmes',
    categoryLabel: 'Technical Masterclass',
    date: 'November 2023',
    year: 2023,
    readTime: '4 min read',
    summary: 'Engineers, polytechnic apprentices, and vocational scholars completed step-by-step printed circuit board assembly, pure sine wave inverter troubleshooting, and micro-grid sub-station synchronizer configuration.',
    image: '/assets/images/circuit_inverter_assembly.png',
    tags: ['Inverter Lab', 'Artisan Skilling', 'Microgrids'],
    author: 'Engr. M. K. Tanko',
  },
];


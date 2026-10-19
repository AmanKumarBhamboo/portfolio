export const profile = {
  name: "Aman Kumar Bhamboo",
  short: "Aman Bhamboo",
  role: "Data Analyst & Researcher",
  email: "amankumarbhamboo14022005@gmail.com",
  phone: "+91 63677 55376",
  phoneHref: "tel:+916367755376",
  location: "Jhunjhunu, India",
  resume: "/Aman_Kumar_Bhamboo_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AmanKumarBhamboo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aman1402/" },
    { label: "Instagram", href: "https://www.instagram.com/__aman___1402/" },
  ],
};

export const stats = [
  { value: "3.1M", label: "LAPD records processed in an under-6-minute ETL" },
  { value: "₹229B", label: "in sales audited for discount leakage" },
  { value: "IEEE", label: "published research on brain MRI segmentation" },
];

export const projects = [
  {
    slug: "la-crime-analysis",
    n: "01",
    title: "LA Crime Analysis",
    kind: "Spatial & time-series dashboard",
    year: "2010–2024",
    tools: ["Python", "Tableau", "ETL"],
    githubUrl: "https://github.com/AmanKumarBhamboo/la-crime-Analysis",
    tableauUrl:
      "https://public.tableau.com/app/profile/aman.bhamboo/viz/MappingCrimeinLosAngles/Dashboard1",
    summary:
      "A safety map and history book combined — 14 years of crime data across Los Angeles, showing leaders and police exactly where, when, and to whom crimes are happening.",
    impact:
      "City planners and police can identify high-crime neighborhoods and times, enabling smarter patrol deployment and data-driven safety policies.",
    scope:
      "Over 209,000 crime incidents across Los Angeles from 2010 to 2024, covering demographics and time trends.",
    metrics: [
      { k: "209,325", v: "crimes tracked, a 24.54% period-over-period increase" },
      { k: "Victims", v: "gender & race breakdown to identify targeted groups" },
      { k: "Time of day", v: "Morning, Afternoon, Evening, Night segmentation" },
      { k: "Status", v: "arrests (adult/juvenile) versus unresolved cases" },
    ],
    skills: [
      "Geographic mapping — plotting crime data on real-world maps",
      "Trend tracking — year-over-year monthly comparisons",
      "Thematic dashboard design — a samurai/sword theme for engaging visualization",
    ],
  },
  {
    slug: "olist-analytics",
    n: "02",
    title: "Olist Customer Churn & Executive Overview",
    kind: "E-commerce BI dashboard",
    year: "Brazil marketplace",
    tools: ["SQL", "Python", "Tableau"],
    githubUrl: "https://github.com/AmanKumarBhamboo/olist_analytics",
    tableauUrl:
      "https://public.tableau.com/app/profile/aman.bhamboo/viz/OlistAnalyticsDashboard_17812419259250/OlistExecutiveOverview",
    summary:
      "A health check-up for a massive online marketplace — messy sales data turned into clear charts for revenue, customer satisfaction, and order performance.",
    impact:
      "Executives can instantly spot sales drops or satisfaction issues and ask targeted questions, keeping the business growing.",
    scope: "Nearly 100,000 orders from over 96,000 unique customers.",
    metrics: [
      { k: "R$ 13.59M", v: "total revenue in Brazilian currency" },
      { k: "R$ 136.68", v: "average order value per transaction" },
      { k: "~100k", v: "delivered orders versus canceled and stuck orders" },
      { k: "1–5★", v: "review score distribution, majority at 5 stars" },
    ],
    skills: [
      "E-commerce business analytics — orders, shipping, and ratings",
      "Distribution bar charts — revenue by product category",
      "Seasonality line charts — high versus slow seasons across months",
    ],
  },
  {
    slug: "discount-leakage-audit",
    n: "03",
    title: "Does Discount Hurt? Revenue Leakage Audit",
    kind: "Financial audit dashboard",
    year: "Corporate network",
    tools: ["Tableau", "Excel", "SQL"],
    githubUrl: "https://github.com/AmanKumarBhamboo/does_discount_hurt",
    tableauUrl:
      "https://public.tableau.com/app/profile/aman.bhamboo/viz/Discounthurts/CorporateRevenueLeakage",
    summary:
      "A digital detective that catches where money leaks out of a company through excessive discounts by cashiers.",
    impact:
      "Visually proves that as discount percentage rises, profit plummets, and ranks every clerk so managers can see who gives away too much.",
    scope: "Over ₹229 billion in total sales across a corporate network.",
    metrics: [
      { k: "₹229.58B", v: "gross revenue before any discounts" },
      { k: "₹11.48B", v: "discount erosion — money lost to discounts" },
      { k: "₹218.10B", v: "net revenue actually retained" },
      { k: "Per clerk", v: "average discount % and orders, tracking individual impact" },
    ],
    skills: [
      "Financial & fraud auditing — raw sales versus actual profit",
      "Dual-axis combo charting — line graphs over bar charts",
      "Root-cause grid analysis — ranking employees to pinpoint problems",
    ],
  },
];

export const papers = [
  {
    title:
      "Deep Learning-Based Approaches for Efficient Brain MRI Segmentation: A Comprehensive Analysis",
    venue: "IEEE — STCR 2025",
    venueFull:
      "Fourth International Conference on Smart Technologies, Communication and Robotics",
    doi: "10.1109/STCR62650.2025.11020327",
    link: "https://doi.org/10.1109/STCR62650.2025.11020327",
    role: "Lead Data Analyst & Machine Learning Researcher",
    contributions: [
      {
        heading: "Data aggregation & preprocessing",
        text: "Aggregated and normalized fragmented MRI datasets across multiple hospital sources, solving data discrepancy and variance issues.",
      },
      {
        heading: "Exploratory analytics & benchmarking",
        text: "Compared traditional deep learning architectures (U-Net, ResNet) with Transformer-based models across multiple performance vectors.",
      },
      {
        heading: "Statistical modeling",
        text: "Benchmarked the stability and precision of an optimized architecture (EVAC+) under strict resource constraints, evaluating boundary precision across adult and pediatric cohorts.",
      },
    ],
  },
  {
    title:
      "Trust-Refined U-Net Ensemble for Uncertainty-Aware Brain Tumor Segmentation",
    venue: "TechRxiv preprint",
    venueFull: "Open-access preprint platform",
    doi: "10.36227/techrxiv.175492140.09803812/v1",
    link: "https://doi.org/10.36227/techrxiv.175492140.09803812/v1",
    role: "Lead Analytics Engineer & Core Architect",
    contributions: [
      {
        heading: "Problem formulation",
        text: "Framed the 'black-box' CNN problem from an analyst's lens: turning unverified machine outputs into trustworthy, risk-calibrated insight.",
      },
      {
        heading: "Uncertainty estimation",
        text: "Used Monte Carlo Dropout at inference to calculate epistemic uncertainty, isolating exactly where the model lacked confidence.",
      },
      {
        heading: "Pipeline optimization",
        text: "Orchestrated a multi-model ensemble pipeline combining specialized spatial architectures.",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Analysis",
    items: [
      { name: "Python (Pandas, NumPy)", note: "Cleaned 9 raw CSVs for Brazilian e-commerce; built a config-driven LAPD ETL pipeline." },
      { name: "Exploratory data analysis", note: "Peak crime hours and weapon patterns across 28 attributes in 3.1M LAPD records." },
      { name: "Cohort & retention", note: "Pinpointed 70% churn within 30 days using cohort pivot queries." },
      { name: "Business metric design", note: "CRR, RPR, LTV, CSAT and NPS from raw marketplace order data." },
    ],
  },
  {
    title: "SQL & BI",
    items: [
      { name: "Advanced SQL (PostgreSQL, MySQL)", note: "LTV and CRR via window functions, CTEs and cohort pivots." },
      { name: "Tableau", note: "4-page executive dashboards with LOD expressions and parameter actions on 1GB+ data." },
      { name: "Data modeling", note: "Normalized fragmented raw schemas into structured PostgreSQL databases." },
    ],
  },
  {
    title: "Pipelines & spreadsheets",
    items: [
      { name: "ETL development", note: "YAML-driven Python pipeline over 3.1M records, data prep under 6 minutes." },
      { name: "Advanced Excel", note: "Lookups, INDEX/MATCH, pivot tables and Power Query." },
      { name: "Spatial & trend analysis", note: "Geographic hotspots via LAT/LON clustering and fulfillment bottlenecks." },
    ],
  },
  {
    title: "Research & tooling",
    items: [
      { name: "Statistical analysis", note: "IEEE STCR 2025 paper benchmarking MRI architectures on computational efficiency." },
      { name: "Matplotlib & Seaborn", note: "Demographic distributions, crime trends and statistical insight during EDA." },
      { name: "Git, GitHub & Jupyter", note: "Version control for pipelines and shared notebooks." },
    ],
  },
];

export const rust = {
  intro:
    "Alongside data work I'm going deep on Rust and systems programming — learning how memory, concurrency and performance work closer to the metal, and bringing that mindset to faster, more reliable data tooling.",
  log: [
    { done: true, text: "Ownership, borrowing & lifetimes" },
    { done: true, text: "Structs, enums & pattern matching" },
    { done: true, text: "Error handling with Result, Option and ?" },
    { done: false, text: "A TCP/HTTP server from scratch (CodeCrafters)" },
    { done: false, text: "Concurrency & async Rust" },
    { done: false, text: "Small CLI tools with Clap" },
  ],
};

export const erp = {
  system: "Microsoft Dynamics NAV (Navision)",
  intro:
    "Day-to-day I analyze data from Microsoft Dynamics NAV — the ERP where inventory, purchasing and fulfillment actually happen. My job is to get that data out cleanly and turn it into reporting people can run a business on.",
  areas: [
    {
      title: "Inventory & supply chain",
      text: "Analyzing stock levels, movement, procurement and fulfillment data to surface shortages, overstock and bottlenecks.",
    },
    {
      title: "Data extraction & ETL",
      text: "Pulling NAV tables and exports into SQL and Python pipelines, cleaning and reshaping them into analysis-ready models.",
    },
    {
      title: "Reporting & dashboards",
      text: "Building recurring reports and BI dashboards on top of ERP data so teams read one consistent version of the numbers.",
    },
  ],
};

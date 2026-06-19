// ============================================================
// SPD Biotech — catalog data
// Sourced from the live spdbiotech.com product catalog (partner
// brands + product families). Contact details below are PLACEHOLDERS
// for the prototype — replace with the real company details.
// ============================================================

export type Solution = {
  slug: string;
  icon: string;
  title: string;
  blurb: string;
  brands: string[];
  products: string[];
  accent: "blue" | "teal" | "green" | "purple" | "orange" | "cyan";
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "fluid-management",
    icon: "🔄",
    title: "Fluid Management & Pumping",
    blurb:
      "Low-shear, accurate fluid transfer for sterile and biopharma processing — from buffer prep to fill-finish.",
    brands: ["NEXT PUMP"],
    products: [
      "NEXT 600-4F peristaltic pump",
      "NEXT 600-1FC YZ25L",
      "NEXT 600-1F",
      "300FJ50 pump head",
      "GARU-PLS",
      "DC pump drives",
    ],
    accent: "blue",
  },
  {
    slug: "filtration",
    icon: "💧",
    title: "Filtration & Clarification",
    blurb:
      "Sterilizing-grade and depth filtration for clarification, bioburden reduction and final sterile filtration.",
    brands: ["Lepure", "Filtrox"],
    products: [
      "LeSiever® sterilizing capsule filter",
      "Lepure filter cartridges",
      "Filtrox NOVOX® CP depth filter",
      "DISCSTAR® G depth filter modules",
      "Depth filter sheets",
      "DISCSTAR® housings",
    ],
    accent: "cyan",
  },
  {
    slug: "integrity-testing",
    icon: "🧪",
    title: "Integrity Testing",
    blurb:
      "Automated filter and glove integrity testing to validate sterile barriers and isolator gloves.",
    brands: ["Neuronbc"],
    products: [
      "Filter Integrity Tester V8.0",
      "Glove Integrity Tester GT-2.0 (Offline)",
      "Glove Integrity Tester GT-2.0 (Online)",
      "Wireless Glove Integrity Tester WGT-1000",
      "Wireless Glove Integrity Tester WGT-1200",
    ],
    accent: "purple",
  },
  {
    slug: "single-use-tubing",
    icon: "🧬",
    title: "Single-Use Systems & Tubing",
    blurb:
      "Form-fill-seal systems and pharma-grade tubing for closed, single-use processing trains.",
    brands: ["Kiefel Technologies", "Ami Polymer"],
    products: [
      "Kiefel Form-Fill-Seal (FFS) system",
      "Platinum-cured silicone tubing",
      "Thermoplastic elastomer (TPE) tubing",
      "Platinum-cured silicone hose",
    ],
    accent: "teal",
  },
  {
    slug: "disinfection",
    icon: "🛡️",
    title: "Disinfection & Sanitation",
    blurb:
      "Dry-fog and surface disinfection systems for cleanrooms, isolators and controlled environments.",
    brands: ["Sanosil"],
    products: [
      "Q-Jet CT10 dry-fog disinfection unit",
      "Q-Jet CT20 dry-fog disinfection unit",
      "Sanosil S015 disinfectant",
    ],
    accent: "green",
  },
  {
    slug: "washing-sterilization",
    icon: "♨️",
    title: "Washing & Sterilization",
    blurb:
      "GMP washer-disinfectors and steam sterilizers with validated cycles for parts, vessels and components.",
    brands: ["Belimed"],
    products: [
      "Belimed PH 810 / PH 8x0.2 washers",
      "WD 750IND washer-disinfector",
      "LST & BST autoclave sterilizers",
      "Washing racks & load carriers",
    ],
    accent: "orange",
  },
];

export type Brand = {
  name: string;
  focus: string;
};

export const BRANDS: Brand[] = [
  { name: "NEXT PUMP", focus: "Process pumps" },
  { name: "Lepure", focus: "Sterilizing filtration" },
  { name: "Filtrox", focus: "Depth filtration" },
  { name: "Neuronbc", focus: "Integrity testing" },
  { name: "Kiefel", focus: "Form-fill-seal systems" },
  { name: "Ami Polymer", focus: "Silicone & TPE tubing" },
  { name: "Sanosil", focus: "Disinfection systems" },
  { name: "Belimed", focus: "Washing & sterilization" },
];

export type ValueProp = {
  icon: string;
  title: string;
  body: string;
};

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "🏅",
    title: "Authorised distribution",
    body: "Official partner for leading global biopharma equipment brands across Thailand.",
  },
  {
    icon: "🔬",
    title: "GMP-grade expertise",
    body: "Solutions selected for sterile, aseptic and bioprocessing environments that meet GMP expectations.",
  },
  {
    icon: "🛠️",
    title: "Local technical support",
    body: "Installation, qualification (IQ/OQ) support, calibration and spare parts handled by a Bangkok-based team.",
  },
  {
    icon: "🤝",
    title: "End-to-end partnership",
    body: "From process consultation and sizing to commissioning and aftermarket service.",
  },
];

export const STATS = [
  { value: "8", label: "Global partner brands" },
  { value: "6", label: "Process solution areas" },
  { value: "100%", label: "Pharma & biotech focus" },
  { value: "Thailand", label: "Sales & service coverage" },
];

// Official company description (provided by the client, verbatim).
export const COMPANY = {
  nameTh: "บริษัท เอสพีดี ไบโอเทค จำกัด",
  descriptionTh:
    "บริษัท เอสพีดี ไบโอเทค จำกัด ประกอบกิจการนำเข้า ส่งออก เพื่อจำหน่าย เครื่องมือ อุปกรณ์ วัสดุ ทางด้านวิทยาศาสตร์และทางการแพทย์ทุกประเภท รวมถึงงานบริการที่เกี่ยวกับสินค้าดังกล่าว",
  businessCategoryTh: "การขายส่งสินค้าทางเภสัชภัณฑ์และทางการแพทย์",
};

export type TeamMember = {
  name: string;
  title: string;
  featured?: boolean;
};

// SPD Biotech Team — from the company About page.
export const TEAM: TeamMember[] = [
  { name: "Duangta Urasilp", title: "Managing Director", featured: true },
  { name: "Sakaorat Teeravitthayaart", title: "Application Manager" },
  { name: "Kwanchai Arunpoo", title: "Assistant After Sales Service Manager" },
  { name: "Neungruthai Thamteang", title: "Senior Product Specialist" },
  // Title not visible in the source image — update with the real role.
  { name: "Wilasinee Saeneab", title: "Team Member" },
];

export type Product = {
  id: string;
  name: string;
  nameEn?: string;
  brand?: string;
  tone: "tube" | "device" | "liquid" | "kit" | "air";
  icon: string;
  // Real product photo under /public. Falls back to the icon placeholder
  // if the file is missing, so it's safe to set before the file exists.
  image?: string;
};

// Featured products ("สินค้าแนะนำ") shown on the homepage.
export const PRODUCTS: Product[] = [
  { id: "imaflow", name: "Imaflow", nameEn: "Platinum-cured silicone transparent tube", brand: "Ami Polymer", tone: "tube", icon: "➿" ,image: "/products/297849.jpg"},
  { id: "imapure", name: "Imapure", nameEn: "Platinum-cured silicone tube — regulatory market", brand: "Ami Polymer", tone: "tube", icon: "➿",image: "/products/297848.jpg"},
  { id: "imapex", name: "Imapex", nameEn: "Peroxide-cured silicone tube", brand: "Ami Polymer", tone: "tube", icon: "➿",image: "/products/297847.jpg"},
  { id: "air-sampler", name: "Air Sampler", nameEn: "Microbial air sampler", tone: "air", icon: "🌬️",image: "/products/297846.jpg"},
  { id: "filter-integrity", name: "เครื่องทดสอบการรั่วของไส้กรอง", nameEn: "Filter Integrity Tester", brand: "Neuronbc", tone: "device", icon: "📟", image: "/products/filter-integrity-tester.jpg" },
  { id: "glove-integrity", name: "เครื่องทดสอบการรั่วของถุงมือ", nameEn: "Glove Integrity Tester", brand: "Neuronbc", tone: "device", icon: "📟" ,image: "/products/297844.jpg"},
  { id: "disinfectant-test-kit", name: "ชุดทดสอบปริมาณน้ำยาพ่นฆ่าเชื้อ", nameEn: "Disinfectant concentration test kit", brand: "Sanosil", tone: "kit", icon: "🧪",image: "/products/297842.jpg"},
  { id: "sanosil-5kg", name: "น้ำยาพ่นฆ่าเชื้อ ขนาด 5 kg", nameEn: "Sanosil S015 disinfectant — 5 kg", brand: "Sanosil", tone: "liquid", icon: "🛢️",image: "/products/297840.jpg"},
  { id: "sanosil-1kg", name: "น้ำยาพ่นฆ่าเชื้อ ขนาด 1 kg", nameEn: "Sanosil S015 disinfectant — 1 kg", brand: "Sanosil", tone: "liquid", icon: "🧴" ,image: "/products/297837.jpg"},
  { id: "qjet-ct20", name: "เครื่องพ่นฆ่าเชื้อด้วยระบบ Aerosol", nameEn: "Q-Jet CT20 aerosol disinfection system", brand: "Sanosil", tone: "device", icon: "💨" ,image: "/products/297476.jpg"},
  { id: "qjet-ct10", name: "เครื่องพ่นฆ่าเชื้อด้วยระบบ Aerosol", nameEn: "Q-Jet CT10 portable aerosol fogger", brand: "Sanosil", tone: "device", icon: "💨" ,image: "/products/297849.jpg"},
];

// Placeholder contact info — update with real SPD Biotech details.
export const CONTACT = {
  email: "info@spdbiotech.com",
  phone: "+66 2 000 0000",
  address: "Phra Khanong, Bangkok, Thailand",
  website: "spdbiotech.com",
};

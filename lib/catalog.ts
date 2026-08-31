// ============================================================
// SPD Biotech — static catalog data (solutions, brands, team…).
// Products and news now live in Supabase — see lib/data.ts.
// Contact details below are PLACEHOLDERS for the prototype.
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

// ── Product taxonomy ─────────────────────────────────────────
// Two top-level groups, each holding its own sub-categories.
// A product's `category` field stores the SUB-CATEGORY title.
export type CategorySub = {
  title: string;
  brands: string[];
  /** Shown instead of a product grid when the sub-category has no products yet. */
  contact?: { th: string; en: string; phone: string };
};

export type CategoryGroup = {
  key: string;
  title: string;
  subs: CategorySub[];
};

export const PRODUCT_GROUPS: CategoryGroup[] = [
  {
    key: "production",
    title: "Production Purpose",
    subs: [
      { title: "Autoclave / Steam Sterilizer", brands: ["SteelcoBelimed"] },
      { title: "Washer", brands: ["SteelcoBelimed"] },
      { title: "Upstream Fermenter / Bioreactor", brands: ["Bioengineering", "Le Pure"] },
      { title: "Single-Use Mixer / Single-Use Bag", brands: ["Le Pure", "PharmNXT Biotech", "Ami Polymer"] },
      { title: "GMP Cell Culture Media for Protein Base", brands: ["Lonza"] },
      { title: "Liquid / Air Filtration", brands: ["Filtrox", "Le Pure"] },
      { title: "Silicone Tubing / Connectors", brands: ["Ami Polymer"] },
      { title: "Downstream Ion Chromatography", brands: ["VERDOT"] },
      { title: "Downstream Ion Chromatography Resin", brands: ["ECOLAB"] },
      { title: "Advanced Fluid & Cold Chain Management", brands: ["Single Use Support"] },
      { title: "Bioprocess Equipment", brands: ["PharmNXT Biotech"] },
      {
        title: "ATMP Isolator",
        brands: [],
        contact: {
          th: "\u0e16\u0e49\u0e32\u0e2a\u0e19\u0e43\u0e08\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49 \u0e42\u0e1b\u0e23\u0e14\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e1a\u0e2d\u0e23\u0e4c",
          en: "If you are interested in this product, please call",
          phone: "095-559-4658",
        },
      },
      { title: "Rapid Validation Enzyme Indicator", brands: ["Protak Scientific"] },
      { title: "Surface Disinfection", brands: ["Sanosil"] },
      { title: "Air Sampler / Environmental Monitoring", brands: [] },
    ],
  },
  {
    key: "lab",
    title: "Laboratory / QC Purpose",
    subs: [
      { title: "Filter Integrity Tester, Packing Leak Tester, Glove Integrity Test, Bag Integrity Tester", brands: ["Neuron BC"] },
      { title: "Laboratory Autoclave", brands: ["SteelcoBelimed"] },
      { title: "Undercounter Laboratory Washer", brands: ["SteelcoBelimed"] },
      { title: "Laboratory / Bench Top Fermentor / Bioreactor", brands: ["Bioengineering"] },
      { title: "Silicone Tubing for Laboratory", brands: ["Ami Polymer"] },
      { title: "Filtration Trials Test Kit for Scale-up", brands: ["Filtrox"] },
      { title: "Vacuum Filter Unit / Air Filter Disc / Capsule", brands: ["Le Pure"] },
      // Shared with Production Purpose: these serve both settings, so they are
      // listed at the end of both groups and the same products appear in each.
      { title: "Surface Disinfection", brands: ["Sanosil"] },
      { title: "Air Sampler / Environmental Monitoring", brands: [] },
    ],
  },
];

// Flat list of every sub-category title, in display order.
// Used by the admin form dropdown and the catalog page.
export const PRODUCT_CATEGORIES = [
  ...new Set(PRODUCT_GROUPS.flatMap((g) => g.subs.map((s) => s.title))),
];

export type ProductCategory = string;

export const PRODUCT_TONES = ["tube", "device", "liquid", "kit", "air"] as const;
export type ProductTone = (typeof PRODUCT_TONES)[number];

export const NEWS_ACCENTS = ["green", "teal", "blue", "purple", "cyan", "orange"] as const;
export type NewsAccent = (typeof NEWS_ACCENTS)[number];

export type ProductSpec = { label: string; value: string };

// Product — stored in Supabase (public.products). See lib/data.ts.
export type Product = {
  id: string;
  name: string;
  nameEn?: string;
  brand?: string;
  category: string;
  tone: ProductTone;
  icon: string;
  image?: string;
  // Detail-page content
  tagline?: string;
  description?: string;
  specs?: ProductSpec[];
  sortOrder?: number;
};

// News / article — stored in Supabase (public.news). See lib/data.ts.
export type NewsArticle = {
  id?: string;
  slug: string;
  category: string;
  date: string; // pre-formatted display date (avoids hydration locale mismatch)
  title: string;
  excerpt: string;
  icon: string;
  accent: NewsAccent;
  image?: string;
  content?: string;
  sortOrder?: number;
};

// Placeholder contact info — update with real SPD Biotech details.
export const CONTACT = {
  emails: ["sales@spdbiotech.com", "support@spdbiotech.com", "ps@spdbiotech.com"],
  phones: ["+66 21854333 ต่อ 2202", "+66 986017542", "+66 955594658"],
  address: "79 Soi Srinakarin 40, Nong Bon, Prawet, Bangkok 10250",
  website: "spdbiotech.com",
};

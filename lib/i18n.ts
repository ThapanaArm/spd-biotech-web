export type Lang = "en" | "th";
export const LANGS: Lang[] = ["en", "th"];
export const DEFAULT_LANG: Lang = "en";

const en = {
  nav: {
    why: "Why SPD",
    solutions: "Solutions",
    products: "Products",
    news: "News & Events",
    contact: "Contact",
    quote: "Request a quote",
  },
  hero: {
    badge: "Pharmaceutical & biopharma equipment · Thailand",
    titleA: "Advancing Biotech",
    titleB: "& Pharma Solutions",
    desc: "Trusted provider of lab equipment, consumables, engineering services, and scientific solutions.",
    explore: "Explore Solutions",
    talk: "Talk to an engineer →",
    cardTitle: "Process solution areas",
    cardPill: "6 categories",
    features: [
      { title: "High Quality", sub: "Certified & reliable" },
      { title: "Advanced Technology", sub: "Cutting-edge innovation" },
      { title: "Sustainable Solutions", sub: "For a better tomorrow" },
    ],
    cards: {
      "fluid-management": "Reliable transfer and control of critical fluids.",
      filtration: "High-performance filtration for pure results.",
      "single-use-tubing": "Flexible, efficient, and contamination-free.",
      disinfection: "Ensure safety, sterility, and compliance.",
    } as Record<string, string>,
  },
  why: {
    aboutEyebrow: "About SPD Biotech",
    companyName: "SPD Biotech Co., Ltd.",
    companyDesc:
      "SPD Biotech Co., Ltd. imports, exports and distributes all kinds of scientific and medical instruments, equipment and materials, including services related to such products.",
    bizLabel: "Business category",
    bizCategory: "Wholesale of pharmaceutical and medical goods",
    stats: [
      "Global partner brands",
      "Process solution areas",
      "Pharma & biotech focus",
      "Sales & service coverage",
    ],
    eyebrow: "Why SPD Biotech",
    heading: "More than a supplier",
    body: "We pair leading equipment brands with local engineering expertise, so your process is supported from selection through to service.",
    values: [
      {
        title: "Authorised distribution",
        body: "Official partner for leading global biopharma equipment brands across Thailand.",
      },
      {
        title: "GMP-grade expertise",
        body: "Solutions selected for sterile, aseptic and bioprocessing environments that meet GMP expectations.",
      },
      {
        title: "Local technical support",
        body: "Installation, qualification (IQ/OQ) support, calibration and spare parts handled by a Bangkok-based team.",
      },
      {
        title: "End-to-end partnership",
        body: "From process consultation and sizing to commissioning and aftermarket service.",
      },
    ],
  },
  solutions: {
    eyebrow: "Our solutions",
    heading: "Equipment for every critical process step",
    body: "A complete portfolio of GMP-grade technology for sterile and biopharma manufacturing — selected from the world's leading brands.",
    items: {
      "fluid-management": {
        title: "Fluid Management & Pumping",
        blurb:
          "Low-shear, accurate fluid transfer for sterile and biopharma processing — from buffer prep to fill-finish.",
      },
      filtration: {
        title: "Filtration & Clarification",
        blurb:
          "Sterilizing-grade and depth filtration for clarification, bioburden reduction and final sterile filtration.",
      },
      "integrity-testing": {
        title: "Integrity Testing",
        blurb:
          "Automated filter and glove integrity testing to validate sterile barriers and isolator gloves.",
      },
      "single-use-tubing": {
        title: "Single-Use Systems & Tubing",
        blurb:
          "Form-fill-seal systems and pharma-grade tubing for closed, single-use processing trains.",
      },
      disinfection: {
        title: "Disinfection & Sanitation",
        blurb:
          "Dry-fog and surface disinfection systems for cleanrooms, isolators and controlled environments.",
      },
      "washing-sterilization": {
        title: "Washing & Sterilization",
        blurb:
          "GMP washer-disinfectors and steam sterilizers with validated cycles for parts, vessels and components.",
      },
    } as Record<string, { title: string; blurb: string }>,
  },
  news: { heading: "News & Events" },
  contact: {
    eyebrow: "Get in touch",
    heading: "Tell us about your process",
    body: "Share your application and our engineers will recommend the right equipment, sizing and configuration — with a quotation to follow.",
    name: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    help: "How can we help?",
    namePh: "Somchai Jaidee",
    companyPh: "Your company Co., Ltd.",
    emailPh: "you@company.com",
    phonePh: "+66 8x xxx xxxx",
    helpPh:
      "Tell us about your application — filtration, single-use, integrity testing, sterilization…",
    send: "Send enquiry",
    success:
      "Thank you — your enquiry has been received. We'll be in touch within 1 business day.",
    openMap: "Open in Google Maps",
  },
  footer: {
    about:
      "SPD Biotech is committed to supporting Thailand's biotechnology and pharmaceutical industries with trusted lab equipment, consumables, engineering services, and scientific solutions.",
    solutions: "Solutions",
    products: "Products",
    contact: "Contact",
    rights: "All rights reserved.",
    proto: "Prototype landing page",
  },
};

export type Dictionary = typeof en;

const th: Dictionary = {
  nav: {
    why: "ทำไมต้อง SPD",
    solutions: "โซลูชัน",
    products: "สินค้า",
    news: "ข่าวสารและกิจกรรม",
    contact: "ติดต่อ",
    quote: "ขอใบเสนอราคา",
  },
  hero: {
    badge: "อุปกรณ์เภสัชและไบโอเทค · ประเทศไทย",
    titleA: "เสริมศักยภาพนวัตกรรม",
    titleB: "ด้านเทคโนโลยีชีวภาพและเภสัชกรรม",
    desc: "จัดจำหน่ายเครื่องมือวิทยาศาสตร์ วัสดุสิ้นเปลือง บริการด้านวิศวกรรม และโซลูชันครบวงจร สำหรับอุตสาหกรรมเทคโนโลยีชีวภาพ เภสัชกรรม และห้องปฏิบัติการวิทยาศาสตร์",
    explore: "ดูโซลูชัน",
    talk: "ปรึกษาวิศวกร →",
    cardTitle: "กลุ่มโซลูชันกระบวนการผลิต",
    cardPill: "6 หมวด",
    features: [
      { title: "คุณภาพสูง", sub: "ได้รับการรับรอง เชื่อถือได้" },
      { title: "เทคโนโลยีล้ำสมัย", sub: "นวัตกรรมล่าสุด" },
      { title: "โซลูชันยั่งยืน", sub: "เพื่ออนาคตที่ดีกว่า" },
    ],
    cards: {
      "fluid-management": "ลำเลียงและควบคุมของเหลวสำคัญได้อย่างแม่นยำ",
      filtration: "การกรองประสิทธิภาพสูงเพื่อผลลัพธ์ที่บริสุทธิ์",
      "single-use-tubing": "ยืดหยุ่น มีประสิทธิภาพ ปลอดการปนเปื้อน",
      disinfection: "มั่นใจความปลอดภัย ปลอดเชื้อ และเป็นไปตามมาตรฐาน",
    },
  },
  why: {
    aboutEyebrow: "เกี่ยวกับ SPD Biotech",
    companyName: "บริษัท เอสพีดี ไบโอเทค จำกัด",
    companyDesc:
      "บริษัท เอสพีดี ไบโอเทค จำกัด ประกอบกิจการนำเข้า ส่งออก เพื่อจำหน่าย เครื่องมือ อุปกรณ์ วัสดุ ทางด้านวิทยาศาสตร์และทางการแพทย์ทุกประเภท รวมถึงงานบริการที่เกี่ยวกับสินค้าดังกล่าว",
    bizLabel: "หมวดธุรกิจ",
    bizCategory: "การขายส่งสินค้าทางเภสัชภัณฑ์และทางการแพทย์",
    stats: [
      "แบรนด์พันธมิตรทั่วโลก",
      "กลุ่มโซลูชันกระบวนการ",
      "มุ่งเน้นเภสัช & ไบโอเทค",
      "ครอบคลุมการขายและบริการ",
    ],
    eyebrow: "ทำไมต้อง SPD Biotech",
    heading: "มากกว่าผู้จัดจำหน่าย",
    body: "เราจับคู่แบรนด์อุปกรณ์ชั้นนำกับความเชี่ยวชาญด้านวิศวกรรมในประเทศ เพื่อดูแลกระบวนการของคุณตั้งแต่การเลือกใช้จนถึงงานบริการ",
    values: [
      {
        title: "ตัวแทนจำหน่ายอย่างเป็นทางการ",
        body: "พันธมิตรอย่างเป็นทางการของแบรนด์อุปกรณ์ไบโอฟาร์มาชั้นนำระดับโลกทั่วประเทศไทย",
      },
      {
        title: "ความเชี่ยวชาญระดับ GMP",
        body: "โซลูชันที่คัดสรรสำหรับสภาพแวดล้อมปลอดเชื้อ aseptic และ bioprocessing ที่ตรงตามข้อกำหนด GMP",
      },
      {
        title: "ทีมสนับสนุนทางเทคนิคในประเทศ",
        body: "ติดตั้ง สนับสนุน qualification (IQ/OQ) สอบเทียบ และอะไหล่ ดูแลโดยทีมงานในกรุงเทพฯ",
      },
      {
        title: "พันธมิตรครบวงจร",
        body: "ตั้งแต่ให้คำปรึกษากระบวนการและการคำนวณขนาด จนถึงการติดตั้งใช้งานและบริการหลังการขาย",
      },
    ],
  },
  solutions: {
    eyebrow: "โซลูชันของเรา",
    heading: "อุปกรณ์สำหรับทุกขั้นตอนการผลิตที่สำคัญ",
    body: "พอร์ตโฟลิโอครบวงจรของเทคโนโลยีระดับ GMP สำหรับการผลิตปลอดเชื้อและไบโอเทค — คัดสรรจากแบรนด์ชั้นนำระดับโลก",
    items: {
      "fluid-management": {
        title: "การจัดการของเหลวและการปั๊ม",
        blurb:
          "ลำเลียงของเหลวแม่นยำ แรงเฉือนต่ำ สำหรับงานปลอดเชื้อและไบโอเทค ตั้งแต่เตรียมบัฟเฟอร์จนถึงการบรรจุ",
      },
      filtration: {
        title: "การกรองและการทำให้ใส",
        blurb:
          "การกรองระดับสเตอริไลซ์และ depth filtration สำหรับทำให้ใส ลด bioburden และการกรองปลอดเชื้อขั้นสุดท้าย",
      },
      "integrity-testing": {
        title: "การทดสอบความสมบูรณ์",
        blurb:
          "ทดสอบความสมบูรณ์ของไส้กรองและถุงมือแบบอัตโนมัติ เพื่อตรวจสอบแนวกั้นปลอดเชื้อและถุงมือไอโซเลเตอร์",
      },
      "single-use-tubing": {
        title: "ระบบ Single-Use และสายยาง",
        blurb:
          "ระบบ form-fill-seal และสายยางเกรดเภสัชสำหรับกระบวนการผลิตแบบปิดและใช้ครั้งเดียว",
      },
      disinfection: {
        title: "การฆ่าเชื้อและสุขอนามัย",
        blurb:
          "ระบบฆ่าเชื้อแบบ dry-fog และพื้นผิว สำหรับห้องสะอาด ไอโซเลเตอร์ และพื้นที่ควบคุม",
      },
      "washing-sterilization": {
        title: "การล้างและสเตอริไลซ์",
        blurb:
          "เครื่องล้างฆ่าเชื้อและสเตอริไลเซอร์ไอน้ำระดับ GMP พร้อมรอบการทำงานที่ผ่านการ validate สำหรับชิ้นส่วน ถัง และอุปกรณ์",
      },
    },
  },
  news: { heading: "ข่าวสารและกิจกรรม" },
  contact: {
    eyebrow: "ติดต่อเรา",
    heading: "บอกเราเกี่ยวกับกระบวนการของคุณ",
    body: "แจ้งลักษณะงานของคุณ แล้ววิศวกรของเราจะแนะนำอุปกรณ์ ขนาด และการตั้งค่าที่เหมาะสม พร้อมใบเสนอราคา",
    name: "ชื่อ-นามสกุล",
    company: "บริษัท",
    email: "อีเมล",
    phone: "โทรศัพท์",
    help: "เราช่วยอะไรได้บ้าง?",
    namePh: "สมชาย ใจดี",
    companyPh: "บริษัทของคุณ จำกัด",
    emailPh: "you@company.com",
    phonePh: "08x xxx xxxx",
    helpPh: "เล่าลักษณะงานของคุณ — การกรอง, single-use, ทดสอบความสมบูรณ์, การฆ่าเชื้อ…",
    send: "ส่งคำขอ",
    success: "ขอบคุณครับ — เราได้รับคำขอของคุณแล้ว จะติดต่อกลับภายใน 1 วันทำการ",
    openMap: "เปิดใน Google Maps",
  },
  footer: {
    about:
      "SPD Biotech มุ่งสนับสนุนอุตสาหกรรมเทคโนโลยีชีวภาพและเภสัชกรรมในประเทศไทย ด้วยเครื่องมือห้องปฏิบัติการ วัสดุสิ้นเปลือง บริการวิศวกรรม และโซลูชันทางวิทยาศาสตร์ที่เชื่อถือได้",
    solutions: "โซลูชัน",
    products: "สินค้า",
    contact: "ติดต่อ",
    rights: "สงวนลิขสิทธิ์",
    proto: "เว็บต้นแบบ",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, th };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? en;
}

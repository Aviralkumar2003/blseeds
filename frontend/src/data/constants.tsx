// MUI Icons
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarsIcon from '@mui/icons-material/Stars';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GavelIcon from '@mui/icons-material/Gavel';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArharSeeds from '../assets/Products/Arhar Seeds.png'
import BlackUradSeedT9 from '../assets/Products/Black Urad Seed - T9.png'
import HaraUrad from '../assets/Products/Hara Urad.png'
import MoongSeedPDM139 from '../assets/Products/Moong Seed - PDM 139.png'
import PalakSeeds from '../assets/Products/Palak seeds.png'
import PeaSeeds from '../assets/Products/Pea Seeds.png'
import UradSeedShekhar2 from '../assets/Products/Urad Seed Shekhar 2.png'
import WheatSeeds from '../assets/Products/Wheat Seeds.png'
import PeaSeedsBL11 from '../assets/Products/PeaSeedsBL11.png'

// ==========================================
// ✅ CENTRAL CONTACT DETAILS — Edit here to update everywhere
// ==========================================
export const CONTACT_DETAILS = {
  phone: '+91 8449050067/+91 7017999052',
  phoneHref: 'tel:+918449050067',
  email: 'info.blseedsfarm@gmail.com',
  emailHref: 'mailto:info.blseedsfarm@gmail.com',
  whatsapp: '+91 8449050067',
  whatsappHref: 'https://wa.me/918449050067',
  address: 'B.L SEEDS FARM, Station road Railmandi, Jaswantnagar, Etawah, 206245',
  businessHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  social: {
    facebook: 'https://www.facebook.com/share/14jmEQoFDxw/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/blseeds',
    linkedin: 'https://www.linkedin.com/company/blseedsfarm/',
  },
};

// ==========================================
// HOME PAGE DATA
// ==========================================
export const homeFeatures = [
  { icon: <VerifiedUserIcon />, title: "High Germination", desc: "Best quality seeds for better yield" },
  { icon: <ScienceIcon />, title: "Lab Tested", desc: "Scientifically tested for quality" },
  { icon: <HealthAndSafetyIcon />, title: "Disease Resistant", desc: "Strong and healthy crop guarantee" },
  { icon: <LocalShippingIcon />, title: "Fast Delivery", desc: "On-time delivery at your doorstep" },
  { icon: <ThumbUpIcon />, title: "Trusted by Farmers", desc: "Hundreds of farmers trust our seeds" },
];

export const homeStats = [
  { val: "5000+", label: "Happy Farmers" },
  { val: "120+", label: "Quality Products" },
  { val: "15+", label: "Years of Experience" },
  { val: "20+", label: "States Covered" },
];

export const testimonials = [
  {
    text: "BL Seeds Farm ke beej ki quality bahut acchi hai. Germination 100% aur production bhi zabardast. Hum hamesha BL Seeds Farm ke saath hain.",
    name: "Ramesh Yadav",
    role: "Farmer, MP",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

// ==========================================
// ABOUT PAGE DATA
// ==========================================
export const aboutValues = [
  { icon: <StarsIcon sx={{ fontSize: '2.5rem' }} />, title: "QUALITY FIRST", desc: "We never compromise on quality. Every seed is tested for best results." },
  { icon: <HandshakeIcon sx={{ fontSize: '2.5rem' }} />, title: "FARMER TRUST", desc: "We believe in long-term relationships built on trust and honesty." },
  { icon: <EmojiObjectsIcon sx={{ fontSize: '2.5rem' }} />, title: "INNOVATION", desc: "We use modern technology and research to bring better seeds." },
  { icon: <GavelIcon sx={{ fontSize: '2.5rem' }} />, title: "INTEGRITY", desc: "Honest in our work, transparent in our deals and committed always." },
  { icon: <NaturePeopleIcon sx={{ fontSize: '2.5rem' }} />, title: "SUSTAINABILITY", desc: "We care for soil, crops and environment for a better tomorrow." },
];

export const aboutJourney = [
  { year: "2015", title: "The Beginning", desc: "Started our journey with a vision to provide quality seeds to farmers." },
  { year: "2017", title: "Growth & Trust", desc: "Gained the trust of farmers and expanded our seed varieties." },
  { year: "2019", title: "Modern Infrastructure", desc: "Established advanced processing and storage facilities." },
  { year: "2021", title: "Wider Reach", desc: "Expanded our network across multiple states in India." },
  { year: "2024 & Beyond", title: "Building the Future", desc: "Continuing our mission to empower farmers with best quality seeds." },
];

// ==========================================
// PRODUCTS PAGE DATA
// ==========================================
export const productCategories = [
  "All Products", "Wheat Seeds", "Mustard Seeds", "Paddy Seeds",
  "Vegetable Seeds", "Hybrid Seeds", "Fodder Seeds", "Flower Seeds", "Other Seeds"
];

export type CropDetailValue = string | string[] | { kharif?: string; summer?: string };

export interface CropDetails {
  [key: string]: CropDetailValue;
}

export interface CropDescription {
  name: string;
  category: string;
  img: any;
  shortDescription: string;
  details: CropDetails;
}

export const cropDescriptions: Record<string, CropDescription> = {
  "Pea Seeds": {
    name: "AP-3 Certified Pea Seed Variety",
    category: "Certified Pea Seed",
    img: PeaSeeds,
    shortDescription:
      "AP-3 Certified Pea Seed is a high-performing variety known for uniform pods, quality green seeds, early maturity, and reliable yields. Ideal for fresh vegetable cultivation and dry seed production in North Indian conditions.",
    details: {
      maturityDuration: "70–75 days after sowing",
      plantGrowth:
        "Semi-spreading to semi-erect plants with an average height of 45–60 cm.",
      podQuality:
        "Smooth, elongated, cylindrical pods containing 6–8 well-filled seeds.",
      seedAppearance:
        "Round, green, and uniform-sized seeds suitable for market and processing.",
      yieldCapacity:
        "Produces good quality yield under proper crop management.",
      sowingTime:
        "Best suited for Rabi cultivation during October–November.",
      diseaseTolerance:
        "Shows good tolerance against powdery mildew and downy mildew.",
      advantages: [
        "Suitable for fresh vegetable use and dry seed production",
        "Performs well in North Indian plains",
        "Preferred for uniform pod quality and better market value",
      ],
      packingSizes: ["5 Kg", "10 Kg", "40 Kg"],
    },
  },

  "Arhar Seeds": {
    name: "Arhar Seeds",
    category: "Seed Variety",
    img: ArharSeeds,
    shortDescription:
      "A high-yielding late-duration variety with strong wilt resistance and vigorous plant growth. Well-suited for Kharif cultivation in North Indian plains.",
    details: {
      maturityDuration: "250–260 days",
      sowingSeason: "Kharif season, preferably around July",
      yieldPotential: "Excellent yield capacity under favorable conditions",
      plantGrowth:
        "Tall and vigorous plants reaching 2–3 meters in height.",
      seedCharacteristics:
        "Yellow-brown medium-sized seeds with good market appeal.",
      diseaseTolerance: "Strong resistance to wilt disease.",
      adaptability:
        "Suitable for plains of North India including Uttar Pradesh and Bihar.",
      croppingFlexibility:
        "Suitable for intercropping and mixed cropping systems.",
    },
  },

  "B.L-11 Pea Seeds": {
    name: "B.L.-11 Certified Pea Seed Variety",
    category: "Pea Seed",
    img: PeaSeedsBL11,
    shortDescription:
      "B.L.-11 is a high-yielding mid-duration pea variety known for its long dark green pods, sweet tender seeds, and strong plant growth.",
    details: {
      cropDuration: "85–90 days after sowing",
      plantGrowth:
        "Healthy vigorous plants with 65–75 cm vine length and dense dark green foliage.",
      podFormation: "Typically develops 2 pods per node.",
      podAppearance:
        "Long, smooth, attractive dark green pods measuring 10–12 cm.",
      seedQuality:
        "Each pod contains 9–12 soft and sweet green seeds.",
      productionCapacity:
        "Known for excellent yield performance in commercial cultivation.",
      diseaseTolerance:
        "Good tolerance against powdery mildew and changing weather conditions.",
      marketSuitability:
        "Suitable for fresh vegetable markets and processing industries.",
    },
  },

  "Black Urad Seed – T9": {
    name: "T9 Black Gram Variety",
    category: "Black Gram Seed",
    img: BlackUradSeedT9,
    shortDescription:
      "T9 is an early maturing black gram variety trusted for its reliable yield, uniform seed quality, and strong adaptability.",
    details: {
      maturityDuration: "70–75 days",
      plantType:
        "Medium-height plants with semi-erect growth habit.",
      seedCharacteristics:
        "Small to medium-sized light black to dull black seeds.",
      podCharacteristics:
        "Each pod generally contains 10–12 seeds.",
      yieldPotential:
        "Provides reliable and satisfactory yield under proper cultivation.",
      sowingTime: "Kharif season (June–July)",
      suitableAreas:
        "Well adapted to Uttar Pradesh, Madhya Pradesh, and North Indian regions.",
      specialFeature:
        "One of the earliest and widely trusted improved black gram varieties in India.",
    },
  },

  "Hara Urad": {
    name: "Hara Urad",
    category: "Urad Seed",
    img: HaraUrad,
    shortDescription:
      "Hara Urad is an early to medium duration variety known for its green shiny seeds, strong branching, and dependable yield performance.",
    details: {
      maturityDuration: "75–80 days",
      plantType:
        "Medium-height semi-erect plants with good branching.",
      seedCharacteristics:
        "Medium-sized shiny green seeds.",
      podCharacteristics:
        "Medium-length pods containing 6–8 seeds.",
      yieldPotential:
        "Produces reliable yield under good farming practices.",
      diseaseResistance:
        "Shows tolerance against Yellow Mosaic Virus (YMV) and leaf diseases.",
      sowingTime: { kharif: "June–July", summer: "March–April" },
      suitableRegions:
        "Suitable for Uttar Pradesh, Haryana, Delhi, and nearby North Indian regions.",
    },
  },

  "Moong Seed (PDM-139)": {
    name: "Moong Seed (PDM-139)",
    category: "Moong Seed",
    img: MoongSeedPDM139,
    shortDescription:
      "PDM-139 is a fast-growing moong seed variety known for its bold green seeds, early maturity, and reliable yield performance.",
    details: {
      maturityDuration: "60–65 days",
      plantStructure:
        "Semi-erect bushy plants with average height of 40–50 cm.",
      podDetails:
        "Medium-length pods (6–7 cm) containing 9–10 well-filled seeds.",
      seedQuality:
        "Bold, glossy, bright green seeds with strong market appeal.",
      sowingPeriod: { kharif: "June–July", summer: "March–April" },
      diseaseTolerance:
        "Strong tolerance against YMV and powdery mildew.",
      additionalBenefits: [
        "Suitable for crop rotation",
        "Suitable for intercropping systems",
        "Performs best in well-drained sandy loam soils",
      ],
    },
  },

  "Palak Seeds": {
    name: "Palak Seeds (All Green Variety)",
    category: "Palak Seed",
    img: PalakSeeds,
    shortDescription:
      "All Green Palak is a fast-growing spinach variety known for its lush deep green leaves, quick harvest, and multiple cutting potential.",
    details: {
      cropDuration: "25–30 days",
      plantGrowthHabit:
        "Erect to semi-spreading plants with thick leafy cover.",
      leafQuality:
        "Deep green, soft, smooth leaves of medium to large size.",
      seedFeatures:
        "Small rounded light brown seeds with excellent germination.",
      sowingTime:
        "Can be cultivated year-round; best performance from October to March.",
      diseaseTolerance:
        "Good tolerance against downy mildew and leaf spot.",
      advantages: [
        "Ideal for multiple harvests",
        "Produces lush green leaves",
        "Suitable for open field and protected farming",
        "Ensures consistent yield",
      ],
    },
  },

  "Urad Seed – Shekhar-2 (Bhura)": {
    name: "Urad Seed – Shekhar-2 (Bhura)",
    category: "Urad Seed",
    img: UradSeedShekhar2,
    shortDescription:
      "Shekhar-2 (Bhura) is a quick-maturing urad variety valued for its uniform seeds, stable yield, and strong disease tolerance.",
    details: {
      maturityDuration: "70–80 days",
      plantProfile:
        "Medium-height plants with broad leaves and balanced branching.",
      seedFeatures:
        "Green to dull-green medium-sized seeds with good uniformity.",
      podDetails:
        "Brownish slightly hairy medium-length pods.",
      yieldPerformance:
        "Provides stable and satisfactory yield under proper cultivation.",
      diseaseTolerance:
        "Good resistance against Yellow Mosaic Virus (YMV) and leaf diseases.",
      growingSeason: ["Kharif", "Zaid (Summer)"],
      recommendedAreas:
        "Suitable for cultivation across North Indian regions including Punjab.",
    },
  },

  "Wheat Seeds (Sarpanch 303)": {
    name: "Wheat Seed Variety - Sarpanch 303",
    category: "Wheat Seed",
    img: WheatSeeds,
    shortDescription:
      "Sarpanch 303 is a high-yielding wheat seed variety known for strong plant growth, bold grain quality, and reliable field performance.",
    details: {
      cropDuration: "115–130 days",
      plantGrowth:
        "Strong and uniform growth with healthy tillering and sturdy stems.",
      grainFormation:
        "Produces well-filled and uniform grains with excellent grain setting.",
      grainAppearance:
        "Bold, bright, attractive grains with good shine.",
      seedQuality:
        "High germination percentage with strong root establishment.",
      productionCapacity:
        "High yield potential and dependable field performance.",
      diseaseTolerance:
        "Better tolerance against common wheat diseases.",
      marketSuitability:
        "Suitable for commercial cultivation and grain markets.",
    },
  },
};


// ==========================================
// CONTACT PAGE DATA
// ==========================================
export const contactInfo = [
  { icon: <PhoneIcon />, title: "Call Us", content: CONTACT_DETAILS.phone, sub: "Mon - Sat: 9:00 AM - 6:00 PM" },
  { icon: <EmailIcon />, title: "Email Us", content: CONTACT_DETAILS.email, sub: "We reply within 24 hours" },
  { icon: <LocationOnIcon />, title: "Our Address", content: CONTACT_DETAILS.address },
  { icon: <AccessTimeIcon />, title: "Business Hours", content: CONTACT_DETAILS.businessHours, sub: "Sunday Closed" },
  { icon: <WhatsAppIcon />, title: "WhatsApp", content: CONTACT_DETAILS.whatsapp, sub: "Chat with us on WhatsApp" },
];

export const whyConnectReasons = [
  { icon: <SupportAgentIcon />, title: "Quick Support", desc: "We provide fast and reliable support." },
  { icon: <HeadsetMicIcon />, title: "Expert Guidance", desc: "Get advice from our agriculture experts." },
  { icon: <VerifiedIcon />, title: "Quality Assured", desc: "We deliver only lab tested and high quality seeds." },
  { icon: <LocalShippingIcon />, title: "Timely Delivery", desc: "On-time and safe delivery across India." },
  { icon: <HandshakeIcon />, title: "Trusted by Farmers", desc: "Thousands of farmers trust our seeds." },
];

// ==========================================
// DEALER ENQUIRY DATA
// ==========================================
export const dealerBenefits = [
  { icon: <HandshakeIcon />, title: "Trusted Partnership", desc: "Build a long-term and profitable partnership with BL Seeds Farm." },
  { icon: <VerifiedIcon />, title: "High Quality Products", desc: "Wide range of high germination seeds trusted by thousands of farmers." },
  { icon: <LocalShippingIcon />, title: "Timely Supply", desc: "Assured quality and on-time delivery across all regions." },
  { icon: <AccountBalanceWalletIcon />, title: "Better Margins", desc: "Attractive dealer benefits and competitive pricing." },
];

// ==========================================
// GALLERY PAGE DATA
// ==========================================
export const galleryCategories = ["All Photos", "Our Farms", "Infrastructure", "Seed Processing", "Products", "Events"];

export const galleryImages = [
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Our Farms", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2044&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Infrastructure", img: "https://images.unsplash.com/photo-1532187875605-2fe359520337?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1628543102308-9a4c1a39ef81?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Seed Processing", img: "https://images.unsplash.com/photo-1594913785162-e678ac0570da?q=80&w=2069&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1974&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" },
  { cat: "Events", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
];

// ==========================================
// BLOG PAGE DATA
// ==========================================
export const blogCategories = [
  { name: "Farming Tips", count: 12 },
  { name: "Crop Guide", count: 10 },
  { name: "Seeds Information", count: 8 },
  { name: "Agriculture News", count: 9 },
  { name: "Organic Farming", count: 6 }
];

export const blogPosts = [
  {
    id: 1,
    title: "7 Essential Tips for Better Seed Germination and Higher Yield",
    category: "FARMING TIPS",
    date: "May 20, 2024",
    readTime: "5 min read",
    excerpt: "Good germination is the first step towards a successful harvest. Follow these proven tips to get the best results from your seeds.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Complete Guide to Mustard Farming: Sowing to Harvest",
    category: "CROP GUIDE",
    date: "May 15, 2024",
    readTime: "4 min read",
    excerpt: "A step-by-step guide for growing healthy mustard crops with high oil content and maximum yield.",
    img: "https://images.unsplash.com/photo-1628543102308-9a4c1a39ef81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Why Quality Wheat Seeds Make a Big Difference in Productivity?",
    category: "SEEDS INFORMATION",
    date: "May 10, 2024",
    readTime: "4 min read",
    excerpt: "High quality seeds ensure better germination, strong plants and maximum yield. Know what to look for.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Best Fertilizer Practices for Healthy Crops and Better Yield",
    category: "FARMING TIPS",
    date: "May 05, 2024",
    readTime: "6 min read",
    excerpt: "Choosing the right fertilizer at the right time can significantly improve soil health and crop productivity.",
    img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1950&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Smart Irrigation Techniques to Save Water and Increase Yield",
    category: "AGRICULTURE NEWS",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    excerpt: "Modern irrigation methods that help you save water, reduce cost and increase crop production.",
    img: "https://images.unsplash.com/photo-1536630596251-b01c6253926b?q=80&w=2070&auto=format&fit=crop"
  }
];

export const popularPosts = [
  { title: "7 Essential Tips for Better Seed Germination", date: "May 20, 2024", img: blogPosts[0].img },
  { title: "Complete Guide to Mustard Farming", date: "May 15, 2024", img: blogPosts[1].img },
  { title: "Why Quality Wheat Seeds Make a Big Difference?", date: "May 10, 2024", img: blogPosts[2].img },
];

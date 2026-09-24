import { ServiceItem, GalleryItem, WhyChooseItem } from '../types';

import heroImg from '../assets/images/hero_nail_art_studio_1790273199912.jpg';
import galleryNailArt1 from '../assets/images/gallery_nail_art_1_1790273210878.jpg';
import galleryPedicureCare from '../assets/images/gallery_pedicure_care_1790273222311.jpg';
import galleryManicureFrench from '../assets/images/gallery_manicure_french_1790273231587.jpg';
import galleryFootCare from '../assets/images/gallery_foot_care_1790273241525.jpg';
import beautyConsultationImg from '../assets/images/about_beauty_consultation_1790273252146.jpg';

export const BUSINESS_INFO = {
  name: "Owen4Nails",
  tagline: "Professional Nail Art • Manicures • Pedicures • Beauty Care",
  location: {
    address: "6 Lobito Crescent, Wuse 2, Abuja, Nigeria",
    district: "Wuse 2",
    city: "Abuja",
    country: "Nigeria",
    shortAddress: "6 Lobito Crescent, Wuse 2, Abuja",
    googleMapsUrl: "https://maps.google.com/?q=6+Lobito+Crescent,+Wuse+2,+Abuja,+Nigeria"
  },
  phone: "+234 703 778 9819",
  rawPhone: "2347037789819",
  description: "Owen4Nails is a personal beauty and nail-care business operating primarily through social media, specializing in professional nail art, manicures, pedicures, foot care, and beauty consultations.",
};

export const getWhatsAppUrl = (message?: string): string => {
  const defaultText = "Hello Owen4Nails, I would like to inquire about booking a beauty appointment.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${BUSINESS_INFO.rawPhone}?text=${text}`;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "nail-art",
    name: "Professional Nail Art",
    shortDesc: "Custom hand-painted nail designs, modern minimalist accents, and high-fashion luxury nail extensions.",
    fullDesc: "Specialized hand-painted nail artistry tailored to your personal aesthetic. From delicate fine lines and French chrome variations to custom artistic sets that elevate your look.",
    iconName: "Sparkles",
    image: galleryNailArt1,
    features: [
      "Custom Hand-Painted Artistry",
      "Precision Line & Chrome Work",
      "Personalized Color Palette Matching"
    ]
  },
  {
    id: "manicures",
    name: "Manicures",
    shortDesc: "Precision cuticle treatment, nail shaping, moisturizing care, and flawless long-lasting gel or polish application.",
    fullDesc: "Essential and deluxe manicure services focusing on nail bed health, tidy cuticles, balanced shaping, and glossy, chip-resistant finishes.",
    iconName: "Hand",
    image: galleryManicureFrench,
    features: [
      "Precision Cuticle Care & Nail Shaping",
      "Nourishing Hand Hydration",
      "High-Gloss Long-Wearing Finish"
    ]
  },
  {
    id: "pedicures",
    name: "Pedicures",
    shortDesc: "Relaxing foot soak, exfoliation, heel smoothing, toenail grooming, and polished finish.",
    fullDesc: "Rejuvenating pedicure care that pampers your feet. Includes soothing herbal foot soak, precise toenail trimming, exfoliation, and lasting polish.",
    iconName: "Footprints",
    image: galleryPedicureCare,
    features: [
      "Soothing Warm Foot Bath",
      "Exfoliating Foot Scrub & Heel Care",
      "Clean Toenail Shaping & Polish"
    ]
  },
  {
    id: "foot-care",
    name: "Foot Care",
    shortDesc: "Targeted soothing foot care treatments designed for deep hydration, skin softness, and tension relief.",
    fullDesc: "Dedicated foot health and comfort care treatment. Focused on intense moisture restoration, soothing tired feet, and restoring soft, healthy foot skin.",
    iconName: "Heart",
    image: galleryFootCare,
    features: [
      "Deep Restorative Hydration",
      "Soothing Skin Conditioning",
      "Targeted Foot Relief"
    ]
  },
  {
    id: "beauty-consultations",
    name: "Beauty Consultations",
    shortDesc: "One-on-one personal beauty and nail-health consultations to find the ideal care routine and nail style for you.",
    fullDesc: "Personalized consultations to analyze your natural nail condition, discuss style preferences, and recommend tailored care routines for long-term beauty.",
    iconName: "MessageCircleHeart",
    image: beautyConsultationImg,
    features: [
      "Personalized Nail Health Assessment",
      "Custom Style & Color Recommendations",
      "Home Maintenance Guidance"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Gold Accent Nail Art",
    category: "Nail Art",
    image: heroImg,
    description: "Elegant nude base featuring delicate hand-drawn metallic gold line accents.",
    tag: "Hand-Painted Art"
  },
  {
    id: "g2",
    title: "Minimalist Fine Line Art",
    category: "Nail Art",
    image: galleryNailArt1,
    description: "Modern minimalist design with clean geometric lines on soft quartz polish.",
    tag: "Custom Art"
  },
  {
    id: "g3",
    title: "Modern French Manicure",
    category: "Manicures",
    image: galleryManicureFrench,
    description: "Crisp modern French manicure with high-shine topcoat and almond shaping.",
    tag: "Classic & Chic"
  },
  {
    id: "g4",
    title: "Botanical Spa Pedicure",
    category: "Pedicures",
    image: galleryPedicureCare,
    description: "Soothing rose bath pedicure treatment with natural botanical extracts.",
    tag: "Soothing Spa"
  },
  {
    id: "g5",
    title: "Nourishing Foot Care Treatment",
    category: "Foot Care",
    image: galleryFootCare,
    description: "Deep moisturizing foot care mask and revitalizing exfoliating scrub.",
    tag: "Deep Moisture"
  },
  {
    id: "g6",
    title: "Personal Beauty Studio Consultation",
    category: "Nail Art",
    image: beautyConsultationImg,
    description: "Nail palette consultation and custom color matching session in Wuse 2.",
    tag: "Beauty Consultation"
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    title: "Professional Nail Care",
    description: "Dedicated focus on hygiene, gentle nail care techniques, and long-lasting quality.",
    iconName: "ShieldCheck"
  },
  {
    title: "Personalized Service",
    description: "Attentive, individual care tailored to your unique style, preferences, and nail health needs.",
    iconName: "UserCheck"
  },
  {
    title: "Creative Nail Artistry",
    description: "Hand-painted nail designs, modern trends, and custom art crafted with precision.",
    iconName: "Palette"
  },
  {
    title: "Manicure & Pedicure Care",
    description: "Comprehensive beauty treatments for both hands and feet using quality products.",
    iconName: "Sparkles"
  },
  {
    title: "Convenient Wuse 2 Location",
    description: "Located at 6 Lobito Crescent, Wuse 2, providing a comfortable environment in Abuja.",
    iconName: "MapPin"
  }
];

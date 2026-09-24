export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Nail Art' | 'Manicures' | 'Pedicures' | 'Foot Care';
  image: string;
  description: string;
  tag: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface QuickInquiry {
  service: string;
  datePreference: string;
  notes: string;
}

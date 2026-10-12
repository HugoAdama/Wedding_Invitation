export interface PartnerProfile {
  name: string;
  fullName: string;
  role: string;
  age: number;
  birthDate: string;
  birthPlace: string;
  occupation: string;
  education: string;
  zodiac: string;
  personality: string;
  personalStory: string[];
  favoriteQuote: string;
  starlitConnection: {
    title: string;
    description: string;
  }[];
  quickFavorites: {
    comida: string;
    bebida: string;
    pelicula: string;
    libro: string;
    lugar: string;
    hobbies: string;
    idiomas: string;
  };
  photoUrl: string;
}

export interface CoupleTriviaItem {
  attribute: string;
  daniela: string;
  rodrigo: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  alt: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface VenueDetail {
  title: string;
  time: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  aspectRatio?: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

export interface HotelRecommendation {
  name: string;
  distance: string;
  pricePerNight: string;
  notes?: string;
}

export interface WeddingRecommendation {
  title: string;
  description: string;
  iconName: string;
}

export interface GiftOption {
  title: string;
  description: string;
  badge?: string;
  details?: { label?: string; value: string; isCode?: boolean }[];
  action?: {
    label: string;
    url?: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WeddingMetadata {
  brideName: string;
  groomName: string;
  eventDate: string; // ISO date for countdown
  dateFormatted: string;
  venueName: string;
  city: string;
  rsvpDeadline: string;
  whatsappNumber: string; // format 51999777666
  whatsappDisplay: string;
  contactEmail: string;
  hashtag: string;
  themeConcept: string;
}

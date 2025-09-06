export interface AppMeta {
  id: string;
  name: string;
  slug?: string;
  tagline: string;
  description?: string;
  status?: 'live' | 'beta' | 'waitlist' | 'development' | 'building' | 'in dev';
  pricing?: 'free' | 'freemium' | 'paid' | 'internal';
  brandColor?: string;
  featured?: boolean;
  launchDate?: string;
  metrics?: {
    users?: string;
    revenue?: string;
    growth?: string;
  };
  link?: string;
  github?: string;
  tech?: readonly string[];
  category?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: ContactInfo;
}

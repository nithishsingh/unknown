export interface TallyConfig {
  formId: string;
  defaultWidth: string;
  defaultHeight: string;
}

export interface CalendarConfig {
  username: string;
  defaultWidth: string;
  defaultHeight: string;
  apiKey: string;
}

export interface IntegrationsConfig {
  tally: TallyConfig;
  calendar: CalendarConfig;
}

export interface Address {
  full: string;
  short: string;
  components: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
}

export interface CompanyContact {
  phone: {
    primary: string;
    support: string;
    sales: string;
  };
  email: {
    primary: string;
    support: string;
    sales: string;
  };
  address: Address;
}

export interface CompanyLegal {
  gst: string;
  cin: string;
  pan: string;
  msme: string;
}

export interface CompanySocial {
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface CompanyBranding {
  logo: {
    default: string;
    dark: string;
    light: string;
    icon: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface CompanySEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface CompanyCertification {
  name: string;
  number: string;
  issuer: string;
  validUntil: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  foundedYear: number;
  url: string;
  contact: CompanyContact;
  legal: CompanyLegal;
  social: CompanySocial;
  branding: CompanyBranding;
  seo: CompanySEO;
  certifications: CompanyCertification[];
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  stats: {
    projects: string;
    clients: string;
    experience: string;
  };
  features: string[];
  cta: {
    text: string;
    link: string;
  };
}

export interface Config {
  company: CompanyConfig;
  hero: HeroConfig;
  integrations: IntegrationsConfig;
}
export const companyConfig = {
  name: "Krrish Co",
  legalName: "Krrish & Co Private Limited",
  shortName: "KrrishCo",
  tagline: "Industrial Excellence",
  foundedYear: 2008,
  
  contact: {
    phone: {
      primary: "+91 1234567890",
      support: "+91 9876543210",
      sales: "+91 8765432109",
    },
    email: {
      primary: "info@krrishco.com",
      support: "support@krrishco.com",
      sales: "sales@krrishco.com",
    },
    address: {
      full: "123, Industrial Area, Phase 1, Hosur, Tamil Nadu - 635126, India",
      short: "Hosur, Tamil Nadu",
      components: {
        street: "123, Industrial Area, Phase 1",
        city: "Hosur",
        state: "Tamil Nadu",
        country: "India",
        pincode: "635126"
      }
    }
  },

  legal: {
    gst: "33AABCK1234A1Z5",
    cin: "U27109TN2008PTC123456",
    pan: "AABCK1234A",
    msme: "UDYAM-TN-01-0123456",
  },

  social: {
    twitter: "https://twitter.com/krrishco",
    linkedin: "https://linkedin.com/company/krrishco",
    facebook: "https://facebook.com/krrishco",
    instagram: "https://instagram.com/krrishco",
  },

  branding: {
    logo: {
      default: "/src/images/logo.svg",
      dark: "/src/images/logo-dark.svg",
      light: "/src/images/logo-light.svg",
      icon: "/src/images/logo-icon.svg",
    },
    colors: {
      primary: '#0066CC',    // Electric Blue
      secondary: '#4B5563',  // Steel Gray
      accent: '#FF6A13'      // Safety Orange
    }
  },

  certifications: [
    {
      name: "ISO 9001:2015",
      number: "QMS123456",
      issuer: "TUV Nord",
      validUntil: "2025-12-31"
    },
    {
      name: "ISO 14001:2015",
      number: "EMS123456",
      issuer: "TUV Nord",
      validUntil: "2025-12-31"
    }
  ],

  seo: {
    title: "Krrish Co - Industrial Excellence in Fabrication & Supply",
    description: "Your trusted partner in industrial fabrication, material supply, and hardware solutions. Based in Hosur, Tamil Nadu, delivering excellence across India.",
    keywords: [
      "industrial fabrication",
      "material supply",
      "hardware solutions",
      "manufacturing",
      "Hosur",
      "Tamil Nadu",
      "India"
    ],
    ogImage: "/og-image.jpg"
  }
} as const;

// Type-safe helper functions
export const getCompanyAge = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - companyConfig.foundedYear;
};

export const formatAddress = (type: 'full' | 'short' = 'full') => {
  return type === 'full' ? companyConfig.contact.address.full : companyConfig.contact.address.short;
};

export const getLogoPath = (theme: 'light' | 'dark' | 'default' = 'default') => {
  return companyConfig.branding.logo[theme];
}; 
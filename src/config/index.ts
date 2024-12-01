import type { Config } from './types';

const config: Config = {
  company: {
    name: "KrrishCo",
    legalName: "KrrishCo Industries Private Limited",
    shortName: "KrrishCo",
    tagline: "Engineering Excellence",
    foundedYear: 2008,
    url: "https://krrishco.com",
    contact: {
      phone: {
        primary: "+91 98765 43210",
        support: "+91 98765 43211",
        sales: "+91 98765 43212"
      },
      email: {
        primary: "info@krrishco.com",
        support: "support@krrishco.com",
        sales: "sales@krrishco.com"
      },
      address: {
        full: "123 Industrial Area, Chennai, Tamil Nadu 600001, India",
        short: "Chennai, India",
        components: {
          street: "123 Industrial Area",
          city: "Chennai",
          state: "Tamil Nadu",
          country: "India",
          pincode: "600001"
        }
      }
    },
    legal: {
      gst: "33AABCK1234A1Z5",
      cin: "U27109TN2008PTC123456",
      pan: "AABCK1234A",
      msme: "UDYAM-TN-01-0123456"
    },
    social: {
      twitter: "https://twitter.com/krrishco",
      linkedin: "https://linkedin.com/company/krrishco",
      facebook: "https://facebook.com/krrishco",
      instagram: "https://instagram.com/krrishco"
    },
    branding: {
      logo: {
        default: "/images/logo.svg",
        dark: "/images/logo-dark.svg",
        light: "/images/logo-light.svg",
        icon: "/images/icon.svg"
      },
      colors: {
        primary: "#0284c7",
        secondary: "#0f172a",
        accent: "#f97316"
      }
    },
    seo: {
      title: "KrrishCo - Industrial Excellence",
      description: "Leading manufacturer of industrial equipment and solutions",
      keywords: ["industrial", "manufacturing", "engineering"],
      ogImage: "/images/og-image.jpg"
    },
    certifications: [
      {
        name: "ISO 9001:2015",
        number: "QMS123456",
        issuer: "TUV Nord",
        validUntil: "2025-12-31"
      }
    ]
  },
  hero: {
    title: "Industrial Excellence in Fabrication & Supply",
    subtitle: "15+ Years of Precision Manufacturing",
    description: "Your trusted partner in industrial fabrication, material supply, and hardware solutions. Based in Hosur, Tamil Nadu, delivering excellence across India.",
    stats: {
      projects: "500+",
      clients: "200+",
      experience: "15+"
    },
    features: [
      "ISO 9001:2015 Certified",
      "Made in India",
      "15+ Years of Experience",
      "Pan-India Service Network"
    ],
    cta: {
      text: "Request a Quote",
      link: "/contact"
    }
  },
  integrations: {
    tally: {
      formId: "3l0ykX",
      defaultWidth: "100%",
      defaultHeight: "500"
    },
    calendar: {
      username: "krrishco",
      defaultWidth: "100%",
      defaultHeight: "600",
      apiKey: process.env.CAL_API_KEY || "default_key"
    }
  }
};

export default config; 
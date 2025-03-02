interface Image {
  data: {
    attributes: {
      url: string;
    };
  };
}

// navigation
interface NavItem {
  name: string;
  url: string;
}

interface FooterSubMenuItem {
  name: string;
  url: string;
}

interface FooterMenu {
  name: string;
  menu: FooterSubMenuItem[];
}

export interface Navigation {
  id: number;
  main: NavItem[];
  footer: FooterMenu[];
}

// config
interface SiteConfig {
  title: string;
  baseUrl: string;
  basePath: string;
  trailingSlash: boolean;
  favicon: string;
  logo: Image;
  logoWidth: number;
  logoHeight: number;
  logoText: string;
}

interface Settings {
  pagination: number;
  summaryLength: number;
}

interface NavButton {
  enable: boolean;
  label: string;
  link: string;
}

interface Params {
  contactFormAction: string;
  tagManager_id: string;
  footerContent: string;
  copyright: string;
}

interface Metadata {
  metaAuthor: string;
  metaImage: string;
  metaDescription: string;
}

export interface Config {
  id: number;
  site: SiteConfig;
  settings: Settings;
  navButton: NavButton;
  params: Params;
  metadata: Metadata;
}

// social
export interface Social {
  id: number;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  twitch?: string;
  pinterest?: string;
  spotify?: string;
  soundcloud?: string;
  applemusic?: string;
}

// home page
export interface HomePage {
  banner?: {
    title?: string;
    content?: string;
    image?: string;
    button?: {
      label: string;
      link: string;
      enable: boolean;
    };
  };
  feature: {
    title: string;
    features: {
      name: string;
      icon?: string;
      content?: string;
    }[];
  };
  services?: {
    title?: string;
    content?: string;
    images?: string[];
    button?: {
      label: string;
      link: string;
      enable: boolean;
    };
  }[];
  workflow?: {
    title?: string;
    description?: string;
    image: string;
  };
  call_to_action?: {
    title?: string;
    content?: string;
    image: string;
    button?: {
      label: string;
      link: string;
      enable: boolean;
    };
  };
}

// regular pages
export interface Page {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  image: Image;
  slug: string;
  richText: string;
}

// blog post
export interface Post {
  id: number;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  richText: string;
}

export interface PostIndex {
  id: number;
  title: string;
  description: string;
}

// contact page
export interface ContactPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  draft: boolean;
  info: {
    title: string;
    description: string;
    contacts: { value: string }[];
  };
}

// faq page
interface FAQ {
  title: string;
  answer: string;
}

export interface FAQPage {
  id: number;
  title: string;
  description: string;
  draft: boolean;
  faqs: FAQ[];
}

// pricing page
type Plan = {
  title: string;
  subtitle: string;
  price: number;
  type: "month" | "year"; // You can extend this if needed
  recommended?: boolean;
  features: { value: string }[];
  button: {
    label: string;
    link: string;
  };
};

type CallToAction = {
  title: string;
  content: string;
  image: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
};

export type PricingPage = {
  title: string;
  description: string;
  plans: Plan[];
  callToAction: CallToAction;
};

export interface NotFoundPage {
  title: string;
  description: string;
  richText: string;
}

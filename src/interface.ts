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
type SiteConfig = {
  title: string;
  base_url: string;
  base_path: string;
  trailing_slash: boolean;
  favicon: string;
  logo: string;
  logo_width: number;
  logo_height: number;
  logo_text: string;
};

type Settings = {
  pagination: number;
  summary_length: number;
};

type NavButton = {
  enable: boolean;
  label: string;
  link: string;
};

type Params = {
  contactFormAction: string;
  tagManager_id: string;
  footerContent: string;
  copyright: string;
};

type Metadata = {
  metaAuthor: string;
  metaImage: string;
  metaDescription: string;
};

export type Config = {
  id: number;
  site: SiteConfig;
  settings: Settings;
  nav_button: NavButton;
  params: Params;
  metadata: Metadata;
};

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
    contacts: string[];
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
  features: string[];
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

type PricingPage = {
  title: string;
  description: string;
  draft: boolean;
  plans: Plan[];
  call_to_action: CallToAction;
};

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

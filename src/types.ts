import type { StaticImageData } from "next/image";

export type ImageAsset = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body: string[];
  image?: ImageAsset;
};

export type CaseStudyHighlight = {
  title: string;
  body: string;
  image?: ImageAsset;
};

export type Project = {
  slug: string;
  client: string;
  /** One-liner used on cards. */
  summary: string;
  /** Long-form title shown at the top of the case study. */
  headline: string;
  intro: string;
  cover: StaticImageData;
  tags: string[];
  industry: string;
  services: string[];
  location?: string;
  hero?: ImageAsset;
  challenge: string;
  scope: string;
  sections: CaseStudySection[];
  highlights: CaseStudyHighlight[];
  gallery?: ImageAsset[];
};

export type Testimonial = {
  message: string;
  name: string;
  role: string;
  company: string;
};

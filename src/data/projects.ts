import type { ImageAsset, Project } from "@/types";

import GoodFlows from "@/assets/work/good-flows.webp";
import GieseckeDevrient from "@/assets/work/giesecke-devrient.webp";
import BookMyPooja from "@/assets/work/book-my-pooja.webp";
import TwentyTwoYards from "@/assets/work/twenty-two-yards.webp";
import IEACIITMadras from "@/assets/work/ieac-iit-madras.webp";
import IndicOrigins from "@/assets/work/indic-origin.webp";
import DoItZero from "@/assets/work/do-it-zero.webp";
import Maiven from "@/assets/work/maiven.webp";
import Approlabs from "@/assets/work/approlabs.webp";

/** Case study artwork lives in /public/work/<slug>/ as pre-optimised WebP. */
const shot = (slug: string, name: string, alt: string, width: number, height: number): ImageAsset => ({
  src: `/work/${slug}/${name}.webp`,
  alt,
  width,
  height,
});

export const projects: Project[] = [
  {
    slug: "goodflows",
    client: "Good Flows",
    summary: "Unique swipe gestures to drive the next in conversational mobile experiences for AI.",
    headline: "Making conversations with AI feel as natural as a swipe.",
    intro:
      "Good Flows is a consumer app built around conversations with AI. We designed a mobile experience where gesture, not menus, carries the user from one exchange to the next.",
    cover: GoodFlows,
    tags: ["Conversational AI", "Mobile UX", "Consumer Tech"],
    industry: "Conversational AI",
    services: ["AI Experience Design", "Mobile UX/UI", "Interaction Design"],
    challenge:
      "Chat-first AI products tend to default to a text box and a scrolling log. For a consumer audience on mobile, that pattern is slow to learn from, hard to revisit, and does little to keep people coming back.",
    scope:
      "We owned the end-to-end mobile experience: onboarding, the core conversation loop, and the interaction model that ties them together, along with the visual language that gives the product its calm, focused character.",
    sections: [
      {
        eyebrow: "Approach",
        title: "Designing the interaction model first.",
        body: [
          "Before drawing screens we mapped the moments a user actually needs from an AI conversation: getting started, responding, reviewing, and moving on. Each became a gesture-driven state rather than another button.",
          "Swipe interactions let users advance, revisit, or branch a conversation with one thumb, keeping the AI response at the centre of the screen and the controls out of the way.",
        ],
      },
      {
        eyebrow: "Onboarding",
        title: "A first step that meets users where they are.",
        body: [
          "Onboarding picks up the device's system language and confirms the user's language and comfort level up front, so the very first AI exchange is already personalised.",
        ],
      },
    ],
    highlights: [
      {
        title: "Gesture-led conversation flow",
        body: "Swipe patterns replace stacked menus, so moving through a conversation feels continuous rather than transactional.",
      },
      {
        title: "Personalised from the first screen",
        body: "Language and level are captured during onboarding and shape every AI response that follows.",
      },
      {
        title: "A calm, focused visual system",
        body: "A dark, low-distraction palette with soft gradients keeps attention on the content of each exchange.",
      },
    ],
  },
  {
    slug: "gieseckedevrient",
    client: "Giesecke + Devrient",
    summary: "Experience research and innovation for the next in cashtech embedded application GUIs.",
    headline: "Rethinking embedded interfaces for the future of cash technology.",
    intro:
      "Giesecke + Devrient is a global security technology group. We partnered with their team on experience research and innovation for the graphical interfaces that run on their cash-handling hardware.",
    cover: GieseckeDevrient,
    tags: ["Embedded UX", "Branding", "Security Tech"],
    industry: "Security & Cash Technology",
    services: ["Experience Research", "Embedded UX/UI", "Design Innovation"],
    challenge:
      "Embedded GUIs on industrial machines are used under time pressure, often standing, often with gloves, and by operators with very different levels of training. Interfaces built feature-by-feature over years become dense and inconsistent.",
    scope:
      "Our work covered research with the people who operate these machines, identifying where the current experience creates friction, and exploring new interface directions grounded in those findings.",
    sections: [
      {
        eyebrow: "Research",
        title: "Starting from the operator's reality.",
        body: [
          "We studied how operators move through their daily tasks on the device, where they hesitate, and what they rely on memory or workarounds for. These observations became the foundation for every design decision.",
        ],
      },
      {
        eyebrow: "Innovation",
        title: "Clear, glanceable, and consistent.",
        body: [
          "We explored interface concepts that prioritise the current task, surface machine status at a glance, and apply one consistent visual and interaction language across workflows.",
        ],
      },
    ],
    highlights: [
      {
        title: "Operator-centred research",
        body: "Field observation and task analysis to understand real usage on the hardware.",
      },
      {
        title: "Task-first information hierarchy",
        body: "Screens organised around what the operator needs to do now, not around system structure.",
      },
      {
        title: "Consistent embedded design language",
        body: "Reusable patterns that keep the experience predictable across devices and workflows.",
      },
    ],
  },
  {
    slug: "bookmypooja",
    client: "BookMyPooja",
    summary: "A fresh Hindu religious services e-commerce experience for the next in spiritualtech.",
    headline: "Unlocking spiritual journeys with a seamless pooja booking experience.",
    intro:
      "BookMyPooja lets people book religious rituals and ceremonies online, from personalised rituals and temple visits to consultations with priests. We redesigned the experience and brand to make spiritual practice easier to access.",
    cover: BookMyPooja,
    tags: ["Design for Bharat", "E-commerce UX", "Consumer Tech"],
    industry: "SpiritualTech",
    services: ["Product Design", "Branding", "UX Research"],
    location: "Bengaluru, India",
    hero: shot("bookmypooja", "header", "BookMyPooja redesigned app screens", 2000, 1229),
    challenge:
      "The brand needed to overhaul its experience and interface to improve usability, streamline navigation, and reach a wider audience, ultimately improving satisfaction and driving more traffic and conversions.",
    scope:
      "We led UX and UI, including new branding elements. Competitive analysis, card sorting, and ideation sessions shaped the user stories that informed the redesign.",
    sections: [
      {
        eyebrow: "Strategy",
        title: "A user-centred redesign, end to end.",
        body: [
          "Research into user behaviours and pain points informed every decision. We simplified the structure so people can explore pooja services intuitively, designed responsively with mobile as the priority, and introduced personalisation driven by user data.",
          "Clean layouts and clear calls to action guide users through booking, improving usability and driving engagement and conversions.",
        ],
        image: shot("bookmypooja", "strategy", "BookMyPooja design strategy overview", 2000, 2167),
      },
      {
        eyebrow: "Branding",
        title: "A palette rooted in tradition.",
        body: [
          "Maroon symbolises tradition and spirituality, orange adds energy and warmth, and grey provides a modern backdrop that balances the vibrant hues.",
          "Components and patterns are inspired by temple architecture and spiritual motifs, giving the interface a sense of reverence while staying modern and usable.",
        ],
        image: shot("bookmypooja", "typography", "BookMyPooja typography and colour palette", 1548, 2175),
      },
      {
        eyebrow: "Visual identity",
        title: "Brand system in use.",
        body: [],
        image: shot("bookmypooja", "product-branding", "BookMyPooja brand system applied across touchpoints", 2000, 4398),
      },
      {
        eyebrow: "Product design",
        title: "Elevating the user experience.",
        body: [
          "Competitive analysis, card sorting, ideation, and user stories gave us a clear picture of industry patterns and user expectations.",
          "We also explored AI for image generation and research, balancing it with proven methods. AI contributed to our research, but it was the combination of methods that drove the outcome.",
        ],
        image: shot("bookmypooja", "product-design", "BookMyPooja product design screens", 2000, 2398),
      },
    ],
    highlights: [
      {
        title: "New categories to elevate engagement",
        body: "Users were overwhelmed by the number of options. We restructured the platform around tailored categories for smoother navigation and higher engagement.",
        image: shot("bookmypooja", "problem-0", "BookMyPooja category redesign", 2000, 2514),
      },
      {
        title: "Better information architecture and layout",
        body: "Using search history, behaviour, and recommendations, we introduced suggested categories and products and improved search so content is easier to discover from the home screen.",
        image: shot("bookmypooja", "problem-1", "BookMyPooja home and discovery redesign", 2000, 2540),
      },
      {
        title: "Flexible booking with personal guidance",
        body: "The old flow had a rigid 48-hour window, no confirmation, and generic advice. The new flow adds flexibility and personalised consultation with BookMyPooja experts for choosing auspicious dates.",
        image: shot("bookmypooja", "problem-2", "BookMyPooja booking flow redesign", 2000, 2499),
      },
    ],
    gallery: [
      shot("bookmypooja", "cover-1", "BookMyPooja app showcase", 2000, 1169),
      shot("bookmypooja", "cover-2", "BookMyPooja app showcase", 2000, 1126),
    ],
  },
  {
    slug: "twentytwoyards",
    client: "22Yards",
    summary: "A custom gamification-driven mobile experience for the next in sportstech.",
    headline: "Revolutionising the cricket experience through app innovation.",
    intro:
      "22Yards is a platform for cricket enthusiasts: find nearby players, organise games, book grounds, join tournaments, and register as umpires or scorers. It aims to be a one-stop solution for players of every level.",
    cover: TwentyTwoYards,
    tags: ["Gamification", "Mobile UX", "Consumer Tech"],
    industry: "SportsTech",
    services: ["Product Design", "Branding", "UX Research", "Gamification"],
    location: "Chennai, India",
    hero: shot("twentytwoyards", "header", "22Yards redesigned app screens", 2000, 948),
    challenge:
      "Engagement was suffering because of a dated UI and UX. Navigation wasn't intuitive, the visuals lacked modern polish, and the absence of fresh features limited how well the app served cricket enthusiasts.",
    scope:
      "We proposed a full overhaul of the UI and UX: a modern, intuitive interface paired with new features tailored to cricket players, designed to lift satisfaction and retention.",
    sections: [
      {
        eyebrow: "Strategy",
        title: "A holistic approach to a revitalised app.",
        body: [
          "Market and competitor research shaped a distinct brand identity, codified into guidelines for logo, colour, typography, and imagery. A modular design system of reusable components made the product easier to scale.",
          "We then designed a new interactive interface with intuitive navigation and integrated new features built around what cricket enthusiasts actually want.",
        ],
        image: shot("twentytwoyards", "strategy", "22Yards design strategy overview", 2000, 2162),
      },
      {
        eyebrow: "Branding",
        title: "Familiar colours, fresh energy.",
        body: [
          "We kept the purple and yellow that users associate with 22Yards and added complementary hues, keeping continuity with the existing brand while making it feel more vibrant.",
        ],
        image: shot("twentytwoyards", "typography", "22Yards typography and colour palette", 2000, 2077),
      },
      {
        eyebrow: "Visual identity",
        title: "Brand system in use.",
        body: [],
        image: shot("twentytwoyards", "product-branding", "22Yards brand system applied across touchpoints", 2000, 4412),
      },
      {
        eyebrow: "Product design",
        title: "Elevating the user experience.",
        body: [
          "Primary research (interviews, surveys, and persona work) was organised through affinity mapping into a clear picture of user needs. Secondary research covered competitors, published studies, and existing user feedback.",
          "The resulting strategy centred on gamification: leaderboards for healthy competition, badges and medals for achievements, points for regular use, and detailed player statistics.",
        ],
        image: shot("twentytwoyards", "product-design", "22Yards product design screens", 2000, 3103),
      },
    ],
    highlights: [
      {
        title: "A stylish revamp for engagement",
        body: "Existing features were reimagined for a more intuitive journey, with a refreshed interface that invites users to explore and stay.",
        image: shot("twentytwoyards", "problem-0", "22Yards interface revamp", 2000, 2557),
      },
      {
        title: "Innovative feature integration",
        body: "Real-time match updates, interactive player stats, personalised recommendations, and gamification such as leaderboards, badges, and trophies.",
        image: shot("twentytwoyards", "problem-1", "22Yards new features", 2000, 2557),
      },
      {
        title: "Empowering players and building community",
        body: "Forums, social features, and user-generated content turn 22Yards from a utility into a community where fans connect and share.",
        image: shot("twentytwoyards", "problem-2", "22Yards community features", 2000, 2557),
      },
    ],
    gallery: [
      shot("twentytwoyards", "cover-1", "22Yards app showcase", 2000, 1200),
      shot("twentytwoyards", "cover-2", "22Yards app showcase", 2000, 1183),
    ],
  },
  {
    slug: "ieaciitmadras",
    client: "IEAC IIT Madras",
    summary: "A configurable enterprise application experience for the next in energy management.",
    headline: "Making energy management configurable, legible, and actionable.",
    intro:
      "We worked with IEAC at IIT Madras on a configurable enterprise web application for energy management, along with the brand that represents it.",
    cover: IEACIITMadras,
    tags: ["Web UX", "Branding", "Enterprise Tech"],
    industry: "Energy Management",
    services: ["Enterprise UX/UI", "Branding", "Information Architecture"],
    challenge:
      "Energy data is dense and every deployment is different. The application had to serve multiple sites and user roles without becoming a wall of numbers, and stay flexible enough to configure for each context.",
    scope:
      "We designed the web application experience, including its information architecture, configurable dashboards, and core workflows, and created a brand identity to match.",
    sections: [
      {
        eyebrow: "Approach",
        title: "Configuration as a first-class feature.",
        body: [
          "Rather than designing one fixed dashboard, we built a modular system of views and widgets that administrators can arrange for their site, while keeping layout and behaviour consistent for everyone else.",
        ],
      },
      {
        eyebrow: "Data design",
        title: "From readings to decisions.",
        body: [
          "Visual hierarchy, sensible defaults, and clear status states help users move from raw readings to understanding what needs attention.",
        ],
      },
    ],
    highlights: [
      {
        title: "Modular, configurable dashboards",
        body: "A component-based layout that adapts to each deployment without losing consistency.",
      },
      {
        title: "Role-aware information architecture",
        body: "Navigation and views structured around what each type of user needs to monitor and act on.",
      },
      {
        title: "A brand for the platform",
        body: "A clean visual identity that gives the application a credible, institutional presence.",
      },
    ],
  },
  {
    slug: "indicorigin",
    client: "Indic Origins",
    summary: "Luxurious visual branding and a D2C e-commerce experience for the next in Indian crafts.",
    headline: "A luxury storefront for India's craft heritage.",
    intro:
      "Indic Origins brings Indian craftsmanship to a modern, direct-to-consumer audience. We created a luxurious visual brand and the e-commerce experience that carries it.",
    cover: IndicOrigins,
    tags: ["D2C", "E-commerce UX", "Branding"],
    industry: "D2C & Indian Crafts",
    services: ["Brand Identity", "E-commerce UX/UI", "Visual Design"],
    challenge:
      "Handcrafted products carry stories of region, technique, and maker, which are easily lost in a generic product grid. The brand needed to feel premium while staying easy to browse and buy from.",
    scope:
      "We developed the visual identity and designed the D2C storefront, from discovery and product pages to checkout.",
    sections: [
      {
        eyebrow: "Branding",
        title: "Heritage, presented with restraint.",
        body: [
          "The identity draws on traditional Indian motifs and craft but presents them with generous space and a refined palette, so the products remain the hero.",
        ],
      },
      {
        eyebrow: "E-commerce",
        title: "Story-led shopping.",
        body: [
          "Product pages bring the craft and its origins forward alongside the essentials, helping customers understand what makes each piece special before they buy.",
        ],
      },
    ],
    highlights: [
      {
        title: "Luxury visual identity",
        body: "A brand system that signals craftsmanship and quality across every touchpoint.",
      },
      {
        title: "Story-rich product pages",
        body: "Craft, technique, and origin are part of the shopping experience, not an afterthought.",
      },
      {
        title: "Streamlined D2C purchase flow",
        body: "Browsing to checkout designed to feel premium without adding friction.",
      },
    ],
  },
  {
    slug: "doitzero",
    client: "Do It Zero",
    summary: "A minimalist identity design system and gamification for the next in climatetech.",
    headline: "Making climate action simple, visible, and rewarding.",
    intro:
      "Do It Zero helps people and organisations act on their climate impact. We created a minimalist identity design system and gamification mechanics that make progress feel tangible.",
    cover: DoItZero,
    tags: ["Branding", "Gamification", "Climate Tech"],
    industry: "ClimateTech",
    services: ["Identity Design", "Design System", "Gamification"],
    challenge:
      "Climate action is important but abstract. People struggle to see the effect of individual actions, and motivation fades without feedback.",
    scope:
      "We designed the brand identity and its design system, and developed gamification patterns that reward consistent, positive action.",
    sections: [
      {
        eyebrow: "Identity",
        title: "Minimal by design.",
        body: [
          "A pared-back identity reflects the brand's mission of reduction. The system is simple enough to apply consistently across product, marketing, and communications.",
        ],
      },
      {
        eyebrow: "Gamification",
        title: "Progress you can feel.",
        body: [
          "Goals, streaks, and milestones turn individual actions into visible progress, giving people a reason to return and keep going.",
        ],
      },
    ],
    highlights: [
      {
        title: "Minimalist identity system",
        body: "A focused visual language that stays consistent across every channel.",
      },
      {
        title: "Reusable design system",
        body: "Foundations and components that let the team build quickly while staying on-brand.",
      },
      {
        title: "Motivating gamification",
        body: "Mechanics that make climate progress visible and reward sustained action.",
      },
    ],
  },
  {
    slug: "maiven",
    client: "Maiven",
    summary: "A low-friction split-panel enterprise UX for the next in martech SaaS platforms.",
    headline: "A split-panel workspace for modern marketing teams.",
    intro:
      "Maiven is a martech SaaS platform. We designed a low-friction, split-panel enterprise experience that keeps context and action side by side.",
    cover: Maiven,
    tags: ["SaaS UX", "Enterprise", "MarTech"],
    industry: "MarTech SaaS",
    services: ["SaaS UX/UI", "Interaction Design", "Design System"],
    challenge:
      "Marketing teams jump between lists, details, and editors many times a day. Page-to-page navigation breaks focus and makes simple tasks feel heavy.",
    scope:
      "We designed the core application layout and workflows, establishing a split-panel pattern and the components that support it across the platform.",
    sections: [
      {
        eyebrow: "Interaction model",
        title: "Context on the left, action on the right.",
        body: [
          "The split-panel layout keeps the list or overview visible while users open, review, and edit details alongside it, removing constant back-and-forth navigation.",
        ],
      },
      {
        eyebrow: "System",
        title: "Built to scale across the product.",
        body: [
          "Shared panel, table, and form components make the pattern repeatable, so new features feel familiar from day one.",
        ],
      },
    ],
    highlights: [
      {
        title: "Split-panel workspace",
        body: "Context and detail side by side for faster, more focused work.",
      },
      {
        title: "Fewer clicks for daily tasks",
        body: "Common workflows redesigned to stay in one view wherever possible.",
      },
      {
        title: "Scalable component library",
        body: "Reusable building blocks that keep the enterprise experience consistent.",
      },
    ],
  },
  {
    slug: "approlabs",
    client: "Approlabs",
    summary: "A modern, minimalist visual brand system for the next in custom software services.",
    headline: "A modern brand system for a modern software partner.",
    intro:
      "Approlabs is a product development and technology partner specialising in mobile and web apps. We created a modern, minimalist visual brand system that reflects the quality of their engineering.",
    cover: Approlabs,
    tags: ["Branding", "UX/UI", "Development"],
    industry: "Custom Software Services",
    services: ["Visual Identity", "Brand System", "Web UX/UI"],
    challenge:
      "Software services firms often look alike. Approlabs needed an identity that communicates craft and reliability and stands apart in a crowded market.",
    scope:
      "We developed the visual brand system, including logo, typography, colour, and graphic language, and applied it to their digital presence.",
    sections: [
      {
        eyebrow: "Identity",
        title: "Clean, confident, and technical.",
        body: [
          "A minimalist mark and a restrained palette give Approlabs a precise, engineering-led feel, while the graphic language adds enough character to be memorable.",
        ],
      },
      {
        eyebrow: "Application",
        title: "One system, every touchpoint.",
        body: [
          "Guidelines and assets make the brand easy to apply consistently, from the website to proposals and social channels.",
        ],
      },
    ],
    highlights: [
      {
        title: "Minimalist visual identity",
        body: "A distinctive mark and type system that communicate quality and precision.",
      },
      {
        title: "Flexible brand guidelines",
        body: "Clear rules and assets for applying the brand consistently.",
      },
      {
        title: "Digital-first application",
        body: "A brand system designed to work across web, product, and social.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

/** The next projects after `slug`, wrapping around, for "more work" links. */
export const getNextProjects = (slug: string, count = 2) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return Array.from({ length: count }, (_, i) => projects[(index + 1 + i) % projects.length]);
};

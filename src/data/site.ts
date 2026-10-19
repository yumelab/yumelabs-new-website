import type { Testimonial } from "@/types";

export const site = {
  name: "Yume Labs",
  url: "https://yumelabs.com",
  email: "pritam@yumelabs.com",
  phone: "+91 98106 75713",
  phoneHref: "tel:+919810675713",
  address: "HubNxtDoor, SV Complex, Kothnur Main Road, 7th Phase, J.P. Nagar, Bengaluru 560078, Karnataka, India",
  legal: "Indic Origins Private Limited dba Yume Labs®",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/yumelabs/" },
    { label: "Instagram", href: "https://www.instagram.com/yumelabs/" },
  ],
};

export const navLinks = [
  { label: "Case Studies", href: "/casestudies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const stats = [
  { value: "25+", label: "Clients" },
  { value: "30+", label: "Projects" },
  { value: "6+", label: "Countries" },
  { value: "35+", label: "Founder patents" },
];

export const clients = [
  "indofast",
  "sun-mobility",
  "titan",
  "bpcl",
  "amazon-logo",
  "ieac-iit-madras-logo",
  "iocl",
  "dimagi-logo",
  "giesecke-devrient-logo",
  "armstrong-logo",
  "transasia-logo",
  "thirteen-logo",
  "simplicontract-logo",
  "do-it-zero-logo",
  "imentr-logo",
  "twenty-two-yards-logo",
  "maiven-logo",
  "mojo-box-logo",
  "lomads-logo",
  "book-my-pooja-logo",
  "appro-labs-logo",
  "digiprompt-logo",
  "good-flows-logo",
];

export const edge = [
  {
    title: "Invested",
    description:
      "Every project is personally led by a founder, so you get skin in the game and the expert care your product deserves.",
  },
  {
    title: "Inventive",
    description:
      "Your product benefits from innovation proven by our founding team's 35+ international patents and acceleration by IndieBio and Google.",
  },
  {
    title: "Integrated",
    description:
      "Deep expertise across design, engineering, and business, at startups and enterprises, makes our approach comprehensive, agile, and mature.",
  },
];

export const values = [
  { title: "Excellence", description: "Be at the edge of what's possible through continuous, lifelong learning." },
  { title: "Co-Creation", description: "Create together through positivity, relationships, and accountability." },
  { title: "Simplification", description: "Embrace first-principles thinking to reduce non-essential complexity." },
];

export const testimonials: Testimonial[] = [
  {
    message:
      "We worked with Yume Labs to revamp our mobile application. They did an excellent job in UX research and gave us actionable insights for the app. They are a great team to work with. Highly recommended!",
    name: "Aswin Krishnan",
    role: "COO",
    company: "22Yards",
  },
  {
    message:
      "Working with Yume Labs has been an absolute pleasure from start to finish. The team completed the project within the promised timeframe of 3 months, delivering results that far exceeded our expectations.",
    name: "Dayanand Kamble",
    role: "Founder & CEO",
    company: "BookMyPooja",
  },
  {
    message:
      "I am truly impressed with the exceptional work done by Yume Labs on our Neo CFO platform. They've made complex concepts easy to understand, and the way they presented everything, especially the demo videos from the wireframes, has been remarkable.",
    name: "Pratik Shah",
    role: "Founder & CEO",
    company: "Neo CFO",
  },
  {
    message:
      "Displays a high level of professionalism by comprehending the project requirements, providing valuable input on any overlooked aspects, and meeting deadlines consistently.",
    name: "Shweta Sharma",
    role: "Co-Founder",
    company: "Zero Emissions",
  },
];

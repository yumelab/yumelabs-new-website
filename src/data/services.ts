export type Service = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  offerings: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    id: "ai-experiences",
    title: "AI Experiences",
    summary: "Identify, prioritise, and design the AI features that create real impact for your users.",
    tags: ["AI opportunities", "Chatbots", "GenAI", "AI interventions"],
    offerings: [
      {
        title: "AI Opportunity Mapping",
        description:
          "We analyse your product and data to uncover patterns and strategic areas for AI, so investments align with business goals and maximise ROI.",
      },
      {
        title: "AI Strategy & Consulting",
        description:
          "We assess current practices, identify AI opportunities, and build a tailored roadmap with clear implementation steps and ongoing support.",
      },
      {
        title: "AI Design & Prototyping",
        description:
          "We use AI to generate design variations and build interactive prototypes that test functionality and usability before full-scale development.",
      },
      {
        title: "AI Design Sprint",
        description:
          "A 5–7 day collaborative sprint combining AI and human creativity to ideate, prototype, and test AI-driven solutions.",
      },
    ],
  },
  {
    id: "product-innovation",
    title: "Product Innovation",
    summary: "Uncover insights through research so you make product decisions with confidence.",
    tags: ["Primary research", "Interviews", "Competitive analysis"],
    offerings: [
      {
        title: "User Research",
        description:
          "Robust qualitative methods to understand users' needs, preferences, and pain points, and turn them into actionable insight.",
      },
      {
        title: "Competitive Research",
        description:
          "Analyse competitors' strengths, weaknesses, strategies, and positioning to sharpen your own.",
      },
      {
        title: "Heuristic Evaluation",
        description: "Evaluate your product against established usability principles and best practices.",
      },
      {
        title: "Usability Testing",
        description:
          "Test and refine before launch with a proven method for finding usability issues and measuring satisfaction.",
      },
      {
        title: "Design Thinking",
        description:
          "Iterative, collaborative problem-solving that keeps users and business objectives at the centre of innovation.",
      },
      {
        title: "Design Strategy",
        description:
          "Integrate user insight, market research, and business goals into a coherent framework that drives outcomes.",
      },
    ],
  },
  {
    id: "experience-design",
    title: "Experience Design",
    summary: "Design products with data-driven confidence and clarity, from flows to final pixels.",
    tags: ["User stories", "User flows", "Wireframes", "Usability testing"],
    offerings: [
      {
        title: "User Stories",
        description: "Capture requirements from the user's perspective as short, valuable descriptions of functionality.",
      },
      {
        title: "User Flows",
        description: "Map the steps users take to complete tasks, revealing bottlenecks and opportunities to simplify.",
      },
      {
        title: "Information Architecture",
        description: "Organise, structure, and label content so users find what they need and complete tasks efficiently.",
      },
      {
        title: "Wireframes",
        description: "Define structure, layout, and functionality early, before visual detail gets in the way.",
      },
      {
        title: "Interaction Design",
        description: "Craft meaningful, effective communication between users and products through the interaction layer.",
      },
      {
        title: "Visual Communication",
        description: "Capture attention and communicate clearly through thoughtful graphics, imagery, and typography.",
      },
    ],
  },
];

export const methods = [
  {
    title: "Innovate",
    summary: "Find the right problem, and the boldest credible answer to it.",
    steps: [
      "Define hypotheses",
      "UX research",
      "User personas",
      "Journey maps",
      "Pain points",
      "User stories",
      "Design thinking",
      "Rapid prototyping",
    ],
  },
  {
    title: "Implement",
    summary: "Turn validated ideas into a product people understand at first glance.",
    steps: [
      "Task & user flows",
      "Information architecture",
      "Wireframes",
      "Product branding",
      "Design system",
      "Interaction design",
      "Visual design",
    ],
  },
  {
    title: "Improve",
    summary: "Measure, learn, and refine after launch so the product keeps getting better.",
    steps: [
      "Experience strategy",
      "UX/UI audit",
      "Usability testing",
      "Product analytics",
      "UX/UI updates",
      "Documentation",
      "Development reviews",
    ],
  },
];

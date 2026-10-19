import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import LogoMarquee from "@/components/sections/LogoMarquee";
import CallToAction from "@/components/sections/CallToAction";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected work from Yume Labs: AI experiences, product innovation, and experience design for startups and enterprises.",
};

const CaseStudiesPage = () => (
  <>
    <PageHero
      eyebrow="Case studies"
      title="Built for humans. Powered by AI."
      description="We partner with AI-first teams to shape interfaces, flows, and systems that adapt, learn, and scale."
    />
    <section className="border-b border-line">
      <div className="container-site py-16 sm:py-20 lg:py-24">
        <ProjectGrid projects={projects} priorityCount={3} />
      </div>
    </section>
    <LogoMarquee title="And many more teams we've worked with" />
    <CallToAction />
  </>
);

export default CaseStudiesPage;

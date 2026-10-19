import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CallToAction from "@/components/sections/CallToAction";
import Approach from "@/components/sections/Approach";
import { ButtonLink } from "@/components/ui/Button";

import { services } from "@/data/services";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI experiences, product innovation, and experience design. Yume Labs helps product teams design the right features and ship them with confidence.",
};

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="UX for AI, and everything else."
      description="Our work sits at the intersection of product innovation, experience design, and AI experiences."
    >
      <nav aria-label="Services" className="mt-4 flex flex-wrap gap-2">
        {services.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="rounded border border-line-strong px-3 py-2 text-sm text-muted transition-colors hover:bg-white/10 hover:text-white"
          >
            {service.title}
          </a>
        ))}
      </nav>
    </PageHero>

    {services.map((service, i) => (
      <section key={service.id} id={service.id} className="scroll-mt-16 border-b border-line">
        <div className="container-site grid gap-10 py-20 sm:py-24 lg:grid-cols-4 lg:gap-0">
          <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start lg:pr-8">
            <span className="text-sm tabular-nums text-subtle">0{i + 1}</span>
            <h2 className="heading-md">{service.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
          </div>
          <div className="grid border-l border-t border-line sm:grid-cols-2 lg:col-span-3">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="flex flex-col gap-3 border-b border-r border-line p-6 sm:p-8">
                <h3 className="text-lg font-medium tracking-tight">{offering.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <Approach />

    <section className="border-b border-line">
      <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Selected work"
          title="See the work in action."
          action={
            <ButtonLink href="/casestudies" variant="secondary" arrow>
              All case studies
            </ButtonLink>
          }
        />
        <ProjectGrid projects={projects.slice(0, 3)} />
      </div>
    </section>

    <CallToAction />
  </>
);

export default ServicesPage;

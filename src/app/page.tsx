import Link from "next/link";

import Glow from "@/components/sections/Glow";
import LogoMarquee from "@/components/sections/LogoMarquee";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import { ButtonLink, RowLink } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";

import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { edge } from "@/data/site";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <Glow />
      <div className="container-site grid lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 py-16 sm:py-24 lg:min-h-[calc(100svh-4rem)] lg:py-28 lg:pr-12">
          <p className="eyebrow">UX/UI design studio for AI products</p>
          <h1 className="heading-xl text-balance">Invent what AI can do for your users.</h1>
          <p className="prose-body max-w-xl">
            We help you design the right AI features that create real impact, drive fast adoption, and give you an
            unfair advantage.
          </p>
          <div className="mt-4 max-w-md border-t border-line">
            <RowLink href="/contact" className="px-0 sm:px-0">
              Start a project
            </RowLink>
            <RowLink href="/casestudies" className="px-0 sm:px-0">
              Explore case studies
            </RowLink>
          </div>
        </div>
      </div>

      {/* Visual panel: edge to edge on mobile; on desktop it fills from the page centre line to the viewport edge. */}
      <div className="relative min-h-[28rem] border-t border-line lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:min-h-0 lg:border-l lg:border-t-0">
        <HeroVisual />
      </div>
    </section>
  );
};

const Bar = ({ className = "" }: { className?: string }) => <span className={`block h-2 rounded-full bg-white/10 ${className}`} />;

/** Generic, decorative "AI design assistant" mock; pure markup, no images. */
const HeroVisual = () => (
  <div aria-hidden className="absolute inset-0 flex items-center justify-center overflow-hidden px-4 sm:px-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[100px]" />
    <div className="absolute left-[60%] top-[30%] h-56 w-56 rounded-full bg-amber-400/20 blur-[90px]" />

    <div className="relative w-full max-w-md rounded-lg border border-line-strong bg-surface/80 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_theme(colors.sky.400)]" />
          Design assistant
        </div>
        <span className="rounded border border-line px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">Draft</span>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <p className="ml-auto max-w-[85%] rounded-lg bg-white/[0.06] px-3 py-2 text-left text-xs leading-relaxed text-muted">
          Design an onboarding flow that adapts to each user&apos;s goals.
        </p>

        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`flex aspect-[9/16] flex-col gap-1.5 rounded-md border p-2 ${
                i === 1 ? "border-sky-400/60 bg-sky-400/[0.06]" : "border-line bg-black/40"
              }`}
            >
              <Bar className="w-2/3" />
              <Bar className="w-1/2 opacity-60" />
              <div className="mt-1 flex-1 rounded bg-white/[0.04]" />
              <Bar className="h-4 w-full rounded bg-white/15" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["User flow", "Wireframes", "AI suggestion"].map((chip) => (
            <span key={chip} className="rounded border border-line px-2 py-1 text-[10px] uppercase tracking-wider text-muted">
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line p-3">
        <div className="flex-1 rounded bg-white/[0.05] px-3 py-2">
          <Bar className="w-1/3" />
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-black">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </div>
);

const Services = () => (
  <section className="border-b border-line">
    <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Human-first for users.
            <br />
            <span className="text-muted">AI-ready for product teams.</span>
          </>
        }
        action={
          <ButtonLink href="/services" variant="secondary" arrow>
            All services
          </ButtonLink>
        }
      />
      <div className="grid border-l border-t border-line md:grid-cols-3">
        {services.map((service, i) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group flex flex-col gap-6 border-b border-r border-line p-6 transition-colors hover:bg-surface sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm tabular-nums text-subtle">0{i + 1}</span>
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
            <div className="flex flex-col gap-3 md:min-h-[9rem]">
              <h3 className="text-2xl font-medium tracking-heading">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{service.summary}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <li key={tag} className="rounded border border-line px-2 py-1 text-[11px] uppercase tracking-wider text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Work = () => (
  <section className="border-b border-line">
    <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
      <SectionHeader
        eyebrow="Selected work"
        title="Simplifying the next for dreamers who do."
        action={
          <ButtonLink href="/casestudies" variant="secondary" arrow>
            All case studies
          </ButtonLink>
        }
      />
      <ProjectGrid projects={projects.slice(0, 6)} />
    </div>
  </section>
);

const Edge = () => (
  <section className="border-b border-line">
    <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
      <SectionHeader
        eyebrow="Why Yume Labs"
        title="Get the Yume Labs edge."
        description="A founder-led studio with deep roots in design, engineering, and invention."
      />
      <div className="grid border-l border-t border-line md:grid-cols-3">
        {edge.map((item) => (
          <div key={item.title} className="flex flex-col gap-4 border-b border-r border-line p-6 sm:p-8">
            <h3 className="text-2xl font-medium tracking-heading">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee title="Trusted by startups and enterprises across 6+ countries" />
      <Services />
      <Stats />
      <Work />
      <Edge />
      <Testimonials />
      <CallToAction />
    </>
  );
}

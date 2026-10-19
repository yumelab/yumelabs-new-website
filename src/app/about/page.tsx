import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import Stats from "@/components/sections/Stats";
import CallToAction from "@/components/sections/CallToAction";
import { ArrowUpRight } from "@/components/ui/Icons";

import { edge, values } from "@/data/site";
import { founders } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yume Labs is a founder-led UX/UI design studio in Bengaluru helping AI and product teams design experiences that drive adoption.",
};

const CellGrid = ({ items }: { items: { title: string; description: string }[] }) => (
  <div className="grid border-l border-t border-line md:grid-cols-3">
    {items.map((item) => (
      <div key={item.title} className="flex flex-col gap-4 border-b border-r border-line p-6 sm:p-8">
        <h3 className="text-2xl font-medium tracking-heading">{item.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    ))}
  </div>
);

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About us"
      title="Design experts for AI and product teams."
      description="We work as an extension of your product team, bringing design thinking and AI fluency to every part of the user journey."
    />

    <section className="border-b border-line">
      <div className="container-site py-20 sm:py-28 lg:py-36">
        <p className="eyebrow mb-6">Our mission</p>
        <p className="heading-lg max-w-5xl text-balance">
          We&apos;re on a mission to humanise adoption for{" "}
          <span className="bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">
            tech that matters.
          </span>
        </p>
      </div>
    </section>

    <Stats />

    <section className="border-b border-line">
      <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
        <SectionHeader eyebrow="Why Yume Labs" title="The Yume Labs edge." />
        <CellGrid items={edge} />
      </div>
    </section>

    <section className="border-b border-line">
      <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
        <SectionHeader eyebrow="Our values" title="Values that guide our choices and actions daily." />
        <CellGrid items={values} />
      </div>
    </section>

    <section className="border-b border-line">
      <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
        <SectionHeader
          eyebrow="Founders"
          title="Every project is led by a founder."
          description="Talk directly to the people who will shape your product."
        />
        <div className="grid border-l border-t border-line md:grid-cols-3">
          {founders.map((founder) => (
            <article key={founder.name} className="flex flex-col border-b border-r border-line">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-raised">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top grayscale"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{founder.name}</h3>
                  <p className="text-sm text-muted">{founder.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">{founder.bio}</p>
                <a
                  href={founder.meeting}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium hover:underline hover:underline-offset-4"
                >
                  Book a meeting <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default AboutPage;

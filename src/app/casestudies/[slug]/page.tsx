import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Glow from "@/components/sections/Glow";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CallToAction from "@/components/sections/CallToAction";
import { ArrowLeft } from "@/components/ui/Icons";

import { getNextProjects, getProject, projects } from "@/data/projects";
import { testimonials } from "@/data/site";
import type { ImageAsset } from "@/types";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.client} Case Study`,
    description: project.summary,
    openGraph: { images: project.cover.src },
  };
}

const Shot = ({ image, priority }: { image: ImageAsset; priority?: boolean }) => (
  <div className="overflow-hidden border border-line bg-surface">
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes="(min-width: 1280px) 1216px, 100vw"
      className="h-auto w-full"
    />
  </div>
);

/** Label column on the left, content on the right; collapses to a stack on mobile. */
const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-4 lg:grid-cols-4 lg:gap-0">
    <p className="eyebrow lg:sticky lg:top-28 lg:self-start lg:pr-8">{label}</p>
    <div className="lg:col-span-3">{children}</div>
  </div>
);

const CaseStudyPage = ({ params }: Params) => {
  const project = getProject(params.slug);
  if (!project) notFound();

  const testimonial = testimonials.find((item) => item.company === project.client);
  const meta = [
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Services", value: project.services.join(", ") },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
  ];

  return (
    <article>
      {/* Hero */}
      <header className="relative isolate border-b border-line">
        <Glow />
        <div className="container-site flex flex-col gap-6 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20">
          <Link
            href="/casestudies"
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-white sm:mb-10"
          >
            <ArrowLeft /> All case studies
          </Link>
          <p className="eyebrow">{project.client}</p>
          <h1 className="heading-xl max-w-5xl text-balance">{project.headline}</h1>
          <p className="prose-body max-w-3xl">{project.intro}</p>
        </div>
        <div className="border-t border-line">
          <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
            {meta.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 px-4 py-6 sm:px-6 ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
              >
                <dt className="eyebrow">{item.label}</dt>
                <dd className="text-sm">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Cover + overview */}
      <section className="border-b border-line">
        <div className="container-site flex flex-col gap-16 py-16 sm:py-20 lg:gap-24 lg:py-28">
          {project.hero ? (
            <Shot image={project.hero} priority />
          ) : (
            <div className="grid border border-line md:grid-cols-2">
              <div className="relative aspect-square border-b border-line md:border-b-0 md:border-r">
                <Image
                  src={project.cover}
                  alt={`${project.client} cover`}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end gap-4 bg-surface p-6 sm:p-10">
                <p className="eyebrow">Tags</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded border border-line px-2 py-1 text-xs text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <Row label="The challenge">
            <p className="text-xl leading-relaxed tracking-tight sm:text-2xl">{project.challenge}</p>
          </Row>
          <Row label="Our scope">
            <p className="prose-body">{project.scope}</p>
          </Row>
        </div>
      </section>

      {/* Narrative sections */}
      {project.sections.map((section) => (
        <section key={section.title} className="border-b border-line">
          <div className="container-site flex flex-col gap-12 py-16 sm:py-20 lg:py-28">
            <Row label={section.eyebrow}>
              <div className="flex flex-col gap-6">
                <h2 className="heading-lg text-balance">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="prose-body max-w-3xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Row>
            {section.image && <Shot image={section.image} />}
          </div>
        </section>
      ))}

      {/* Highlights */}
      <section className="border-b border-line">
        <div className="container-site flex flex-col gap-12 py-16 sm:py-20 lg:py-28">
          <SectionHeader eyebrow="Key solutions" title="What we delivered." />
          {project.highlights.some((item) => item.image) ? (
            <ol className="flex flex-col gap-16 lg:gap-24">
              {project.highlights.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-8">
                  <div className="grid gap-4 border-t border-line pt-6 lg:grid-cols-4 lg:gap-0">
                    <span className="text-sm tabular-nums text-subtle">/0{i + 1}</span>
                    <div className="flex flex-col gap-3 lg:col-span-3">
                      <h3 className="heading-md">{item.title}</h3>
                      <p className="prose-body max-w-3xl">{item.body}</p>
                    </div>
                  </div>
                  {item.image && <Shot image={item.image} />}
                </li>
              ))}
            </ol>
          ) : (
            <ol className="grid border-l border-t border-line md:grid-cols-3">
              {project.highlights.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-4 border-b border-r border-line p-6 sm:p-8">
                  <span className="text-sm tabular-nums text-subtle">/0{i + 1}</span>
                  <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      {project.gallery && (
        <section className="border-b border-line">
          <div className="container-site flex flex-col gap-6 py-16 sm:py-20 lg:py-28">
            {project.gallery.map((image) => (
              <Shot key={String(image.src)} image={image} />
            ))}
          </div>
        </section>
      )}

      {testimonial && (
        <section className="border-b border-line">
          <figure className="container-site flex flex-col gap-8 py-20 sm:py-24 lg:py-32">
            <blockquote className="heading-md max-w-4xl text-balance leading-snug">“{testimonial.message}”</blockquote>
            <figcaption className="text-sm">
              <span className="font-medium">{testimonial.name}</span>
              <span className="text-muted">
                {" "}
                · {testimonial.role}, {testimonial.company}
              </span>
            </figcaption>
          </figure>
        </section>
      )}

      <section className="border-b border-line">
        <div className="container-site flex flex-col gap-12 py-16 sm:py-20 lg:py-28">
          <SectionHeader eyebrow="More work" title="Keep exploring." />
          <ProjectGrid projects={getNextProjects(project.slug, 3)} />
        </div>
      </section>

      <CallToAction />
    </article>
  );
};

export default CaseStudyPage;

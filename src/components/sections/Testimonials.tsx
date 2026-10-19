"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { testimonials } from "@/data/site";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

const caseStudyFor = (company: string) => projects.find((project) => project.client === company);

const animate =
  "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

/**
 * Active slide is centred; the outgoing one animates out opposite to the travel direction;
 * every other slide waits, invisibly and without transition, on the side the next one enters from.
 */
const slideState = (i: number, active: number, prev: number, direction: 1 | -1) => {
  if (i === active) return `${animate} opacity-100 translate-x-0 blur-0`;
  const hidden = "pointer-events-none opacity-0 blur-sm";
  if (i === prev) return `${animate} ${hidden} ${direction === 1 ? "-translate-x-8" : "translate-x-8"}`;
  return `transition-none ${hidden} ${direction === 1 ? "translate-x-8" : "-translate-x-8"}`;
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const quotesRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number, dir: 1 | -1) => {
    const next = (index + testimonials.length) % testimonials.length;
    if (next === active) return;
    // Commit the waiting slides to the entry side and force a style flush, so the swap below animates from there.
    flushSync(() => setDirection(dir));
    void quotesRef.current?.offsetWidth;
    setPrev(active);
    setActive(next);
  };

  return (
    <section className="border-b border-line">
      <div className="container-site grid gap-10 py-20 sm:py-24 lg:grid-cols-4 lg:gap-8 lg:py-32">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <p className="eyebrow">Testimonials</p>
          <p className="text-sm text-muted">Our customer brands see consistent return on design investment.</p>
        </div>

        <figure className="flex flex-col gap-10 lg:col-span-3">
          {/* All quotes share one grid cell so the section keeps the height of the longest one. */}
          <div ref={quotesRef} className="grid" aria-live="polite">
            {testimonials.map((item, i) => (
              <blockquote
                key={item.name}
                aria-hidden={i !== active}
                className={`heading-md col-start-1 row-start-1 max-w-4xl text-balance leading-snug ${slideState(i, active, prev, direction)}`}
              >
                “{item.message}”
              </blockquote>
            ))}
          </div>

          <figcaption className="flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid">
              {testimonials.map((item, i) => {
                const caseStudy = caseStudyFor(item.company);
                return (
                  <div
                    key={item.name}
                    aria-hidden={i !== active}
                    className={`col-start-1 row-start-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm delay-100 ${slideState(i, active, prev, direction)}`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted">
                      {item.role}, {item.company}
                    </span>
                    {caseStudy && (
                      <Link
                        href={`/casestudies/${caseStudy.slug}`}
                        tabIndex={i === active ? undefined : -1}
                        className="inline-flex items-center gap-1 text-muted underline-offset-4 hover:text-white hover:underline"
                      >
                        Case study <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => goTo(i, i >= active ? 1 : -1)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === active}
                    className="group py-2"
                  >
                    <span
                      className={`block h-0.5 rounded-full transition-all duration-500 motion-reduce:transition-none ${
                        i === active ? "w-8 bg-white" : "w-4 bg-white/20 group-hover:bg-white/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goTo(active - 1, -1)}
                  aria-label="Previous testimonial"
                  className="rounded border border-line-strong p-2.5 transition-colors hover:bg-white/10"
                >
                  <ArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1, 1)}
                  aria-label="Next testimonial"
                  className="rounded bg-white p-2.5 text-black transition-colors hover:bg-neutral-200"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;

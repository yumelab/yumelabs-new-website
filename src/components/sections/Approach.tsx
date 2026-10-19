import SectionHeader from "./SectionHeader";
import { methods } from "@/data/services";

// Full class names so Tailwind picks them up.
const accents = [
  { dot: "bg-sky-400", ring: "group-hover:border-sky-400/70 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.35)]" },
  { dot: "bg-violet-400", ring: "group-hover:border-violet-400/70 group-hover:shadow-[0_0_24px_rgba(167,139,250,0.35)]" },
  { dot: "bg-amber-300", ring: "group-hover:border-amber-300/70 group-hover:shadow-[0_0_24px_rgba(252,211,77,0.35)]" },
];

const LoopIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path d="M17 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13v2a3 3 0 0 1-3 3H3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Approach = () => (
  <section className="border-b border-line">
    <div className="container-site flex flex-col gap-12 py-20 sm:py-24 lg:py-32">
      <SectionHeader
        eyebrow="Our approach"
        title="Innovate. Implement. Improve."
        description="A strategic, collaborative process for shaping your product's future, from first hypothesis to post-launch iteration."
      />

      <div className="border border-line">
        <ol className="grid lg:grid-cols-3">
          {methods.map((method, i) => (
            <li
              key={method.title}
              className="group relative flex flex-col border-b border-line transition-colors duration-300 last:border-b-0 hover:bg-surface lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              {/* Phase node on a line that runs across all three columns on desktop, and down the side on mobile. */}
              <div className="flex items-center gap-4 px-6 pt-6 sm:px-8 sm:pt-8">
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong bg-black text-xs tabular-nums transition-all duration-300 ${accents[i].ring}`}
                >
                  0{i + 1}
                </span>
                <span className="eyebrow">Phase {i + 1}</span>
                <span aria-hidden className="hidden h-px flex-1 bg-gradient-to-r from-line-strong to-transparent lg:block" />
              </div>

              <div className="flex flex-1 flex-col gap-8 p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="flex items-center gap-3 text-3xl font-medium tracking-heading">
                    {method.title}
                    <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${accents[i].dot}`} />
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{method.summary}</p>
                </div>

                <div className="mt-auto flex flex-col">
                  <p className="mb-3 text-xs text-subtle">{method.steps.length} activities</p>
                  <ul className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-1">
                    {method.steps.map((step, j) => (
                      <li key={step} className="flex items-baseline gap-3 border-t border-line py-2.5 text-sm">
                        <span className="w-7 shrink-0 text-xs tabular-nums text-subtle">
                          {i + 1}.{j + 1}
                        </span>
                        <span className="text-muted transition-colors group-hover:text-white">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 border-t border-line bg-surface/60 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center gap-3">
            <span className="text-muted">
              <LoopIcon />
            </span>
            Improve feeds straight back into Innovate. Every release sharpens the next hypothesis.
          </p>
          <span className="eyebrow">Continuous cycle</span>
        </div>
      </div>
    </div>
  </section>
);

export default Approach;

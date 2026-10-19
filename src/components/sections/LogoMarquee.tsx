import Image from "next/image";
import { clients } from "@/data/site";

const LogoMarquee = ({ title }: { title?: string }) => (
  <section className="border-b border-line">
    <div className="container-site py-12 sm:py-16">
      {title && <p className="mb-10 text-center text-sm text-muted">{title}</p>}
      <div className="mask-fade-x overflow-hidden">
        {/* The list is rendered twice so the -50% translate loops seamlessly. */}
        <ul className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <li key={`${client}-${i}`} aria-hidden={i >= clients.length} className="shrink-0">
              <Image
                src={`/clients/${client}.svg`}
                alt={i < clients.length ? client.replace(/-logo$/, "").replace(/-/g, " ") : ""}
                width={120}
                height={40}
                className="h-8 w-auto max-w-[120px] object-contain opacity-50 brightness-0 invert transition-opacity hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default LogoMarquee;

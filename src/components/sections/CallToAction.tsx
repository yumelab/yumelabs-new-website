import Glow from "./Glow";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/data/site";

const CallToAction = () => (
  <section className="relative isolate overflow-hidden border-b border-line">
    <Glow className="opacity-70" />
    <div className="container-site flex flex-col gap-10 py-24 sm:py-32 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex max-w-2xl flex-col gap-5">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2 className="heading-lg text-balance">Ready to simplify your next?</h2>
        <p className="prose-body">
          Tell us what you&apos;re building. A founder reads every message and replies within 12 hours.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/contact" arrow>
          Start a project
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="secondary">
          Call {site.phone}
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default CallToAction;

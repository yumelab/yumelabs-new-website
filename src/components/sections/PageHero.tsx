import type { ReactNode } from "react";
import Glow from "./Glow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** Standard top-of-page hero used by inner pages. */
const PageHero = ({ eyebrow, title, description, children }: Props) => (
  <section className="relative isolate border-b border-line">
    <Glow />
    <div className="container-site flex flex-col gap-6 pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-36">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="heading-xl max-w-4xl text-balance">{title}</h1>
      {description && <p className="prose-body max-w-2xl">{description}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;

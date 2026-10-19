import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

const SectionHeader = ({ eyebrow, title, description, action }: Props) => (
  <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading-lg text-balance">{title}</h2>
      {description && <p className="prose-body">{description}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export default SectionHeader;

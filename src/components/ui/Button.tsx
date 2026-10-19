import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-neutral-200",
  secondary: "border border-line-strong text-white hover:bg-white/10",
};

export const buttonClass = (variant: Variant = "primary", className = "") =>
  `inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  children: ReactNode;
};

export const ButtonLink = ({ variant = "primary", className, arrow, children, ...props }: ButtonLinkProps) => (
  <Link className={buttonClass(variant, className)} {...props}>
    {children}
    {arrow && <ArrowUpRight />}
  </Link>
);

type RowLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  children: ReactNode;
  className?: string;
};

/** Full-width bordered link row with a trailing arrow, Payload-style. */
export const RowLink = ({ children, className = "", ...props }: RowLinkProps) => (
  <Link
    className={`group flex items-center justify-between gap-4 border-b border-line px-4 py-5 text-base font-medium transition-colors hover:bg-white/[0.04] sm:px-6 ${className}`}
    {...props}
  >
    <span>{children}</span>
    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
  </Link>
);

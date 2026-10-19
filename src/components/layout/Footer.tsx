import Link from "next/link";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";
import { projects } from "@/data/projects";

const Footer = () => (
  <footer className="border-t border-line bg-black">
    <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <div className="flex flex-col gap-4">
        <Logo />
        <p className="max-w-xs text-sm text-muted">Dreams delivered. UX for AI and everything else.</p>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <span className="eyebrow mb-1">Company</span>
        {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
          <Link key={link.href} href={link.href} className="text-muted transition-colors hover:text-white">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <span className="eyebrow mb-1">Work</span>
        {projects.slice(0, 5).map((project) => (
          <Link
            key={project.slug}
            href={`/casestudies/${project.slug}`}
            className="text-muted transition-colors hover:text-white"
          >
            {project.client}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <span className="eyebrow mb-1">Contact</span>
        <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-white">
          {site.email}
        </a>
        <a href={site.phoneHref} className="text-muted transition-colors hover:text-white">
          {site.phone}
        </a>
        <address className="not-italic leading-relaxed text-subtle">{site.address}</address>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="container-site flex flex-col gap-4 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legal}. All rights reserved.
        </p>
        <div className="flex gap-6">
          {site.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

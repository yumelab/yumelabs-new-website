import type { Metadata } from "next";
import Image from "next/image";

import PageHero from "@/components/sections/PageHero";
import ContactForm from "./ContactForm";
import { site } from "@/data/site";
import { founders } from "@/data/team";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. A Yume Labs founder reads every message and replies within 12 hours.",
};

const ceo = founders[0];

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Ready to simplify your next?"
      description="We're step one on your journey to a product that stands apart."
    />

    <section className="border-b border-line">
      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-4 lg:gap-0 lg:py-24">
        <aside className="flex flex-col gap-8 lg:pr-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line bg-surface-raised">
              <Image src={ceo.photo} alt={ceo.name} fill sizes="56px" className="object-cover object-top" />
            </div>
            <div>
              <p className="text-sm font-medium">{ceo.name}</p>
              <p className="text-xs text-muted">{ceo.role}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            &ldquo;I read every message. I will personally get back to you within 12 hours.&rdquo;
          </p>
          <dl className="flex flex-col gap-5 border-t border-line pt-8 text-sm">
            <div className="flex flex-col gap-1">
              <dt className="eyebrow">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:underline hover:underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="eyebrow">Phone</dt>
              <dd>
                <a href={site.phoneHref} className="hover:underline hover:underline-offset-4">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="eyebrow">Studio</dt>
              <dd className="leading-relaxed text-muted">{site.address}</dd>
            </div>
          </dl>
        </aside>

        <div className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8">
          <ContactForm />
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;

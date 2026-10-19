import PageHero from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";

const NotFound = () => (
  <PageHero
    eyebrow="404"
    title="You're not lost. You've found our secret page."
    description="The page you're looking for doesn't exist, but plenty of others do."
  >
    <div className="mt-4 flex flex-wrap gap-3">
      <ButtonLink href="/">Back home</ButtonLink>
      <ButtonLink href="/casestudies" variant="secondary">
        Case studies
      </ButtonLink>
      <ButtonLink href="/services" variant="secondary">
        Services
      </ButtonLink>
    </div>
  </PageHero>
);

export default NotFound;

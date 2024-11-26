import type { Metadata } from "next";
import Link from "next/link"; 
import { ProjectsList } from "@/data/projects";
import Project from "@/components/Project";
import ProjectSmall from "@/components/ProjectSmall";

import Footer from "@/components/Footer";
import Engage from "@/components/Engage";

import { AppRoutes } from "@/constants/routes";

import { ProjectType } from "../../types";
import Button from "@/components/Button";

import GoodFlows from "@/assets/work/good-flows.webp";
import TwentyTwoYards from "@/assets/work/twenty-two-yards.webp";
import IEACIITMadras from "@/assets/work/ieac-iit-madras.webp";
import GieseckeDevrient from "@/assets/work/giesecke- devrient.webp";
import BookMyPooja from "@/assets/work/book-my-pooja.webp";
import IndicOrigin from "@/assets/work/indic-origin.webp";
import DoItZero from "@/assets/work/do-it-zero.webp";
import Maiven from "@/assets/work/maiven.webp";
import Approlabs from "@/assets/work/approlabs.webp";
import Hero from "./Hero";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const CaseStudies = () => {
  const CoverImages = [
    GoodFlows,
    GieseckeDevrient,
    BookMyPooja,
    TwentyTwoYards,
    IEACIITMadras,
    IndicOrigin,
    DoItZero,
    Maiven,
    Approlabs,
  ];
  return (
    <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
      <Hero/>
      <section className="flex flex-col md:gap-16 md:py-32 py-16">
        <div className="md:columns-2 gap-4 pt-16 md:pt-0">
          {ProjectsList.map((project: ProjectType, i) =>
            i % 2 == 0 ? (
              <Project
                key={i}
                title={project.title}
                description={project.description}
                tags={project.tags}
                url={project.url}
                img={CoverImages[i]?.src || ""}
              />
            ) : (
              <ProjectSmall
                key={i}
                title={project.title}
                description={project.description}
                tags={project.tags}
                url={project.url}
                img={CoverImages[i]?.src || ""}
              />
            )
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link href={AppRoutes.SERVICES}>
            <Button
              label="Explore Services"
              variant="text"
              style="outline"
              size="xl"
              type="button"
              texticon={true}
            />
          </Link>
        </div>
      </section>
      <Engage />
      <Footer />
    </main>
  );
};

export default CaseStudies;

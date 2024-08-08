import Link from "next/link";
import type { Metadata } from "next";

import Hero from "./Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import ProjectSmall from "@/components/ProjectSmall";
import Button from "@/components/Button";

import DummyImg from "@/assets/14.png";

import { ProjectsList } from "@/data/projects";
import { AppRoutes } from "@/constants/routes";
import { ProjectType } from "../../types";

import DoItZero from '@/assets/work/do-it-zero.webp'
import Maiven from '@/assets/work/maiven.webp'
import BookMyPooja from '@/assets/work/book-my-pooja.webp'
import TwentyTwoYards from '@/assets/work/twenty-two-yards.webp'
import IEACIITMadras from '@/assets/work/ieac-iit-madras.webp'
import GoodFlows from '@/assets/work/good-flows.webp'
import ZeroEmission from '@/assets/work/zero-emission.webp'


export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Yume Labs is a boutique UX/UI Design, Identity Design, and Industrial Design agency in Bangalore, India helping ambitious brands scale globally through Experience-led Growth.",
};

const Work = () => {
  const Projects = [Maiven,ZeroEmission,IEACIITMadras,BookMyPooja,GoodFlows,DoItZero,TwentyTwoYards]
  return (
    <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
      <Hero />
      <section className="flex flex-col md:py-32 py-16">
        <div className="md:columns-2 md:gap-4">
          {ProjectsList.filter((item, i) => i < 4).map(
            (project: ProjectType, i) => (
              <div key={i}>
                {0 < i && i < 3 ? (
                  <ProjectSmall
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    img={Projects[i].src}
                  />
                ) : (
                  <Project
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    img={Projects[i].src}
                  />
                )}
              </div>
            )
          )}
        </div>
        <div className="flex items-center md:py-16 justify-center">
          <Link href={AppRoutes.SERVICES}>
            <Button
              variant="text"
              style="outline"
              label="Load More Projects"
              size="md"
              type="button"
            />
          </Link>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default Work;

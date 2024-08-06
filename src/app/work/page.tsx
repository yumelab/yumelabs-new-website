import Link from "next/link";
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

const Work = () => {
  return (
    <main className="container md:max-w-screen-xl mx-auto px-8 md:px-0 flex flex-col">
      <Hero />
      <section className="flex flex-col md:py-32 py-16">
        <div className="md:columns-2 md:gap-4">
          {ProjectsList.filter((item, i) => i < 4).map(
            (project: ProjectType, i) => (
              <div key={i}>
                {0 < i && i < 3 ? (
                  <Project
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    img={DummyImg.src}
                  />
                ) : (
                  <ProjectSmall
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    img={DummyImg.src}
                  />
                )}
              </div>
            )
          )}
        </div>
        <div className="flex items-center md:py-16 justify-center">
          <Link href={AppRoutes.SERVICES}>
            <Button
              style={false}
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

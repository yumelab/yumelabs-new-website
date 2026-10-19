import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

/** Bordered grid of project cards; each cell draws its right/bottom edge so partial rows stay clean. */
const ProjectGrid = ({ projects, priorityCount = 0 }: { projects: Project[]; priorityCount?: number }) => (
  <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, i) => (
      <ProjectCard key={project.slug} project={project} priority={i < priorityCount} />
    ))}
  </div>
);

export default ProjectGrid;

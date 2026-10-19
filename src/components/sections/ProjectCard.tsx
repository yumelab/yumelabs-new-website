import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { ArrowUpRight } from "@/components/ui/Icons";

type Props = {
  project: Project;
  priority?: boolean;
};

const ProjectCard = ({ project, priority }: Props) => (
  <Link
    href={`/casestudies/${project.slug}`}
    className="group flex h-full flex-col border-b border-r border-line bg-black transition-colors hover:bg-surface"
  >
    <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
      <Image
        src={project.cover}
        alt={`${project.client} case study cover`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:grayscale-0"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium tracking-tight">{project.client}</h3>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded border border-line px-2 py-1 text-[11px] uppercase tracking-wider text-muted">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </Link>
);

export default ProjectCard;

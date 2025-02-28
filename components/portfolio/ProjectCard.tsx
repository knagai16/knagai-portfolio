import { Project } from "./ProjectCards";
import TechTag from "./TechTag";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <div
    key={index}
    className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
  >
    <h2 className="text-xl font-semibold">{project.title}</h2>
    <p>
      <strong>期間：</strong>
      {project.period}
    </p>
    <p>
      <strong>役割：</strong>
      {project.role}
    </p>
    <p className="mt-2">{project.description}</p>
    <div className="mt-2 flex flex-wrap gap-2">
      {project.technologies.map((tech, i) => (
        <TechTag key={i} tech={tech} />
      ))}
    </div>
  </div>
);

export default ProjectCard;

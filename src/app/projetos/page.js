import ProjectCard from "../../components/ProjectCard";
import { getGithubProjects } from "../../services/github";

export default async function Projetos() {
  const projects = await getGithubProjects();

  return (
    <main className="page-container">
      <section className="projects-section">
        <h1>Projetos Desenvolvidos</h1>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              language={project.language}
              url={project.html_url}
            />
          ))}

        </div>
      </section>
    </main>
  );
}
export default function ProjectCard({
  name,
  description,
  language,
  url,
}) {
  return (
    <div className="project-card">
      <h3>{name}</h3>

      <p>
        {description || "Projeto sem descrição."}
      </p>

      <span>{language || "Tecnologia não informada"}</span>

      <a href={url} target="_blank">
        Ver Projeto
      </a>
    </div>
  );
}
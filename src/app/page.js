import SkillCard from "../components/SkillCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Olá, eu sou Ed</h1>

          <h2>Desenvolvedor Front-End</h2>

          <p>
            Desenvolvendo interfaces modernas, responsivas e experiências
            digitais utilizando React, Next.js e JavaScript.
          </p>

          <div className="hero-buttons">
            <button>Ver Projetos</button>

            <button className="secondary-button">
              GitHub
            </button>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2>Minhas Tecnologias</h2>

        <div className="skills-grid">
          <SkillCard title="HTML5" />
          <SkillCard title="CSS3" />
          <SkillCard title="JavaScript" />
          <SkillCard title="React" />
          <SkillCard title="Next.js" />
          <SkillCard title="Git & GitHub" />
        </div>
      </section>
    </main>
  );
}
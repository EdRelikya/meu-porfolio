export default function Profissional() {
  return (
    <main className="page-container">
      <section className="professional-section">
        <h1>Experiência Profissional</h1>

        <div className="professional-grid">

          <div className="professional-card">
            <h3>Desenvolvimento Front-End</h3>

            <span>Projetos Acadêmicos e Pessoais</span>

            <p>
              Desenvolvimento de interfaces modernas utilizando HTML, CSS,
              JavaScript, React e Next.js.
            </p>

            <div className="tech-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="professional-card">
            <h3>Versionamento com Git</h3>

            <span>Controle de Código</span>

            <p>
              Utilização de Git e GitHub para versionamento, organização de
              commits e gerenciamento de projetos.
            </p>

            <div className="tech-tags">
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div className="professional-card">
            <h3>Metodologias Ágeis</h3>

            <span>Scrum e Organização</span>

            <p>
              Participação em desenvolvimento organizado utilizando conceitos
              de Scrum e divisão de tarefas.
            </p>

            <div className="tech-tags">
              <span>Scrum</span>
              <span>Organização</span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
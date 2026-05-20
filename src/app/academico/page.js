export default function Academico() {
  return (
    <main className="page-container">
      <section className="academic-section">
        <h1>Experiência Acadêmica</h1>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Sistemas para internet - UNICAP</h3>

              <span>2025 - Atual</span>

              <p>
                Desenvolvimento de aplicações web utilizando HTML, CSS,
                JavaScript, React e Next.js.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Projetos Acadêmicos</h3>

              <span>2025 - Atual</span>

              <p>
                Desenvolvimento de interfaces modernas e aplicações utilizando
                componentização, rotas e integração com APIs.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
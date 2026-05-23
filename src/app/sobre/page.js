export default function Sobre() {
  return (
    <main className="page-container">
      <section className="about-section">
        <h1>Sobre Mim</h1>

        <p className="about-text">
          Meu nome é Edmundo Cariolano, e sou estudante e desenvolvedor front-end apaixonado por tecnologia,
          interfaces modernas e experiências digitais. Tenho interesse em
          desenvolvimento web, design de interfaces e criação de projetos
          interativos utilizando React, Next.js e JavaScript.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Front-End</h3>

            <p>
              Desenvolvimento de interfaces modernas, responsivas e organizadas.
            </p>
          </div>

          <div className="about-card">
            <h3>React & Next.js</h3>

            <p>
              Criação de aplicações modernas utilizando componentização e rotas.
            </p>
          </div>

          <div className="about-card">
            <h3>Versionamento</h3>

            <p>
              Utilização de Git e GitHub para organização e controle de versões.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
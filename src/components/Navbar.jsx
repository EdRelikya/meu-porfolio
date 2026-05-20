import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Ed.dev
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/sobre">Sobre</Link>
          </li>

          <li>
            <Link href="/academico">Acadêmico</Link>
          </li>

          <li>
            <Link href="/profissional">Profissional</Link>
          </li>

          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
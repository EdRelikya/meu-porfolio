import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio desenvolvido com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
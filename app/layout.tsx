import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discretta | M&A Teaser",
  description: "Venda de empresa - Discretta Comércio e Distribuidora LTDA. Pitch premium para investidores e compradores estratégicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 min-h-screen font-sans antialiased flex flex-col">
        <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-20">
          <div className="text-xl font-bold text-pink-700">Discretta</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#negocio" className="text-gray-700 hover:text-pink-700 font-medium">Negócio</a>
            <a href="#parceria" className="text-gray-700 hover:text-pink-700 font-medium">Parceria</a>
            <a href="#roadmap" className="text-gray-700 hover:text-pink-700 font-medium">Roadmap</a>
            <a href="#lideranca" className="text-gray-700 hover:text-pink-700 font-medium">Liderança</a>
            <a href="#contato" className="text-pink-700 font-semibold">Contato</a>
          </div>
        </nav>
        <div className="flex-1">{children}</div>
        <footer className="w-full bg-gray-100 py-8 mt-12 text-center text-gray-500 text-sm">
          <div className="mb-2 font-semibold text-pink-700">Discretta Comércio e Distribuidora LTDA</div>
          <div>Teaser de aquisição | Oportunidade premium para investidores e compradores estratégicos</div>
          <div className="mt-2">© {new Date().getFullYear()} Discretta. Todos os direitos reservados.</div>
        </footer>
      </body>
    </html>
  );
}

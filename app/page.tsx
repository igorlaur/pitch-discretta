import Card from "./components/Card";
import Grid from "./components/Grid";
import BigNumber from "./components/BigNumber";
import SimpleBarChart from "./components/SimpleBarChart";

const channels = [
  { label: "Mercado Livre (FULL + FLEX)", value: 1392731.79, color: "#3b82f6" },
  { label: "Shopee", value: 297919.27, color: "#6366f1" },
  { label: "Shein", value: 150892.00, color: "#0ea5e9" },
  { label: "Loja Física", value: 109798.63, color: "#f59e42" },
  { label: "Site próprio", value: 100768.18, color: "#10b981" },
  { label: "WhatsApp + Manual", value: 75249.72, color: "#f43f5e" },
  { label: "Magalu", value: 32240.62, color: "#a21caf" },
  { label: "Kwai", value: 13150.85, color: "#f472b6" },
  { label: "Rappi", value: 12551.87, color: "#f87171" },
  { label: "iFood Mercado", value: 4363.70, color: "#facc15" },
  { label: "Vila Madalena", value: 860.80, color: "#d1d5db" },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4 md:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">Discretta Comércio e Distribuidora LTDA</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-2">Venda total da empresa | M&A Teaser</p>
        <p className="text-md text-gray-500 mb-6">Lingerie, Moda Praia e Sex Shop | Marca própria, fabricação própria, operação multicanal</p>
        <div className="max-w-2xl mx-auto text-gray-800 text-base md:text-lg mb-8">
          <span className="font-semibold text-blue-700">Teaser de Aquisição</span> – Discretta Comércio e Distribuidora LTDA<br />
          Fundada em 2018 por Eliene Alves, a Discretta é referência nacional em lingerie, moda praia e sex shop, com marca própria, fabricação verticalizada, operação multicanal e modelo white label/D2C para marcas e artistas.<br />
          <span className="block mt-2 text-blue-700 font-medium">Oportunidade premium para investidores e grupos estratégicos.</span>
        </div>
      </header>

      <section id="negocio" className="mb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <Card title="Canais de Venda">
              <SimpleBarChart data={channels} />
            </Card>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Números do Negócio">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-green-600 mb-1">R$ 2.190.527,43</span>
                  <span className="text-sm text-gray-500">Faturamento anual</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-green-600 mb-1">R$ 101.000</span>
                  <span className="text-sm text-gray-500">Lucro líquido (sem pró-labore)</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-green-600 mb-1">R$ 140.000</span>
                  <span className="text-sm text-gray-500">Pró-labore atual</span>
                </div>
                <div className="flex flex-row justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-blue-600 mb-1">4,2%</span>
                    <span className="text-sm text-gray-500">Margem líquida</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-blue-600 mb-1">3.000</span>
                    <span className="text-sm text-gray-500">SKUs ativos</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-green-600 mb-1">R$ 7.500</span>
                  <span className="text-sm text-gray-500">Custo fixo mensal</span>
                </div>
              </div>
            </Card>
            <Card title="Estoque">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-green-600 mb-1">R$ 410.000</span>
                  <span className="text-sm text-gray-500">Valor de estoque</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-blue-600 mb-1">2–4 meses</span>
                  <span className="text-sm text-gray-500">Giro</span>
                </div>
              </div>
              <div className="mt-4 text-center text-xs text-gray-400">[Imagem de estoque/expedição – substituir]</div>
            </Card>
            <Card title="Dívidas">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-700"><span>Fornecedores</span><span>R$ 100.000</span></div>
                <div className="flex justify-between text-sm text-gray-700"><span>Pronampe</span><span>R$ 50.000</span></div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Área separada para apresentação dos canais */}
      <section className="mt-12 mb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {/* Mercado Livre */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-md mx-auto text-center">
            <a href="https://www.mercadolivre.com.br/profile/DISCRETTA" target="_blank" rel="noopener" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold shadow hover:bg-yellow-500 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="12" ry="12" fill="#FFE600"/><path d="M7.5 12.5C8.5 13.5 10.5 15 12 15C13.5 15 15.5 13.5 16.5 12.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/><path d="M7.5 12.5C8.5 11.5 10.5 10 12 10C13.5 10 15.5 11.5 16.5 12.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Mercado Livre
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Loja FULL + FLEX, destaque nacional no segmento, reputação máxima, operação multicanal e logística avançada.
            </div>
          </div>

          {/* Shopee */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-md mx-auto text-center">
            <a href="https://shopee.com.br/discretta" target="_blank" rel="noopener" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-orange-600 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#FF5722"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">S</text></svg>
              Shopee
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Loja com forte presença, reputação alta, produtos exclusivos e atendimento ágil.
            </div>
          </div>

          {/* Shein */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-md mx-auto text-center">
            <a href="https://shein.com.br/shop/discretta" target="_blank" rel="noopener" className="bg-pink-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-pink-600 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#EC4899"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">SH</text></svg>
              Shein
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Loja em expansão, produtos diferenciados, potencial de crescimento e integração com marcas.
            </div>
          </div>

          {/* Site Próprio */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-md mx-auto text-center">
            <a href="https://discretta.com.br" target="_blank" rel="noopener" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-green-700 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#22C55E"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">SP</text></svg>
              Site Próprio
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Plataforma própria, controle total de portfólio, experiência premium e integração multicanal.
            </div>
          </div>

          {/* Instagram */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-md mx-auto text-center">
            <a href="https://instagram.com/discretta" target="_blank" rel="noopener" className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:opacity-90 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="url(#ig-gradient)"/><defs><linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#EC4899"/><stop offset="0.5" stopColor="#A21CAF"/><stop offset="1" stopColor="#FACC15"/></linearGradient></defs><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">IG</text></svg>
              Instagram
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Canal de branding, engajamento e divulgação de produtos exclusivos.
            </div>
          </div>

          {/* Google Maps (Loja Física) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center w-full min-w-[220px] max-w-full text-center">
            <a href="https://goo.gl/maps/2QwQwQwQwQwQwQwQ6" target="_blank" rel="noopener" className="bg-gray-700 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-gray-900 transition text-lg flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#374151"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff">MAPS</text></svg>
              Loja Física
            </a>
            <div className="mt-4 text-center text-gray-700 text-base">
              Endereço: Rua Exemplo, 123, São Paulo/SP<br/>Ponto estratégico, atendimento presencial, estoque e operação.
            </div>
          </div>
        </div>
      </section>

      <section id="parceria" className="mb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Parceria Estratégica</h2>
          <ul className="list-disc pl-5 text-gray-700 text-base">
            <li>Fabricação sob demanda para artista famosa (white label / D2C)</li>
            <li>Próximo passo: gestão completa do e-commerce da artista</li>
            <li>Posicionamento: plataforma de produto + operação para marcas pessoais e creators</li>
          </ul>
        </div>
      </section>

      <section id="roadmap" className="mb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Roadmap</h2>
          <ul className="list-disc pl-5 text-gray-700 text-base">
            <li>Curto prazo: gestão do site da artista, consolidação do modelo white label</li>
            <li>Curto/médio prazo: entrada no 99Mercados</li>
            <li>Médio prazo: importação direta da China, redução de custos e aumento de margem</li>
          </ul>
        </div>
      </section>

      <section id="lideranca" className="mb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Operação</h2>
          <ul className="list-disc pl-5 text-gray-700 text-base mb-6">
            <li>3 colaboradores (expedição, vendas, e-commerce)</li>
            <li>ERP: Bling</li>
            <li>Processos documentados</li>
            <li>Logística: Mercado Livre FULL + FLEX, Correios/transportadoras, Motoboy (Uber/99)</li>
            <li>Capacidade de transição: sim</li>
          </ul>
          <h2 className="text-xl font-bold text-blue-700 mb-2">Liderança Estratégica</h2>
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-900">Eliene Alves</span>
              <div className="text-base text-gray-700">Sócia-fundadora | Visão de produto, marca e portfólio | Estruturação da operação e fabricação própria | Liderança estratégica</div>
            </div>
            <div>
              <span className="font-semibold text-gray-900">Igor Laur</span>
              <div className="text-base text-gray-700">Gestor estratégico | Especialista em inovação, tecnologia e agilidade | Estruturação de marketplaces e aceleração de e-commerce</div>
            </div>
            <div className="mt-4 text-center text-xs text-gray-400">[Imagem de produtos exclusivos – substituir]</div>
          </div>
        </div>
      </section>

      <section id="contato" className="mt-12 flex flex-col items-center">
        <div className="bg-blue-700 text-white rounded-xl px-8 py-6 text-center shadow-lg max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-2">Interessado em negociar?</h2>
          <p className="mb-4 text-md">Entre em contato para conversa e negociação. Oportunidade única para investidores e compradores estratégicos.</p>
          <a
            href="mailto:igor@discretta.com.br?subject=Interesse%20na%20compra%20da%20Discretta"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-50 transition"
          >
            Conversar sobre aquisição
          </a>
        </div>
      </section>
    </main>
  );
}

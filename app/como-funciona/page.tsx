import Link from "next/link";
const steps = [
  [
    "01 · RECEBA",
    "Dados da operação",
    "Arquivos, integrações e APIs alimentam o processamento sem exigir a troca do ERP ou CRM.",
  ],
  [
    "02 · IDENTIFIQUE",
    "Contexto da receita",
    "Venda, produto, cliente, canal, área, origem e beneficiários.",
  ],
  [
    "03 · APLIQUE",
    "Regra correspondente",
    "O motor identifica a política válida para aquela operação e período.",
  ],
  [
    "04 · CALCULE",
    "Split e remuneração",
    "Comissão, repasse, bônus, divisão de receita e demais valores variáveis.",
  ],
  [
    "05 · EXPLIQUE",
    "Memória de cálculo",
    "Cada resultado mantém o rastro que permite entender como o valor foi formado.",
  ],
  [
    "06 · APROVE",
    "Governança",
    "Fluxos de validação e alçadas antes do fechamento financeiro.",
  ],
  [
    "07 · PAGUE",
    "Operação financeira",
    "Prepare os valores aprovados para integração com o processo de pagamento.",
  ],
  [
    "08 · CONCILIE",
    "Previsto x realizado",
    "Compare o valor calculado com a movimentação efetivamente realizada.",
  ],
  [
    "09 · AUDITE",
    "Histórico preservado",
    "Consulte versões, critérios, responsáveis e resultados de períodos anteriores.",
  ],
];
export default function ComoFuncionaPage() {
  const phases = [
    ["Preparar os dados", steps.slice(0, 3)],
    ["Processar e explicar", steps.slice(3, 6)],
    ["Executar e conferir", steps.slice(6, 9)],
  ];
  return (
    <main>
      <div className="inner-page process-page">
        <div className="container">
          <Link className="back-link" href="/">
            ← Voltar para início
          </Link>
          <div className="eyebrow">Como funciona</div>
          <h1>
            Da entrada à conciliação.
            <br />
            <span>Uma única trilha.</span>
          </h1>
          <p className="page-lead">
            O FontCash entra na operação existente, recebe os eventos, executa a
            política e preserva a explicação de cada cálculo.
          </p>
          <div className="process-phases">
            {phases.map(([phase, items]) => (
              <section className="process-phase" key={phase as string}>
                <header>
                  <h2>{phase as string}</h2>
                </header>
                <div>
                  {(items as string[][]).map(([number, title, text]) => (
                    <article key={number}>
                      <span>{number}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <section className="process-proof">
            <div>
              <div className="eyebrow">O que permanece registrado</div>
              <h2>O resultado não termina em um número.</h2>
            </div>
            <div>
              <p>
                <strong>Origem:</strong> evento, produto, canal e beneficiários.
              </p>
              <p>
                <strong>Critério:</strong> política e versão aplicadas no
                período.
              </p>
              <p>
                <strong>Decisão:</strong> cálculo, ajustes e aprovações
                realizadas.
              </p>
              <p>
                <strong>Realização:</strong> pagamento previsto e valor
                conciliado.
              </p>
            </div>
          </section>
          <Link className="button" href="/contato">
            Quero conversar sobre minha operação →
          </Link>
        </div>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Como funciona | FontCash",
  description:
    "Entenda como o FontCash recebe dados, aplica regras, calcula, aprova, paga e concilia.",
};

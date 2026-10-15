import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    icon: GitBranch,
    title: "Comissões e remuneração variável",
    text: "Centralize políticas de comissão, metas, faixas, bônus e regras por produto, canal ou perfil.",
  },
  {
    icon: Landmark,
    title: "Splits e repasses",
    text: "Divida receitas entre parceiros, unidades, representantes e empresas com critérios claros.",
  },
  {
    icon: ShieldCheck,
    title: "Governança e auditoria",
    text: "Preserve versões, aprovações e memória de cálculo para que cada valor seja explicável.",
  },
];
export default function SolucoesPage() {
  return (
    <main>
      <div className="inner-page solutions-page">
        <div className="container">
          <Link className="back-link" href="/">
            ← Voltar para início
          </Link>
          <div className="eyebrow">Soluções FontCash</div>
          <h1>
            Controle financeiro para regras que não cabem em uma planilha.
          </h1>
          <p className="page-lead">
            O FontCash centraliza políticas, processa valores e preserva a
            memória de cálculo de comissões, splits, bonificações, repasses e
            remuneração variável.
          </p>
          <div className="solution-grid">
            {solutions.map(({ icon: Icon, title, text }) => (
              <article className="solution-card" key={title}>
                <Icon />
                <h2>{title}</h2>
                <p>{text}</p>
                <Link className="text-link" href="/contato">
                  Conversar sobre este cenário <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
          <section className="solution-example">
            <div>
              <div className="eyebrow">Exemplo operacional</div>
              <h2>Uma venda, três beneficiários e uma política versionada.</h2>
              <p>
                Em vez de consolidar percentuais manualmente, a operação
                registra o contexto da receita, identifica a política válida e
                distribui o valor conforme os critérios definidos.
              </p>
            </div>
            <div className="example-trace">
              <div>
                <small>Evento recebido</small>
                <strong>Venda · Produto A · Canal parceiro</strong>
              </div>
              <div>
                <small>Regra aplicada</small>
                <strong>Política comercial v.4</strong>
              </div>
              <div>
                <small>Distribuição</small>
                <strong>Executivo 70% · Gestor 20% · Canal 10%</strong>
              </div>
              <div>
                <small>Resultado</small>
                <strong>Cálculo aprovado com memória preservada</strong>
              </div>
            </div>
          </section>
          <section className="solution-scenarios">
            <div className="eyebrow">Onde se aplica</div>
            <div className="scenario-list">
              {[
                [
                  "Comissão comercial",
                  "Políticas por produto, carteira, meta, canal ou perfil.",
                ],
                [
                  "Split de receita",
                  "Distribuição entre parceiros, unidades, plataformas e empresas.",
                ],
                [
                  "Bonificações",
                  "Campanhas e incentivos com critérios e períodos definidos.",
                ],
                [
                  "Representantes e redes",
                  "Repasses por território, faixa, unidade ou participante.",
                ],
                [
                  "Marketplaces",
                  "Divisão entre plataforma, fornecedor e parceiro.",
                ],
                [
                  "Serviços financeiros",
                  "Regras por produto, origem, carteira e política comercial.",
                ],
              ].map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <div>
              <div className="eyebrow">Uma única trilha</div>
              <h2>
                Menos conferência manual. Mais controle sobre o resultado.
              </h2>
            </div>
            <div className="detail-list">
              {[
                "Receba dados de ERPs, CRMs, arquivos e APIs",
                "Identifique o contexto da receita e os beneficiários",
                "Aplique a política válida para cada operação",
                "Calcule, aprove, prepare o pagamento e concilie",
              ].map((item) => (
                <div key={item}>
                  <CheckCircle2 />
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Soluções | FontCash",
  description:
    "Comissões, splits, repasses e remuneração variável com rastreabilidade financeira.",
};

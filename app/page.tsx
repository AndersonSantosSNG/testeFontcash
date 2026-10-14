'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight, GitBranch, Landmark, ShieldCheck } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FMIA1NxI8rfPyiKfAVGcMBBdF7anzu.png'

const problems = [
  ['Regras espalhadas', 'Políticas comerciais em planilhas, documentos, e-mails ou no conhecimento de poucas pessoas.'],
  ['Cálculos manuais', 'Horas conciliando vendas, percentuais, metas, produtos, áreas e beneficiários a cada fechamento.'],
  ['Falta de transparência', 'Quem recebe não consegue entender facilmente como o valor foi formado e por qual regra.'],
  ['Erros e retrabalho', 'Uma fórmula alterada ou uma base divergente pode afetar centenas de cálculos.'],
  ['Baixa rastreabilidade', 'Meses depois, reconstruir o motivo de um pagamento pode exigir arquivos, pessoas e memória.'],
  ['Escala limitada', 'A empresa cresce, mas o processo de fechamento continua dependente de controles manuais.'],
]

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Rastreabilidade financeira</div>
            <h1>Da regra ao <span>pagamento.</span><br />Tudo rastreável.</h1>
            <p className="lead">Automatize comissões, splits, repasses, bonificações e remunerações variáveis. Da origem da receita ao cálculo, aprovação, pagamento e conciliação — cada valor com sua regra, seu histórico e sua explicação.</p>
            <div className="hero-cta"><Link className="button" href="/contato">Quero automatizar minha operação <ArrowRight /></Link><Link className="text-link" href="/como-funciona">Conhecer o FontCash <ChevronRight /></Link></div>
            <div className="trustline"><span>Motor de regras</span><span>Processamento</span><span>Auditoria</span><span>Integrações</span></div>
          </div>
          <div className="trace-card" aria-label="Fluxo financeiro rastreável">
            <div className="trace-head"><div><strong>Fluxo financeiro</strong><small> · trilha rastreável</small></div><div className="live">OPERANDO</div></div>
            <div className="flow">{['Origem|Venda, evento ou receita|recebido','Regra|Política comercial aplicável|identificada','Cálculo & split|Valores por beneficiário|calculado','Aprovação|Validação antes do fechamento|aprovado','Pagamento|Preparação da operação financeira|processado','Conciliação|Previsto x realizado|rastreado'].map((item, i) => { const [title, desc, status] = item.split('|'); return <div className={i === 1 ? 'flow-step active' : 'flow-step'} key={title}><div className="flow-n">0{i + 1}</div><div><strong>{title}</strong><small>{desc}</small></div><span>{status}</span></div> })}</div>
          </div>
        </div>
      </section>

      <section className="proof"><div className="container proof-grid"><div><b>R$ <em>1,058</em> bi</b><span>em vendas processadas</span></div><div><b><em>104.371</em></b><span>comissões processadas</span></div><div><b><em>70%</em></b><span>menos tempo na apuração manual</span></div><div><b>R$ <em>7,36 mi</em></b><span>em splits e comissões</span></div></div></section>

      <section className="section" id="problema"><div className="container"><div className="section-head"><div><div className="eyebrow">01 · Onde o financeiro perde</div><h2>Quando o dinheiro passa por planilhas, <span>o risco também passa.</span></h2></div><p className="lead">Quanto mais produtos, pessoas, canais e regras, maior a chance de o fechamento virar uma operação de conferência, retrabalho e explicações.</p></div><div className="cards">{problems.map(([title, text], i) => <article className="card" key={title}><div className="card-index">0{i + 1}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="statement-section"><div className="container statement"><div className="eyebrow">02 · O custo invisível</div><h2>O financeiro vê o pagamento.<br /><span>O FontCash mostra tudo o que aconteceu antes dele.</span></h2><p className="lead">Um valor não deveria ser apenas uma célula. Ele é resultado de uma origem, uma regra, uma versão, percentuais, condições, aprovações e ajustes.</p><Link href="/solucoes" className="text-link">Explorar as soluções <ArrowRight /></Link></div></section>

      <section className="section rule-zone"><div className="container rules-layout"><div><div className="eyebrow">03 · Motor de regras</div><h2>Sua política muda.<br /><span>O motor acompanha.</span></h2><p className="lead">Crie regras sem transformar cada alteração comercial em um novo projeto de software.</p><div className="checks">{['Percentuais, valores fixos e faixas','Metas, produtos, clientes e canais','Hierarquias, áreas, parceiros e funções','Versionamento para preservar o histórico'].map(x => <div className="check" key={x}><CheckCircle2 />{x}</div>)}</div></div><div className="rule-builder"><div className="window-top"><strong>Nova regra de remuneração</strong><span>•••</span></div><p><small>SE</small><b>Produto = Linha A</b><small>E</small><b>Canal = Parceiro</b></p><p><small>E</small><b>Vendas ≥ R$ 500 mil</b></p><p><small>ENTÃO</small><b className="green">Comissão = 4%</b><b className="green">Bônus = +1%</b></p><p><small>DIVIDIR</small><b>Executivo 70%</b><b>Gestor 20%</b><b>Canal 10%</b></p><div className="rule-result">Regra pronta para processamento <strong>ATIVA ✓</strong></div></div></div></section>

      <section className="cta-section"><div className="container cta-inner"><div><div className="eyebrow">Pronto para avançar?</div><h2>Transforme sua operação em uma trilha confiável.</h2></div><Link className="button button-light" href="/contato">Falar com um especialista <ArrowRight /></Link></div></section>
    </main>
  )
}

export { logo }
export { GitBranch, Landmark, ShieldCheck }

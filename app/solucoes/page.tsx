import Link from 'next/link'
import { ArrowRight, CheckCircle2, GitBranch, Landmark, ShieldCheck } from 'lucide-react'

const solutions = [
  { icon: GitBranch, title: 'Comissões e remuneração variável', text: 'Centralize políticas de comissão, metas, faixas, bônus e regras por produto, canal ou perfil.' },
  { icon: Landmark, title: 'Splits e repasses', text: 'Divida receitas entre parceiros, unidades, representantes e empresas com critérios claros.' },
  { icon: ShieldCheck, title: 'Governança e auditoria', text: 'Preserve versões, aprovações e memória de cálculo para que cada valor seja explicável.' },
]
export default function SolucoesPage() { return <main><div className="inner-page"><div className="container"><Link className="back-link" href="/">← Voltar para início</Link><div className="eyebrow">Soluções FontCash</div><h1>Automação financeira para operações que precisam de clareza.</h1><p className="page-lead">Da regra ao pagamento, o FontCash organiza o caminho completo de comissões, splits, bonificações, repasses e remuneração variável.</p><div className="solution-grid">{solutions.map(({icon: Icon, title, text}) => <article className="solution-card" key={title}><Icon /><h2>{title}</h2><p>{text}</p><Link className="text-link" href="/contato">Conhecer solução <ArrowRight /></Link></article>)}</div><section className="detail-section"><div><div className="eyebrow">Uma única trilha</div><h2>Menos conferência manual. Mais controle sobre o resultado.</h2></div><div className="detail-list">{['Receba dados de ERPs, CRMs, arquivos e APIs','Identifique o contexto da receita e os beneficiários','Aplique a política válida para cada operação','Calcule, aprove, prepare o pagamento e concilie'].map(item => <div key={item}><CheckCircle2 />{item}</div>)}</div></section></div></div></main> }

export const metadata = { title: 'Soluções | FontCash', description: 'Comissões, splits, repasses e remuneração variável com rastreabilidade financeira.' }

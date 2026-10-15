'use client'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Olá, equipe FontCash!\n\nTenho interesse na solução de: *${data.get('interesse')}*.\n\n*Dados do contato:*\n• Nome: ${data.get('nome')}\n• Empresa: ${data.get('empresa')}\n• E-mail: ${data.get('email')}\n• Telefone: ${data.get('telefone')}\n\n*Como calculamos hoje:*\n${data.get('processo')}\n\n*Desafio:*\n${data.get('desafio')}`
    setSent(true)
    window.open(`https://wa.me/5511982024537?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }
  return <main className="contact-split-page">
    <div className="contact-image-panel" role="img" aria-label="Equipe analisando dados e processos financeiros" />
    <section className="contact-form-panel"><div className="contact-form-content">
      <div className="contact-panel-top"><Link href="/" className="back-link">← Voltar para início</Link><a href="https://wa.me/5511982024537" target="_blank" rel="noopener">Precisa de ajuda?</a></div>
      <div className="eyebrow">Vamos mapear sua operação</div>
      <h1>Suas regras financeiras, do cálculo à conciliação.</h1>
      <p className="contact-intro">Mostre como sua empresa calcula hoje comissões, splits, repasses ou remunerações variáveis. Vamos identificar onde reduzir tempo, retrabalho e risco.</p>
      <form className="contact-form contact-form-full" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <label>Nome<input name="nome" required placeholder="Seu nome" /></label>
          <label>Empresa<input name="empresa" required placeholder="Nome da empresa" /></label>
          <label>E-mail corporativo<input name="email" required type="email" placeholder="voce@empresa.com.br" /></label>
          <label>Telefone<input name="telefone" required type="tel" placeholder="(11) 99999-9999" /></label>
          <label>Como calculam hoje?<select name="processo" defaultValue="Planilhas"><option>Planilhas</option><option>ERP</option><option>Sistema próprio</option><option>Parcialmente automatizado</option><option>Outro</option></select></label>
          <label>O que precisa controlar?<select name="interesse" defaultValue="Comissões"><option>Comissões</option><option>Split de receitas</option><option>Repasse a parceiros</option><option>Bonificações</option><option>Remuneração variável</option><option>Outro</option></select></label>
          <label className="field-full">Conte brevemente o desafio<textarea name="desafio" required rows={3} placeholder="Ex.: temos várias regras por produto, canal e vendedor e o fechamento ainda é feito em planilhas..." /></label>
        </div>
        <button className="button" type="submit">Quero mapear minha operação →</button>
        <p className="privacy">Ao enviar, você será direcionado ao WhatsApp com os dados preenchidos para início do atendimento.</p>
        {sent && <p className="form-success">Dados preparados. O WhatsApp foi aberto em uma nova aba.</p>}
      </form>
    </div></section>
  </main>
}

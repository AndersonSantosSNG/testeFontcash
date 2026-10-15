"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

type FieldErrors = Partial<
  Record<
    | "nome"
    | "empresa"
    | "email"
    | "telefone"
    | "processo"
    | "interesse"
    | "desafio"
    | "consentimento",
    string
  >
>;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const submittedRef = useRef(false);

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
    setErrors((current) => ({ ...current, telefone: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittedRef.current) return;

    const data = new FormData(event.currentTarget);
    const value = (field: string) => String(data.get(field) ?? "").trim();
    const nome = value("nome");
    const empresa = value("empresa");
    const email = value("email");
    const telefone = value("telefone");
    const processo = value("processo");
    const interesse = value("interesse");
    const desafio = value("desafio");
    const phoneDigits = telefone.replace(/\D/g, "");
    const nextErrors: FieldErrors = {};

    if (nome.length < 2) nextErrors.nome = "Informe um nome válido.";
    if (empresa.length < 2) nextErrors.empresa = "Informe o nome da empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Informe um e-mail válido.";
    if (phoneDigits.length < 10 || phoneDigits.length > 11)
      nextErrors.telefone = "Informe um telefone com DDD.";
    if (!processo) nextErrors.processo = "Selecione uma opção.";
    if (!interesse) nextErrors.interesse = "Selecione uma opção.";
    if (desafio.length < 20)
      nextErrors.desafio = "Descreva o desafio em pelo menos 20 caracteres.";
    if (data.get("consentimento") !== "aceito")
      nextErrors.consentimento = "É necessário aceitar antes de continuar.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = `Olá, equipe FontCash!\n\nTenho interesse na solução de: *${interesse}*.\n\n*Dados do contato:*\n• Nome: ${nome}\n• Empresa: ${empresa}\n• E-mail: ${email}\n• Telefone: ${telefone}\n\n*Como calculamos hoje:*\n${processo}\n\n*Desafio:*\n${desafio}`;
    submittedRef.current = true;
    setSent(true);
    window.open(
      `https://wa.me/5511982024537?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <main className="contact-split-page">
      <div
        className="contact-image-panel"
        role="img"
        aria-label="Equipe analisando dados e processos financeiros"
      />
      <section className="contact-form-panel">
        <div className="contact-form-content">
          <div className="contact-panel-top">
            <Link href="/" className="back-link">
              ← Voltar para início
            </Link>
            <a
              href="https://wa.me/5511982024537"
              target="_blank"
              rel="noopener"
            >
              Precisa de ajuda?
            </a>
          </div>
          <div className="eyebrow">Vamos mapear sua operação</div>
          <h1>Suas regras financeiras, do cálculo à conciliação.</h1>
          <p className="contact-intro">
            Mostre como sua empresa calcula hoje comissões, splits, repasses ou
            remunerações variáveis. Vamos identificar onde reduzir tempo,
            retrabalho e risco.
          </p>
          <form
            className="contact-form contact-form-full"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="contact-fields">
              <label>
                Nome
                <input
                  name="nome"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.nome)}
                  placeholder="Seu nome"
                />
                {errors.nome && (
                  <span className="field-error">{errors.nome}</span>
                )}
              </label>
              <label>
                Empresa
                <input
                  name="empresa"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="organization"
                  aria-invalid={Boolean(errors.empresa)}
                  placeholder="Nome da empresa"
                />
                {errors.empresa && (
                  <span className="field-error">{errors.empresa}</span>
                )}
              </label>
              <label>
                E-mail corporativo
                <input
                  name="email"
                  required
                  type="email"
                  maxLength={254}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  placeholder="voce@empresa.com.br"
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </label>
              <label>
                Telefone
                <input
                  name="telefone"
                  required
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  inputMode="tel"
                  autoComplete="tel-national"
                  aria-invalid={Boolean(errors.telefone)}
                  placeholder="(11) 99999-9999"
                />
                {errors.telefone && (
                  <span className="field-error">{errors.telefone}</span>
                )}
              </label>
              <label>
                Como calculam hoje?
                <select
                  name="processo"
                  defaultValue=""
                  required
                  aria-invalid={Boolean(errors.processo)}
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Planilhas</option>
                  <option>ERP</option>
                  <option>Sistema próprio</option>
                  <option>Parcialmente automatizado</option>
                  <option>Outro</option>
                </select>
                {errors.processo && (
                  <span className="field-error">{errors.processo}</span>
                )}
              </label>
              <label>
                O que precisa controlar?
                <select
                  name="interesse"
                  defaultValue=""
                  required
                  aria-invalid={Boolean(errors.interesse)}
                >
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Comissões</option>
                  <option>Split de receitas</option>
                  <option>Repasse a parceiros</option>
                  <option>Bonificações</option>
                  <option>Remuneração variável</option>
                  <option>Outro</option>
                </select>
                {errors.interesse && (
                  <span className="field-error">{errors.interesse}</span>
                )}
              </label>
              <label className="field-full">
                Conte brevemente o desafio
                <textarea
                  name="desafio"
                  required
                  minLength={20}
                  maxLength={600}
                  rows={3}
                  aria-invalid={Boolean(errors.desafio)}
                  placeholder="Ex.: temos várias regras por produto, canal e vendedor e o fechamento ainda é feito em planilhas..."
                />
                {errors.desafio && (
                  <span className="field-error">{errors.desafio}</span>
                )}
              </label>
              <label className="field-full consent-field">
                <span>
                  <input
                    type="checkbox"
                    name="consentimento"
                    value="aceito"
                    aria-invalid={Boolean(errors.consentimento)}
                  />{" "}
                  Autorizo o uso destes dados para contato sobre o FontCash.
                </span>
                {errors.consentimento && (
                  <span className="field-error">{errors.consentimento}</span>
                )}
              </label>
            </div>
            <button className="button" type="submit" disabled={sent}>
              {sent ? "Dados enviados ✓" : "Quero mapear minha operação →"}
            </button>
            <p className="privacy">
              Ao enviar, você será direcionado ao WhatsApp com os dados
              preenchidos para início do atendimento.
            </p>
            {sent && (
              <p className="form-success">
                Dados preparados. O WhatsApp foi aberto em uma nova aba.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

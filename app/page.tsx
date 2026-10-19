"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Database,
  GitBranch,
  Landmark,
  Quote,
  RefreshCw,
  ShieldCheck,
  Star,
} from "lucide-react";

const logo = "/images/logo-font-cash.png";

const problems = [
  [
    "Regras espalhadas",
    "Políticas comerciais em planilhas, documentos, e-mails ou no conhecimento de poucas pessoas.",
  ],
  [
    "Cálculos manuais",
    "Horas conciliando vendas, percentuais, metas, produtos, áreas e beneficiários a cada fechamento.",
  ],
  [
    "Falta de transparência",
    "Quem recebe não consegue entender facilmente como o valor foi formado e por qual regra.",
  ],
  [
    "Erros e retrabalho",
    "Uma fórmula alterada ou uma base divergente pode afetar centenas de cálculos.",
  ],
  [
    "Baixa rastreabilidade",
    "Meses depois, reconstruir o motivo de um pagamento pode exigir arquivos, pessoas e memória.",
  ],
  [
    "Escala limitada",
    "A empresa cresce, mas o processo de fechamento continua dependente de controles manuais.",
  ],
];

const testimonials = [
  {
    role: "Liderança financeira",
    company: "Empresa de serviços",
    text: "A leitura do fechamento ficou mais clara: cada valor pode ser acompanhado desde a origem até a conciliação.",
  },
  {
    role: "Gestão comercial",
    company: "Operação multicanal",
    text: "As regras deixaram de depender de controles paralelos e passaram a seguir um fluxo único de validação.",
  },
  {
    role: "Controladoria",
    company: "Operação com comissões",
    text: "O histórico das regras facilita a conferência e reduz o tempo gasto para explicar ajustes de períodos anteriores.",
  },
  {
    role: "Operações",
    company: "Rede de parceiros",
    text: "Com a trilha de cálculo, o time consegue localizar divergências e responder às áreas envolvidas com mais agilidade.",
  },
  {
    role: "Administração",
    company: "Negócio em expansão",
    text: "A automação trouxe uma base mais segura para crescer sem aumentar a complexidade do fechamento manual.",
  },
];

const carouselTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

const financialFlow = [
  {
    title: "Origem",
    description: "Venda, evento ou receita entra no fluxo.",
    status: "recebido",
    icon: Database,
  },
  {
    title: "Regra",
    description: "A política comercial aplicável é identificada.",
    status: "identificada",
    icon: GitBranch,
  },
  {
    title: "Cálculo & split",
    description: "Os valores são distribuídos por beneficiário.",
    status: "calculado",
    icon: Calculator,
  },
  {
    title: "Aprovação",
    description: "O resultado é validado antes do fechamento.",
    status: "aprovado",
    icon: BadgeCheck,
  },
  {
    title: "Pagamento",
    description: "A operação financeira é preparada e processada.",
    status: "processado",
    icon: CreditCard,
  },
  {
    title: "Conciliação",
    description: "Previsto e realizado permanecem rastreáveis.",
    status: "rastreado",
    icon: RefreshCw,
  },
];

const productScreens = [
  {
    title: "Dashboard",
    image: "/images/fontcash/fontcash1.png",
    alt: "Dashboard do FontCash com filtros, indicadores e histórico de comissões",
    description:
      "Consulte períodos, acompanhe os dados processados e visualize o histórico de comissões em um único painel.",
  },
  {
    title: "Políticas",
    image: "/images/fontcash/fontcash2.png",
    alt: "Tela de políticas comerciais do FontCash",
    description:
      "Organize políticas comerciais, prioridades e tipos de processamento em uma visão centralizada.",
  },
  {
    title: "Usuários",
    image: "/images/fontcash/fontcash3.png",
    alt: "Tela de gestão de usuários do FontCash",
    description:
      "Administre usuários e acessos da operação com pesquisa e ações reunidas no mesmo ambiente.",
  },
  {
    title: "Processos",
    image: "/images/fontcash/fontcash4.png",
    alt: "Tela de controle de processos do FontCash",
    description:
      "Acompanhe competências, responsáveis e status ao longo do processamento financeiro.",
  },
];

export default function Page() {
  const testimonialsTrack = useRef<HTMLDivElement>(null);
  const physicalTestimonialIndex = useRef(testimonials.length);
  const carouselResetTimer = useRef<number | undefined>(undefined);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [carouselTimerReset, setCarouselTimerReset] = useState(0);
  const [activeFlowStep, setActiveFlowStep] = useState(0);
  const [activeProductScreen, setActiveProductScreen] = useState(0);
  const [productScreensReady, setProductScreensReady] = useState(false);
  const productScreen = productScreens[activeProductScreen];

  const centerCard = useCallback(
    (physicalIndex: number, behavior: ScrollBehavior = "smooth") => {
      const track = testimonialsTrack.current;
      const card = track?.children[physicalIndex] as HTMLElement | undefined;
      if (!track || !card) return;

      const left = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2;

      if (behavior === "auto") {
        track.style.scrollBehavior = "auto";
        track.scrollLeft = left;
        window.requestAnimationFrame(() =>
          track.style.removeProperty("scroll-behavior"),
        );
        return;
      }

      track.scrollTo({
        left,
        behavior,
      });
    },
    [],
  );

  const moveCarousel = useCallback(
    (direction: -1 | 1) => {
      const total = testimonials.length;
      const nextPhysical = physicalTestimonialIndex.current + direction;
      const nextLogical = ((nextPhysical % total) + total) % total;

      window.clearTimeout(carouselResetTimer.current);
      physicalTestimonialIndex.current = nextPhysical;
      setTestimonialIndex(nextLogical);
      centerCard(nextPhysical);

      carouselResetTimer.current = window.setTimeout(() => {
        let normalized = nextPhysical;
        if (nextPhysical < total) normalized += total;
        if (nextPhysical >= total * 2) normalized -= total;
        if (normalized !== nextPhysical) {
          physicalTestimonialIndex.current = normalized;
          centerCard(normalized, "auto");
        }
      }, 650);
    },
    [centerCard],
  );

  const showTestimonial = (index: number) => {
    const nextIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length;
    const nextPhysical = testimonials.length + nextIndex;

    window.clearTimeout(carouselResetTimer.current);
    physicalTestimonialIndex.current = nextPhysical;
    setTestimonialIndex(nextIndex);
    centerCard(nextPhysical);
    setCarouselTimerReset((reset) => reset + 1);
  };

  const navigateCarousel = (direction: -1 | 1) => {
    moveCarousel(direction);
    setCarouselTimerReset((reset) => reset + 1);
  };

  useEffect(() => {
    const initialFrame = window.requestAnimationFrame(() =>
      centerCard(testimonials.length, "auto"),
    );
    const handleResize = () => centerCard(physicalTestimonialIndex.current, "auto");
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(carouselResetTimer.current);
    };
  }, [centerCard]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveCarousel(1), 5500);
    return () => window.clearInterval(timer);
  }, [moveCarousel, carouselTimerReset]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () =>
        setActiveFlowStep((current) =>
          current === financialFlow.length - 1 ? 0 : current + 1,
        ),
      4500,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let active = true;
    const preload = productScreens.map(
      (screen) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = screen.image;
          if (image.complete) resolve();
        }),
    );

    Promise.all(preload).then(() => {
      if (active) setProductScreensReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="site-shell">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Rastreabilidade financeira</div>
            <h1>
              Automatize operações financeiras com <span>rastreabilidade.</span>
            </h1>
            <p className="lead">
              O FontCash aplica regras de comissão, split, repasse e remuneração
              variável, preservando a origem, o cálculo, as aprovações e a
              conciliação de cada valor.
            </p>
            <div className="hero-cta">
              <Link className="button" href="/contato">
                Quero automatizar minha operação <ArrowRight />
              </Link>
              <Link className="text-link" href="/como-funciona">
                Conhecer o FontCash <ChevronRight />
              </Link>
            </div>
            <div className="trustline">
              <span>Motor de regras</span>
              <span>Processamento</span>
              <span>Auditoria</span>
              <span>Integrações</span>
            </div>
          </div>
          <div className="trace-card" aria-label="Fluxo financeiro rastreável">
            <div className="trace-head">
              <div>
                <strong>Fluxo financeiro</strong>
                <small> · trilha rastreável</small>
              </div>
              <div className="live">OPERANDO</div>
            </div>
            <div className="flow">
              {financialFlow.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    className={
                      i === activeFlowStep ? "flow-step active" : "flow-step"
                    }
                    key={item.title}
                    aria-current={i === activeFlowStep ? "step" : undefined}
                  >
                    <div className="flow-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </div>
                    <span>
                      {i === activeFlowStep ? "processando" : item.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="proof"
        aria-label="Resultados observados em operação processada pelo FontCash"
      >
        <div className="container">
          <p className="proof-context">
            Resultados consolidados do case FontCash
          </p>
          <div className="proof-grid">
            <div>
              <b>
                R$ <em>1,058</em> bi
              </b>
              <span>em vendas processadas</span>
            </div>
            <div>
              <b>
                <em>104.371</em>
              </b>
              <span>comissões processadas</span>
            </div>
            <div>
              <b>
                <em>70%</em>
              </b>
              <span>menos tempo na apuração manual</span>
            </div>
            <div>
              <b>
                R$ <em>7,36 mi</em>
              </b>
              <span>em splits e comissões</span>
            </div>
          </div>
          <p className="proof-note">
            Métricas referentes à operação apresentada no case. Período e
            metodologia disponíveis com o time FontCash.
          </p>
        </div>
      </section>

      <section className="section" id="problema">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Onde o financeiro perde</div>
              <h2>
                Quando o dinheiro passa por planilhas,{" "}
                <span>o risco também passa.</span>
              </h2>
            </div>
            <p className="lead">
              Quanto mais produtos, pessoas, canais e regras, maior a chance de
              o fechamento virar uma operação de conferência, retrabalho e
              explicações.
            </p>
          </div>
          <div className="cards">
            {problems.map(([title, text]) => (
              <details className="card problem-toggle" key={title}>
                <summary>
                  <h3>{title}</h3>
                  <span aria-hidden="true" />
                </summary>
                <div className="problem-toggle-content">
                  <div>
                    <p>{text}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-section">
        <div className="container statement-showcase">
          <div className="statement">
            <div className="eyebrow">O custo invisível</div>
            <h2>
              O financeiro vê o pagamento.
              <br />
              <span>O FontCash mostra tudo o que aconteceu antes dele.</span>
            </h2>
            <p className="lead">
              Um valor não deveria ser apenas uma célula. Ele é resultado de uma
              origem, uma regra, uma versão, percentuais, condições, aprovações
              e ajustes.
            </p>
            <Link href="/solucoes" className="text-link">
              Explorar as soluções <ArrowRight />
            </Link>
          </div>
          <img
            src="/images/fontcash/rastreabilidade-financeira.png"
            alt="Equipe acompanhando um fluxo financeiro rastreável"
          />
        </div>
      </section>

      <section className="product-preview-section" aria-labelledby="product-preview-title">
        <div className="container product-preview">
          <div className={productScreensReady ? "product-gallery ready" : "product-gallery"}>
            <div
              className="product-screen"
              id="product-screen-panel"
              role="tabpanel"
              aria-labelledby={`product-tab-${activeProductScreen}`}
              aria-busy={!productScreensReady}
            >
              <div className="product-screen-bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <small>{productScreen.title} · FontCash</small>
              </div>
              <div className="product-screen-stage">
                {productScreens.map((screen, index) => (
                  <img
                    src={screen.image}
                    alt={index === activeProductScreen ? screen.alt : ""}
                    className={index === activeProductScreen ? "active" : ""}
                    aria-hidden={index !== activeProductScreen}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    key={screen.image}
                  />
                ))}
              </div>
            </div>
            <div
              className="product-screen-tabs"
              role="tablist"
              aria-label="Telas do sistema FontCash"
            >
              {productScreens.map((screen, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`product-tab-${index}`}
                  aria-controls="product-screen-panel"
                  aria-selected={index === activeProductScreen}
                  className={index === activeProductScreen ? "active" : ""}
                  onClick={() => setActiveProductScreen(index)}
                  disabled={!productScreensReady}
                  key={screen.title}
                >
                  <span>0{index + 1}</span>
                  {screen.title}
                </button>
              ))}
            </div>
          </div>
          <div className="product-preview-copy">
            <div className="eyebrow">O sistema na prática</div>
            <h2 id="product-preview-title">
              Acompanhe a operação em uma <span>visão centralizada.</span>
            </h2>
            <p className="product-screen-label">{productScreen.title}</p>
            <p className="lead">{productScreen.description}</p>
            <Link href="/contato" className="text-link">
              Conhecer o FontCash <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="container testimonials-heading">
          <div>
            <div className="eyebrow">Experiência na operação</div>
            <h2 id="testimonials-title">
              O que muda para quem <span>usa o FontCash.</span>
            </h2>
          </div>
          <div className="testimonials-intro">
            <p>
              Exemplos ilustrativos de feedback. Substitua pelos depoimentos
              validados dos seus clientes antes da publicação.
            </p>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-controls" aria-label="Controles do carrossel">
            <button
              type="button"
              onClick={() => navigateCarousel(-1)}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => navigateCarousel(1)}
              aria-label="Próximo depoimento"
            >
              <ChevronRight />
            </button>
          </div>

          <div
            className="testimonials-track"
            ref={testimonialsTrack}
          >
            {carouselTestimonials.map((testimonial, index) => {
              const logicalIndex = index % testimonials.length;
              return (
              <article
                className={
                  logicalIndex === testimonialIndex
                    ? "testimonial-card active"
                    : "testimonial-card"
                }
                aria-current={
                  logicalIndex === testimonialIndex ? "true" : undefined
                }
                key={`${testimonial.role}-${index}`}
              >
                <div className="testimonial-topline">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {testimonial.role.charAt(0)}
                  </div>
                  <div>
                    <strong>{testimonial.role}</strong>
                    <small>{testimonial.company}</small>
                  </div>
                  <Quote aria-hidden="true" />
                </div>
                <p>{testimonial.text}</p>
                <div className="testimonial-rating" aria-label="5 de 5 estrelas">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span className="testimonial-count">0{logicalIndex + 1}</span>
              </article>
              );
            })}
          </div>
        </div>

        <div className="carousel-dots" aria-label="Selecionar depoimento">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              className={index === testimonialIndex ? "active" : ""}
              onClick={() => showTestimonial(index)}
              aria-label={`Mostrar depoimento ${index + 1}`}
              aria-current={index === testimonialIndex ? "true" : undefined}
              key={testimonial.role}
            />
          ))}
        </div>
      </section>

      <section className="section rule-zone">
        <div className="container rules-layout">
          <div>
            <div className="eyebrow">Motor de regras</div>
            <h2>
              Sua política muda.
              <br />
              <span>O motor acompanha.</span>
            </h2>
            <p className="lead">
              Crie regras sem transformar cada alteração comercial em um novo
              projeto de software.
            </p>
            <div className="checks">
              {[
                "Percentuais, valores fixos e faixas",
                "Metas, produtos, clientes e canais",
                "Hierarquias, áreas, parceiros e funções",
                "Versionamento para preservar o histórico",
              ].map((x) => (
                <div className="check" key={x}>
                  <CheckCircle2 />
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div className="rule-builder">
            <div className="window-top">
              <strong>Nova regra de remuneração</strong>
              <span>•••</span>
            </div>
            <p>
              <small>SE</small>
              <b>Produto = Linha A</b>
              <small>E</small>
              <b>Canal = Parceiro</b>
            </p>
            <p>
              <small>E</small>
              <b>Vendas ≥ R$ 500 mil</b>
            </p>
            <p>
              <small>ENTÃO</small>
              <b className="green">Comissão = 4%</b>
              <b className="green">Bônus = +1%</b>
            </p>
            <p>
              <small>DIVIDIR</small>
              <b>Executivo 70%</b>
              <b>Gestor 20%</b>
              <b>Canal 10%</b>
            </p>
            <div className="rule-result">
              Regra pronta para processamento <strong>ATIVA ✓</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <div className="eyebrow">Converse com nosso time</div>
            <h2>
              Mapeie suas regras e identifique onde reduzir trabalho manual e
              risco operacional.
            </h2>
          </div>
          <Link className="button button-light" href="/contato">
            Falar com um especialista <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export { logo };
export { GitBranch, Landmark, ShieldCheck };

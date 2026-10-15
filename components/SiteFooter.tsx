import Link from "next/link";

const logo = "/images/logo-font-cash.png";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contato-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="FontCash início">
            <img src={logo} alt="SNG FontCash" width="2048" height="341" />
          </Link>
          <div className="syner-signature">
            <div className="syner-label">Um produto da</div>
            <a
              className="syner-logo-box"
              href="https://sng.com.br/site/index.php"
              target="_blank"
              rel="noopener"
              aria-label="Conheça a SNG Syner Group"
            >
              <img
                className="footer-sng-logo"
                src="/images/logo-sng-synergroup.png"
                alt="SNG Syner Group"
                width="1772"
                height="355"
              />
            </a>
            <p className="syner-copy">
              <strong>FontCash é um produto da SNG Syner Group.</strong>
              <br />
              Parte do ecossistema de soluções SNG para rastreabilidade,
              observabilidade e inteligência aplicada aos processos
              empresariais.
            </p>
          </div>
          <p>
            Tecnologia para transformar regras financeiras em processos claros,
            seguros e rastreáveis.
          </p>
          <div className="footer-links">
            <Link href="/solucoes">Soluções</Link>
            <Link href="/como-funciona">Como funciona</Link>
            <Link href="/mercado">Mercado</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </div>

        <div className="footer-contact">
          <div className="foot-group-title">Contato &amp; Redes</div>
          <div className="foot-contact-box">
            <a
              href="https://wa.me/5511982024537?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20FontCash."
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.69 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.206 8.206 0 0 1-5.82 2.42c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.08.81.82-2.99-.19-.31c-.8-1.28-1.23-2.77-1.23-4.3 0-4.55 3.69-8.24 8.24-8.24zm4.52 10.97c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z" />
              </svg>
              <span>WhatsApp: (11) 98202-4537</span>
            </a>
            <a href="mailto:contato@sng.com.br">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>contato@sng.com.br</span>
            </a>
            <a href="https://www.sng.com.br/" target="_blank" rel="noopener">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>sng.com.br</span>
            </a>
            <hr />
            <a
              href="https://www.linkedin.com/company/sngtecnologia/posts/"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/sngtecnologia/"
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
              <span>@sngtecnologia</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 SNG Synergroup. Da regra ao pagamento.
      </div>
    </footer>
  );
}

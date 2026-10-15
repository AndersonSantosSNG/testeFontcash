'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const logo = '/images/logo-font-cash.png'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="FontCash início" onClick={closeMenu}><img src={logo} alt="SNG FontCash" width="2048" height="341" /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Navegação principal">
          <Link href="/solucoes" onClick={closeMenu}>Soluções</Link>
          <Link href="/como-funciona" onClick={closeMenu}>Como funciona</Link>
          <Link href="/mercado" onClick={closeMenu}>Mercado</Link>
          <Link href="/contato" onClick={closeMenu}>Contato</Link>
          <Link className="nav-login" href="https://app.fontcash.com.br/" target="_blank" rel="noopener">Entrar</Link>
          <Link className="button button-small" href="/contato" onClick={closeMenu}>Quero automatizar</Link>
        </nav>
      </div>
    </header>
  )
}

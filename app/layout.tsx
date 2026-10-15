import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import MotionEffects from '../components/MotionEffects'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'FontCash | Rastreabilidade financeira', template: '%s | FontCash' },
  description: 'Automatize comissões, splits, repasses e remunerações variáveis. Da regra ao pagamento, tudo rastreável.',
  keywords: ['comissões', 'remuneração variável', 'split de receita', 'automação financeira', 'FontCash'],
  icons: { icon: '/favicon.ico' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#092d3e' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><SiteHeader /><MotionEffects />{children}<SiteFooter />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }

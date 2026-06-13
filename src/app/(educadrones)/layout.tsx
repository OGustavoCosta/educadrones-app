import { Poppins } from 'next/font/google'
import openGraphBanner from '@/assets/images/openGraph-banner.jpg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import SkipLink from '@/components/acessibility/SkipLink'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* ======================================================================== */
/* IMPORTAÇÃO DE CSS */
import './base.css'
import MotionProvider from '@/components/providers/MotionProvider'

/* ======================================================================== */
/* METADADOS */
export const metadata = {
  title: 'Educa Drones',
  applicationName: "Educa Drones",
  description: 'O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores. Através da metodologia STEAM, o projeto integra Ciência, Tecnologia, Engenharia, Artes e Matemática em atividades práticas e dinâmicas. O projeto não só aproxima os alunos das tecnologias do futuro, mas também os prepara para os desafios de um mercado cada vez mais digital e interconectado. Ao promover a construção e operação de drones, o projeto estimula a criatividade, a resolução de problemas e a colaboração, impactando positivamente a forma como os jovens aprendem e se conectam com a inovação tecnológica.',
  keywords: ['EducaDrones', 'Educa Drones', 'Educação com drones', 'Projeto Educa Drones', 'Drones educacionais', 'STEAM na educação', 'Robótica educacional', 'Tecnologia no ensino', 'Inovação educacional', 'Drones para aprendizado', 'Competição de drones estudantis', 'Oficinas de drones', 'Aprendizado prático com drones', 'Ensino de ciências com drones', 'Tecnologia em sala de aula', 'Educação tecnológica', 'Desenvolvimento de drones', 'Formação de jovens em tecnologia', 'Drones no ensino de física', 'Aeronaves remotamente pilotadas', 'Desafios STEAM', 'Educação inovadora com drones'],
  metadataBase: new URL('https://educadrones.com.br'),
  alternates: { canonical: '/' },
  authors: [{ name: 'Gustavo Costa', url: '' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: openGraphBanner,
    title: 'Educa Drones',
    description: 'O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores [...]',
    type: 'website',
    siteName: 'Educa Drones',
    locale: 'pt_BR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educa Drones',
    description: 'O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores [...]',
    images: [openGraphBanner],
  },
  robots: { index: true, follow: true },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className='flex flex-col min-h-screen bg-ds-neutral-50 overflow-x-hidden max-w-dvw'>
        <MotionProvider>
          <SkipLink/>
          <Header absolute={true}/>
          <main id='main' className='main grow'>{children}</main>
          <Footer/>
        </MotionProvider>
      </body>
    </html>
  )
}

import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import SkipLink from '@/components/acessibility/SkipLink'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

/* ======================================================================== */
/* IMPORTAÇÃO DE CSS */
import './base.css'

/* ======================================================================== */
/* METADADOS */
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Educa Drones',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className='flex flex-col min-h-screen border-ds-neutral-50'>
        <SkipLink/>
        <Header absolute={true}/>
        <main id='main' className='main grow'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

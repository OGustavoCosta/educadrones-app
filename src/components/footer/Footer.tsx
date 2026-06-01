import Link from "next/link"
import Image from "next/image"
import * as motion from "motion/react-client"

/* PAYLOAD CMS */
import { getPayload } from 'payload'
import config from '@/payload.config'

/* COMPONENTES */
import FooterNav from "./FooterNav"

/* IMAGENS */
import ceteia from "@/assets/images/footer/ceteia.png"
import ifBaiano from "@/assets/images/footer/if-baiano.png"
import prefeturaDeGuanambi from "@/assets/images/footer/prefeitura-de-guanambi.png"

/* ICONS */
import { Mail, Smartphone } from "lucide-react"

async function Footer() {
  const payload = await getPayload({config})
  const footer = await payload.findGlobal({ slug: 'footer' })

  return(
    <footer className="footer bg-ds-blue-100 flex flex-col items-center md:px-10 px-5 py-8 gap-8 text-ds-yellow-10">
      {/* INFORMAÇÕES ADICIONAIS E MENUS */}
      <div className="footer__content max-w-[1400px] w-full flex flex-wrap gap-8">
        <div className="footer__wrapper flex-1 basis-[320px]">
          <div className="footer__wrapper flex flex-col gap-2 lg:max-w-[320px]">
            <h2 className="footer__title font-medium">Educa Drones</h2>
            <p className="footer__text text-sm text-ds-blue-20">Têm interesse em levar o projeto para sua escola ou universidade? Entre em contato através do email ou por nossas redes sociais</p>

            <div className="footer__wrapper">
            </div>
          </div>
        </div>

        {/* MENUS */}
        <div className="footer__wrapper flex flex-2 gap-8 basis-[620px] justify-between flex-wrap">

          {footer.menus.map(menu => (
            <FooterNav key={menu.id} title={menu.title} links={menu.links}/>
          ))}

          {/* Informações de Contato */}
          <div className="footer__wrapper flex flex-col gap-3 basis-[240px] md:basis-auto flex-1">
            <h2 className="footer__title text-[0.75rem] uppercase font-bold text-ds-blue-20">CONTATO</h2>

            <ul className="footer__list text-sm/[125%] flex flex-col gap-2">
              <li className="footer__item flex items-center gap-2">
                <span className="footer__span p-1.5 rounded border bg-white/10" aria-hidden="true">
                  <Mail width={14} height={14}/>
                </span>
                <p className="footer__text text-sm/[110%] wrap-anywhere sm:wrap-normal">contato.educadrones@gmail.com</p>
              </li>

              <li className="footer__item flex items-center gap-2">
                <span className="footer__span p-1.5 rounded border bg-white/10" aria-hidden="true">
                  <Smartphone width={14} height={14}/>
                </span>
                <p className="footer__text text-sm/[110%]" aria-label="número de telefone da educadrones">
                  <a className="footer__link" href="" target="_blank">(77) 99899-9999</a>
                  <span className="sr-only">(abre direto no whatsapp)</span>
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* PARCEIROS E COLABORADORES */}
      <div className="footer__content max-w-[1400px] w-full flex flex-col items-start md:items-center gap-4 border-t border-solid border-ds-blue-40 pt-6">
        <h2 className="footer__title uppercase text-[0.75rem] text-ds-blue-40 font-bold">PARCEIROS E COLABORADORES</h2>

        <ul className="footer__wrapper flex flex-col w-full md:flex-row items-start justify-center gap-6 md:gap-16 list-none text-ds-blue-40 text-sm leading-[120%] flex-wrap">

          {/* Prefeitura Municipal */}
          <li className="footer__item">
            <a className="footer__link flex justify-center items-center gap-2" href="https://www.guanambi.ba.gov.br/" target="_blank">
              <Image className="footer__image shrink-0" src={prefeturaDeGuanambi} alt="" aria-hidden="true"/>
              <span className="footer_text">
                Prefeitura Municipal <br/>
                de Guanambi
              </span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>

          {/* CETEIA */}
          <li className="footer__item">
            <a className="footer__link flex justify-center items-center gap-2" href="https://www.instagram.com/ceteia_ifbaiano/" target="_blank">
              <Image className="footer__image shrink-0" src={ceteia} alt="" aria-hidden="true"/>
              <span className="footer_text text-[0.75rem]/[120%]">
                <strong className="font-normal text-sm/[120%]">CETEIA - </strong>Centro de Estudos <br/>
                Tecnológicos em Informática e Agronomia
              </span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>

          {/* IF Baiano */}
          <li className="footer__item">
            <a className="footer__link flex justify-center items-center gap-2" href="https://ifbaiano.edu.br/portal/" target="_blank">
              <Image className="footer__image shrink-0" src={ifBaiano} alt="" aria-hidden="true"/>
              <span className="footer_text">
                IF Baiano <br/>
                <span className="footer__span text-[0.75rem]/[120%]"><em>Campus</em> Guanambi</span>
              </span>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </li>
        </ul>
      </div>

      {/* COPYRIGHT */}
      <div className="footer__content max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between pt-6 border-t border-solid border-ds-blue-40">
        <p className="footer__text text-[0.75rem] text-ds-blue-40 text-center">Copyright © 2025 Educa Drones Todos os direitos reservados. </p>
        <p className="footer__text text-[0.75rem] text-ds-blue-40 text-center">Desenvolvido por Gustavo Costa</p>
      </div>
    </footer>
  )
}

export default Footer
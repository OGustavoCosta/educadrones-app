/* ÍCONES */
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { Whatsapp } from "@/components/Icons"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeUpItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/Button"
import SectionHeader from "@/components/sections/SectionHeader"

function Location() {
  return (
    <div className="location__background background-section py-16 bg-ds-neutral-0">
      <section className="location w-full max-w-[1280px] grid md:grid-cols-2 gap-10 items-center" aria-labelledby="location-title">

        <motion.div
          className="location__map w-full aspect-video md:min-h-[320px] rounded-xl overflow-hidden border-4 border-ds-neutral-50"
          variants={fadeLeftItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.175810768064!2d-42.693144323500455!3d-14.301215486150488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75ac892620e8ee9%3A0xedfa55cda6e97ceb!2sCETEIA%20-%20Centro%20de%20Estudos%20Tecnol%C3%B3gicos%20em%20Inform%C3%A1tica%20e%20Agronomia!5e0!3m2!1spt-BR!2sbr!4v1746805396126!5m2!1spt-BR!2sbr"
            title="Mapa de localização do CETEIA no Google Maps, local onde a Educa Drones opera."
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="location__content flex flex-col gap-5"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="location__wrapper flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
            <SectionHeader badge="Localização" id="location-title">
              Onde Estamos
            </SectionHeader>

            <motion.p variants={fadeLeftItem}>O Educa Drones opera no Centro de Estudos Tecnológicos em Informática e Agronomia (CETEIA) do Instituto Federal Baiano – Campus Guanambi.</motion.p>
          </motion.div>

          <motion.address className="location__card p-6 bg-ds-neutral-50 rounded-lg border border-ds-neutral-200/50" variants={fadeLeftItem} aria-label="Endereço e Contato">
            <ul className="location__list w-full flex flex-col gap-2">
              <li className="location__item flex items-start gap-2">
                <MapPin size={16} className="text-ds-blue-130 shrink-0" aria-hidden="true" />
                <p className="location__text text-[0.75rem]/[125%] text-ds-neutral-400">Caixa Postal Nº 08 Distrito de, Saída p/ ceraíma - n, Zona Rural, Guanambi – BA, 46430-000</p>
              </li>

              <li className="location__item flex items-start gap-2">
                <Mail size={16} className="text-ds-blue-130 shrink-0" aria-hidden="true" />
                <a className="location__link link-underline block text-[0.75rem]/[125%] text-ds-neutral-400" target="_blank" rel="noopener noreferrer" href="mailto:contato.educadrones@gmail.com">contato.educadrones@gmail.com</a>
              </li>

              <li className="location__item flex items-start gap-2">
                <Whatsapp size={16} className="text-ds-blue-130" aria-hidden="true" />
                <a className="location__link link-underline block text-[0.75rem]/[125%] text-ds-neutral-400" target="_blank" rel="noopener noreferrer" href="tel:+557799999999">(77) 99999-9999</a>
              </li>
            </ul>
          </motion.address>

          <motion.div className="location__buttons flex flex-wrap gap-4">
            <motion.div variants={fadeUpItem}>
              <Button
                text="Abrir no mapa"
                link="https://maps.app.goo.gl/kf8pz8uiDvLF6Cyf9"
                target="_blank"
                rel="noopener noreferrer"
                icon={ArrowUpRight}
                iconPosition="right"
                variant="solid"
                color="blue"
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </section>
    </div>
  )
}

export default Location

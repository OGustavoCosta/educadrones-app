/* ÍCONES */
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react"
import { Whatsapp } from "@/components/Icons"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeDownItem, fadeUpItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/ButtonDefault"
import CollageTrio from "@/components/collages/CollageTrio"
import SectionHeader from "@/components/sections/SectionHeader"
import Details from "@/components/Details"

function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero__background background-section bg-black">
        <section 
          className="hero w-full max-w-[1400px] min-h-svh py-16 text-ds-yellow-10 flex items-center" 
          aria-labelledby="hero-title"
        >
          <motion.div 
            className="hero__wrapper flex flex-col gap-6 w-full max-w-[540px]"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__content flex flex-col gap-3 font-normal">
              <motion.p className="hero__badge text-[0.75rem]/[125%]" variants={fadeLeftItem}>IF Baiano — Campus Guanambi · CETEIA</motion.p>

              <motion.h1 id="hero-title" className="hero__title text-[2.5rem]/[100%] sm:text-5xl/[100%] font-extrabold" variants={fadeLeftItem}>Monte. Programe. Voe. Aprenda.</motion.h1>

              <motion.p className="hero__text text-base/[150%]" variants={fadeLeftItem}>O Educa Drones leva robótica aérea para escolas e institutos federais — transformando conceitos de física, matemática e tecnologia em experiência real, dentro e fora da sala de aula.</motion.p>
            </motion.div>
            <motion.div className="hero__buttons flex flex-wrap gap-4">
              <motion.div className="hero__wrapper" variants={fadeUpItem}>
                <Button
                  text="Leve o projeto à sua escola"
                  link="#"
                  icon={ArrowDown}
                  color="white"
                  variant="outline"
                />
              </motion.div>
              <motion.div className="hero__wrapper" variants={fadeUpItem}>
                <Button
                  text="Conhecer a ObaDrones"
                  link="#"
                  color="white"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* PROVA SOCIAL */}
      <div className="stats__background background-section  max-lg:p-0 border-b border-ds-neutral-150">
        <section className="stats w-full max-w-[1400px] flex flex-wrap" aria-label="Presença e conquistas do projeto">
          <motion.div
            className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeLeftItem}>5</motion.span>
            <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeLeftItem}><span className="sr-only">5</span> Equipes ativas</motion.p>
            <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeLeftItem}>BA e PE</motion.p>
          </motion.div>

          <motion.div
            className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeLeftItem}>8</motion.span>
            <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeLeftItem}><span className="sr-only">8</span> Publicações científicas</motion.p>
            <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeLeftItem}>Incluindo evento internacional</motion.p>
          </motion.div>

          <motion.div
            className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeLeftItem}>1ª</motion.span>
            <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeLeftItem}><span className="sr-only">1ª</span> Olimpíada Baiana de Drones</motion.p>
            <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeLeftItem}>Apoio FAPESB · Agosto 2025</motion.p>
          </motion.div>
        </section>
      </div>

      {/* APRESENTAÇÃO */}
      <div className="about__background background-section py-16">
        <section className="about w-full max-w-[1280px] grid md:grid-cols-2 gap-10 items-center" aria-labelledby="about-title">
          <motion.div 
            className="about__content flex flex-col gap-5"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader badge="Educação viva!" id="about-title" className="max-w-[440px]">
              Drones como ponte para o <em className="text-ds-blue-60">conhecimento</em>
            </SectionHeader>

            <motion.div className="about__body flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
              <motion.p className="about__text" variants={fadeLeftItem}>O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores. Através da metodologia STEAM, o projeto integra Ciência, Tecnologia, Engenharia, Artes e Matemática em atividades práticas e dinâmicas.</motion.p>
              <motion.p className="about__text" variants={fadeLeftItem}>O projeto não só aproxima os alunos das tecnologias do futuro, mas também os prepara para os desafios de um mercado cada vez mais digital e interconectado. Ao promover a construção e operação de drones, o projeto estimula a criatividade, a resolução de problemas e a colaboração.</motion.p>
            </motion.div>

            <motion.div className="about__buttons flex flex-wrap gap-4">
              <motion.div className="about__wrapper" variants={fadeUpItem}>
                <Button 
                  text="Saiba como funciona" 
                  link="#" 
                  variant="solid" 
                  color="blue" 
                />
              </motion.div>
              <motion.div className="about__wrapper" variants={fadeUpItem}>
                <Button 
                  text="Nossa história" 
                  link="/sobre"
                  icon={ArrowUpRight}
                  iconPosition="right"
                  color="blue" 
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="about__wrapper">
            <CollageTrio 
              image01={{src: "https://picsum.photos/seed/drones1/600/600" , alt: "Alunos do Educa Drones operando um drone em competição"}} 
              image02={{ src: "https://picsum.photos/seed/drones2/400/600", alt: "Testes de voo pré-competição"}} 
              image03={{ src: "https://picsum.photos/seed/drones3/600/400", alt: "Equipe durante a fórmula drone"}} 
            />
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="faq__background background-section py-16 bg-ds-neutral-0">
        <section className="faq w-full max-w-[1280px] grid md:grid-cols-[280px_1fr] lg:grid-cols-[400px_1fr] gap-14 md:gap-6 lg:gap-10 items-start" aria-labelledby="faq-title">

          <motion.div
            className="faq__content w-full flex flex-col gap-4"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader badge="FAQ" id="faq-title">
              Dúvidas <br/> frequentes
            </SectionHeader>

            <motion.div className="faq__body flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] max-w-100 lg:text-base/[150%]">
              <motion.p className="faq__text" variants={fadeLeftItem}>Respostas diretas para as perguntas que gestores e professores mais fazem antes de aderir ao projeto.</motion.p>
            </motion.div>

            <motion.div className="faq__buttons flex flex-wrap gap-4">
              <motion.div className="faq__wrapper" variants={fadeUpItem}>
                <Button
                  text="Falar com a equipe"
                  link="#"
                  variant="solid"
                  color="blue"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="faq__list flex flex-col gap-5"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpItem}>
              <Details title="Quem pode participar do projeto Educa Drones?">
                O projeto Educa Drones tem como público alvo estudantes e professores de escolas e universidades, sejam elas públicas ou particulares.
              </Details>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Details title="Como implementar o Educa Drones em minha escola?">
                Para implementar o Educa Drones em sua escola, é essencial contar com um ou mais professores dedicados, responsáveis pela coordenação das atividades. Além disso, será necessário adquirir os recursos adequados para realizar as oficinas, garantindo uma experiência prática e inovadora para os alunos.
              </Details>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Details title="O Educa Drones é adequado para todas as idades?">
                O projeto Educa Drones se adapta a públicos de diferentes idades, entretanto sugerimos que a idade mínima seja de 14 anos.
              </Details>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Details title="Quais recursos são necessários para implementar o Educa Drones na minha escola?">
                Para implementação é necessário obter um kit de Drone Educacional, ferramentas básicas de soldagem e um computador ou notebook. Além disso o Educa Drones disponiliza material didático gratuito e o treinamento de montagem e configuração de drones
              </Details>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Details title="O Educa Drones oferece suporte técnico para as escolas participantes?">
                Todas as escolas participantes recebem suporte técnico individual através dos canais de comunicação: telefone, whatsapp, email e rede social.
              </Details>
            </motion.div>
          </motion.div>

        </section>
      </div>

      {/* CONTATO */}
      <div className="contact__background background-section py-16">
        <section className="contact w-full max-w-[1280px] grid md:grid-cols-2 gap-10 items-center" aria-labelledby="contact-title">

          <motion.div
            className="contact__content flex flex-col gap-5"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div className="contact__header flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
              <SectionHeader badge="Participe" id="contact-title" className="max-w-100">
                Pronto para levar o futuro à <em className="text-ds-blue-60">sua escola?</em>
              </SectionHeader>

              <motion.p variants={fadeLeftItem}>Entre em contato com nossa equipe. Apresentamos o projeto, alinhamos as possibilidades e iniciamos o planejamento do treinamento — sem burocracia.</motion.p>
            </motion.div>

            <motion.div className="contact__card w-full flex flex-col gap-4 p-6 bg-ds-neutral-0 rounded-lg border border-ds-neutral-200/50" variants={fadeLeftItem} aria-label="O que acontece depois">

              <h3 className="contact__title text-sm/[125%] text-ds-blue-130 uppercase font-semibold">O que acontece depois:</h3>

              <ol className="contact__list list-decimal list-outside pl-4 space-y-2 marker:text-ds-blue-130 marker:font-bold">
                <li className="contact__item text-sm/[125%] text-ds-neutral-400">Nossa equipe entra em contato em até 2 dias úteis</li>
                <li className="contact__item text-sm/[125%] text-ds-neutral-400">Apresentamos o projeto e tiramos dúvidas</li>
                <li className="contact__item text-sm/[125%] text-ds-neutral-400">Planejamos juntos o treinamento e a formação da equipe</li>
              </ol>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact__form flex flex-col gap-5"
            variants={motionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
        
          </motion.div>

        </section>
      </div>

      {/* LOCALIZAÇÃO */}
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
                  <MapPin size={16} className="text-ds-blue-130 shrink-0" aria-hidden="true"/>
                  <p className="location__text text-[0.75rem]/[125%] text-ds-neutral-400">Caixa Postal Nº 08 Distrito de, Saída p/ ceraíma - n, Zona Rural, Guanambi – BA, 46430-000</p>
                </li>

                <li className="location__item flex items-start gap-2">
                  <Mail size={16} className="text-ds-blue-130 shrink-0" aria-hidden="true"/>
                  <a className="location__link link-underline block text-[0.75rem]/[125%] text-ds-neutral-400" target="_blank" rel="noopener noreferrer" href="mailto:contato.educadrones@gmail.com">contato.educadrones@gmail.com</a>
                </li>

                <li className="location__item flex items-start gap-2">
                  <Whatsapp size={16} className="text-ds-blue-130" aria-hidden="true"/>
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
    </>
  )
}


export default HomePage
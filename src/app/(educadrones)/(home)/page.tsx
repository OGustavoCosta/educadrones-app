/* ÍCONES */
import { ArrowDown, ArrowUpRight } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeDownItem, fadeUpItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/ButtonDefault"

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
            viewport={{ once: true }}
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

      {/* APRESENTAÇÃO */}
      <div className="about__background background-section bg-ds-yellow-5">
        <section className="about w-full max-w-[1400px] py-16 grid md:grid-cols-2 gap-10 items-center" aria-labelledby="about-title">
          <div className="about__content flex flex-col gap-5">
            <div className="about__header flex flex-col gap-1">
              <span className="about__badge text-base/[125%] text-ds-blue-60 font-semibold tracking-wide block">Educação viva!</span>
              <h2 id="about-title" className="about__title text-[2rem] sm:text-4xl font-bold text-ds-blue-130 max-w-[440px]">Drones como ponte para o <em className="text-ds-blue-60">conhecimento</em></h2>
            </div>

            <div className="about__body flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
              <p>O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores. Através da metodologia STEAM, o projeto integra Ciência, Tecnologia, Engenharia, Artes e Matemática em atividades práticas e dinâmicas.</p>
              <p>O projeto não só aproxima os alunos das tecnologias do futuro, mas também os prepara para os desafios de um mercado cada vez mais digital e interconectado. Ao promover a construção e operação de drones, o projeto estimula a criatividade, a resolução de problemas e a colaboração.</p>
            </div>

            <div className="about__buttons flex flex-wrap gap-4">
              <Button 
                text="Saiba como funciona" 
                link="#" 
                variant="solid" 
                color="blue" />
              <Button 
                text="Nossa história" 
                link="/sobre"
                icon={ArrowUpRight}
                iconPosition="right"
                color="blue" />
            </div>
          </div>

          <div className="about__wrapper">
            <div className="about__figures relative max-w-lg aspect-square md:translate-y-6 justify-self-center w-full">
              <motion.div 
                className="about__figure w-[80%] aspect-square absolute top-0 left-0 rounded-xl overflow-hidden border-4 border-ds-yellow-5"
                initial={{opacity: 0, y: -10}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <img className="w-full h-full object-cover" src="https://picsum.photos/seed/drones1/600/600" alt="Alunos do Educa Drones operando um drone em competição"/>
              </motion.div>

              <motion.div 
                className="about__figure w-[45%] aspect-3/4 rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute top-[15%] right-0"
                initial={{opacity: 0, x: 10}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <img className="w-full h-full object-cover" src="https://picsum.photos/seed/drones2/400/600" alt="Testes de voo pré-competição"/>
              </motion.div>

              <motion.div 
                className="about__figure w-[70%] aspect-video rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute bottom-0 left-[10%]"
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 1, delay: 0.20, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <img className="w-full h-full object-cover" src="https://picsum.photos/seed/drones3/600/400" alt="Equipe durante a fórmula drone"/>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


export default HomePage
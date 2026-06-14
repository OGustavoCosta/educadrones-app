/* ÍCONES */
import { ArrowUpRight } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeUpItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/Button"
import CollageTrio from "@/components/collages/CollageTrio"
import SectionHeader from "@/components/sections/SectionHeader"

function About() {
  return (
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
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/drones1/600/600", alt: "Alunos do Educa Drones operando um drone em competição" }}
            image02={{ src: "https://picsum.photos/seed/drones2/400/600", alt: "Testes de voo pré-competição" }}
            image03={{ src: "https://picsum.photos/seed/drones3/600/400", alt: "Equipe durante a fórmula drone" }}
          />
        </div>
      </section>
    </div>
  )
}

export default About

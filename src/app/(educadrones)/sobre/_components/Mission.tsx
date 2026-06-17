/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem } from "@/lib/animation"

/* COMPONENTES */
import SectionHeader from "@/components/sections/SectionHeader"
import CollageDuo from "@/components/collages/CollageDuo"

function Mission() {
  return (
    <div className="mission__background background-section py-16">
      <section className="mission w-full max-w-[1280px] grid md:grid-cols-2 gap-10 items-center" aria-labelledby="mission-title">
        <div className="mission__wrapper order-2 md:order-1">
          <CollageDuo
            className="max-w-lg"
            image01={{ src: "https://picsum.photos/seed/mission1/600/600", alt: "Estudantes do Educa Drones em atividade prática" }}
            image02={{ src: "https://picsum.photos/seed/mission2/400/600", alt: "Aluno operando um drone em campo" }}
          />
        </div>

        <motion.div
          className="mission__content flex flex-col gap-5 order-1 md:order-2"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader badge="Propósito" id="mission-title" className="max-w-[440px]">
            Nossa <em className="text-ds-blue-60">Missão</em>
          </SectionHeader>

          <motion.div className="mission__body flex flex-col gap-3 text-ds-neutral-500 text-sm/[150%] lg:text-base/[150%]">
            <motion.p className="mission__text" variants={fadeLeftItem}>Nossa missão é proporcionar aos estudantes e professores uma experiência única de aprendizado, usando drones como pontes para o conhecimento. Queremos capacitar as novas gerações com habilidades tecnológicas essenciais, estimulando a inovação, a criatividade e o espírito empreendedor.</motion.p>

            <motion.p className="mission__text font-semibold text-ds-neutral-600" variants={fadeLeftItem}>Acreditamos que a inovação nunca deve ser limitada pelo medo do desconhecido. Com os drones, estamos expandindo as fronteiras do aprendizado com confiança.</motion.p>

            <motion.p className="mission__text" variants={fadeLeftItem}>O Educa Drones se destaca por sua abordagem inovadora, que alia a construção e operação de drones a desafios reais, em um ambiente colaborativo e interdisciplinar. Ao aplicar conceitos de física, engenharia e programação, criamos uma plataforma de aprendizado divertida, prática e essencial para o futuro.</motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Mission

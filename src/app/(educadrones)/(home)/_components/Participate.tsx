/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeUpItem } from "@/lib/animation"

/* IMAGENS */
import participateBg from "@/assets/images/background/blue-gradient-bg.jpg"

type ParticipateStep = {
  number: number;
  title: string;
  text: string;
}

const participateSteps: ParticipateStep[] = [
  {
    number: 1,
    title: "Entre em contato",
    text: "Seu IF ou escola demonstra interesse. Nossa equipe entra em contato para apresentar o projeto e alinhar expectativas.",
  },
  {
    number: 2,
    title: "Treinamento estruturado",
    text: "O Programa de Treinamento Educa Drones capacita alunos e professores — do zero até a operação e construção de drones.",
  },
  {
    number: 3,
    title: "Equipe formada",
    text: "Sua escola tem uma equipe de robótica aérea com identidade própria — pronta para aprender, criar e competir.",
  },
  {
    number: 4,
    title: "Competições",
    text: "Sua equipe tem um objetivo concreto: participar da Olimpíada Baiana de Drones e medir forças com equipes de toda a Bahia.",
  },
]

function Participate() {
  return (
    <div
      className="participate__background background-section py-16 bg-cover"
      style={{ backgroundImage: `url(${participateBg.src})` }}
    >
      <section className="participate w-full max-w-[1280px] flex flex-col gap-14 items-center" aria-labelledby="participate-title">
        {/* CABEÇALHO */}
        <motion.div
          className="participate__header flex flex-col items-center gap-4 text-center max-w-[640px]"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="participate__heading flex flex-col gap-1" variants={fadeDownItem}>
            <span className="participate__badge text-base/[125%] text-ds-yellow-60 font-semibold tracking-wide block">
              Participação
            </span>
            <h2 id="participate-title" className="participate__title text-[1.75rem]/[110%] xs:text-[2rem]/[110%] mlg:text-4xl/[110%] font-bold text-ds-yellow-5">
              Como ter o projeto <br />na <em className="text-ds-yellow-60">sua escola</em>
            </h2>
          </motion.div>
          <motion.p className="participate__text text-sm/[150%] xm:text-base/[150%] text-ds-blue-10" variants={fadeDownItem}>
            Em quatro etapas, sua escola forma uma equipe competitiva — sem precisar de equipamentos caros ou infraestrutura especial.
          </motion.p>
        </motion.div>

        {/* ETAPAS */}
        <motion.ol
          className="participate__steps grid xs:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 w-full"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {participateSteps.map((step, index) => (
            <motion.li
              key={step.number}
              className="participate__step flex flex-col items-center gap-4 text-center"
              variants={fadeUpItem}
            >
              <div className="participate__marker relative w-full flex justify-center">
                {index < participateSteps.length - 1 && (
                  <span
                    className="participate__line hidden lg:block absolute top-1/2 -translate-y-1/2 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-ds-yellow-5/30"
                    aria-hidden="true"
                  />
                )}
                <span className="participate__circle relative w-16 aspect-square rounded-full border-2 border-ds-yellow-5 flex justify-center items-center text-2xl font-bold text-ds-yellow-5">
                  {step.number}
                </span>
              </div>

              <div className="participate__content flex flex-col gap-2">
                <span className="participate__label text-[0.75rem]/[100%] text-ds-blue-20 font-semibold tracking-widest uppercase">
                  Passo {step.number}
                </span>
                <h3 className="participate__stepTitle text-base/[120%] font-semibold text-ds-yellow-5">
                  {step.title}
                </h3>
                <p className="participate__stepText text-sm/[150%] text-ds-blue-5">
                  {step.text}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </div>
  )
}

export default Participate

/* ÍCONES */
import { Brain, PlaneTakeoff, Trophy, LucideIcon } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeUpItem } from "@/lib/animation"

/* COMPONENTES */
import SectionHeader from "@/components/sections/SectionHeader"
import InfoCard from "@/components/cards/InfoCard"

type Value = {
  id: number;
  icon: LucideIcon;
  title: string;
  text: string;
}

const values: Value[] = [
  {
    id: 1,
    icon: Brain,
    title: "Metodologia STEAM no Ensino",
    text: "O Educa Drones utiliza drones para aplicar os conceitos de Ciência, Tecnologia, Engenharia, Artes e Matemática (STEAM) de maneira prática e envolvente, promovendo um aprendizado interativo e multidisciplinar.",
  },
  {
    id: 2,
    icon: PlaneTakeoff,
    title: "Desenvolvimento de Drones Educacionais",
    text: "O projeto foca na construção de drones como ferramenta pedagógica, capacitando alunos a aprender conceitos de física, programação e engenharia enquanto desenvolvem suas próprias aeronaves.",
  },
  {
    id: 3,
    icon: Trophy,
    title: "Participação em Competições e Feiras",
    text: "Os alunos têm a oportunidade de aplicar seus conhecimentos em competições de drones e eventos científicos, promovendo a inovação, o networking e o compartilhamento de conhecimentos com outros estudantes e profissionais.",
  },
]

function Values() {
  return (
    <div className="values__background background-section py-16 bg-ds-neutral-50">
      <section className="values w-full max-w-[1280px] flex flex-col gap-12 items-center" aria-labelledby="values-title">
        <SectionHeader badge="Nossa abordagem" id="values-title" align="center" orchestrate={true}>
          Três pilares, um <em className="text-ds-blue-60">objetivo</em>
        </SectionHeader>

        <motion.div
          className="values__grid grid md:grid-cols-3 gap-6 w-full"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map(({ id, icon, title, text }) => (
            <motion.div key={id} variants={fadeUpItem}>
              <InfoCard icon={icon} title={title} text={text} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Values

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeUpItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/Button"
import SectionHeader from "@/components/sections/SectionHeader"
import Details from "@/components/Details"

function Faq() {
  return (
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
            Dúvidas <br /> frequentes
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
  )
}

export default Faq

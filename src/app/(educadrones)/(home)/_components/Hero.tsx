/* ÍCONES */
import { ArrowDown } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeUpItem } from "@/lib/animation"

/* COMPONENTES */
import Button from "@/components/buttons/Button"

function Hero() {
  return (
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
  )
}

export default Hero

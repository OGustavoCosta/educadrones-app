/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem } from "@/lib/animation"

function Hero() {
  return (
    <div className="hero__background background-section py-24 pt-32 bg-ds-blue-130 text-ds-yellow-5">
      <section className="hero w-full max-w-[1280px]" aria-labelledby="about-hero-title">
        <motion.div
          className="hero__content flex flex-col gap-3 max-w-[640px]"
          variants={motionContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 id="about-hero-title" className="hero__title text-[2.5rem]/[100%] sm:text-5xl/[100%] font-extrabold" variants={fadeLeftItem}>
            Quem Somos?
          </motion.h1>
          <motion.p className="hero__text text-base/[150%] sm:text-xl/[150%] text-ds-blue-10" variants={fadeLeftItem}>
            Somos o Educa Drones, transformando a educação com inovação, tecnologia e a paixão por voar rumo ao futuro.
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero

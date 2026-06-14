/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem } from "@/lib/animation"

function Stats() {
  return (
    <div className="stats__background background-section max-lg:p-0 border-b border-ds-neutral-150">
      <section className="stats w-full max-w-[1400px] flex flex-wrap" aria-label="Presença e conquistas do projeto">
        <motion.div
          className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeDownItem}>5</motion.span>
          <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeDownItem}><span className="sr-only">5</span> Equipes ativas</motion.p>
          <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeDownItem}>BA e PE</motion.p>
        </motion.div>

        <motion.div
          className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeDownItem}>8</motion.span>
          <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeDownItem}><span className="sr-only">8</span> Publicações científicas</motion.p>
          <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeDownItem}>Incluindo evento internacional</motion.p>
        </motion.div>

        <motion.div
          className="stats__item p-6 flex-1 basis-[180px] sm:basis-3xs border-t not-last:border-r border-ds-neutral-150 flex flex-col gap-1"
          variants={motionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="stats__span text-3xl/[100%] md:text-[2.5rem]/[100%] font-bold text-ds-blue-130" aria-hidden="true" variants={fadeDownItem}>1ª</motion.span>
          <motion.p className="stats__info text-sm/[120%] sm:text-base/[120%] text-neutral-800" variants={fadeDownItem}><span className="sr-only">1ª</span> Olimpíada Baiana de Drones</motion.p>
          <motion.p className="stats__badge text-[0.75rem]/[120%] sm:text-sm/[120%] text-neutral-400" variants={fadeDownItem}>Apoio FAPESB · Agosto 2025</motion.p>
        </motion.div>
      </section>
    </div>
  )
}

export default Stats

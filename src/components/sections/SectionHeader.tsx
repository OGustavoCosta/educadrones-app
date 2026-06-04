import * as motion from "motion/react-client"
import { fadeLeftItem } from "@/lib/animation"

type Props = {
  badge: string
  id: string
  children: React.ReactNode
  className?: string
}

function SectionHeader({ badge, id, children, className }: Props) {
  return (
    <motion.div className="section-header flex flex-col gap-1">
      <motion.span
        className="section-header__badge text-base/[125%] text-ds-blue-60 font-semibold tracking-wide block"
        variants={fadeLeftItem}
      >
        {badge}
      </motion.span>
      <motion.h2
        id={id}
        className={`section-header__title text-[2rem]/[110%] sm:text-4xl/[110%] font-bold text-ds-blue-130 ${className ?? ''}`}
        variants={fadeLeftItem}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}

export default SectionHeader

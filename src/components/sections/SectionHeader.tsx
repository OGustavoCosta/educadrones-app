import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeDownItem, fadeRightItem } from "@/lib/animation"

type Props = {
  badge: string;
  id: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right"
  orchestrate?: boolean
}

function SectionHeader({ badge, id, children, className, align = "left", orchestrate = false }: Props) {
  const alignMap = {
    wrapper: {
      left: "text-start",
      center: "text-center",
      right: "text-end",
    },
    text: {
      left: "items-start",
      center: "items-center",
      right: "items-end",
    },
    animation: {
      left: fadeLeftItem,
      center: fadeDownItem,
      right: fadeRightItem,
    }
  }

  const animation = alignMap.animation[align]

  return (
    <motion.div
      className={`sectionHeader flex flex-col gap-1 ${alignMap.wrapper[align]} ${alignMap.text[align]}`}
      variants={orchestrate ? motionContainer : undefined}
      initial={orchestrate ? "hidden" : undefined}
      whileInView={orchestrate ? "visible" : undefined}
      viewport={orchestrate ? { once: true } : undefined}
    >
      <motion.span
        className="sectionHeader__badge text-base/[125%] text-ds-blue-60 font-semibold tracking-wide block"
        variants={animation}
      >
        {badge}
      </motion.span>
      <motion.h2
        id={id}
        className={`sectionHeader__title text-[1.75rem]/[110%] xs:text-[2rem]/[110%] mlg:text-4xl/[110%] font-bold text-ds-blue-130 ${className ?? ''}`}
        variants={animation}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}

export default SectionHeader

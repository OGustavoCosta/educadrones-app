import * as motion from "motion/react-client"
import { fadeLeftItem } from "@/lib/animation"

type Props = {
  badge: string;
  id: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right"
}

function SectionHeader({ badge, id, children, className, align = "left" }: Props) {
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
    }
  }

  return (
    <motion.div className={`sectionHeader flex flex-col gap-1 ${alignMap.wrapper[align]} ${alignMap.text[align]}`}>
      <motion.span
        className="sectionHeader__badge text-base/[125%] text-ds-blue-60 font-semibold tracking-wide block"
        variants={fadeLeftItem}
      >
        {badge}
      </motion.span>
      <motion.h2
        id={id}
        className={`sectionHeader__title text-[2rem]/[110%] sm:text-4xl/[110%] font-bold text-ds-blue-130 ${className ?? ''}`}
        variants={fadeLeftItem}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}

export default SectionHeader

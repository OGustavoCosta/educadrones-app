"use client"

/* REACT */
import { useState } from "react"

/* ÍCONES */
import { ChevronDown } from "lucide-react"

/* MOTION */
import * as motion from "motion/react-client"

type Props = {
  title: string
  children: React.ReactNode
}

function Details({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="details w-full border border-ds-neutral-150 rounded-lg overflow-hidden">
      <button
        className="details__header w-full flex items-center justify-between gap-4 px-5 py-4 cursor-pointer text-ds-blue-130 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="details__title text-sm/[125%] font-medium">{title}</h3>
        <motion.div
          className="details__icon shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        className="details__body overflow-hidden"
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-5 pb-5 text-sm/[150%] text-ds-neutral-500">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default Details

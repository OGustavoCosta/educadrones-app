import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeRightItem, fadeLeftItem, fadeUpItem } from "@/lib/animation"

type Props = {
  className?: string,
  image01: { src: string, alt: string },
  image02: { src: string, alt: string },
  image03: { src: string, alt: string },
  image04: { src: string, alt: string },
  image05: { src: string, alt: string },
}

function CollagePenta({ className, image01, image02, image03, image04, image05 }: Props){

  return(
    <motion.div
      className={`about__figures relative aspect-square justify-self-center w-full ${className}`}
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="about__figure w-[52%] aspect-4/3 absolute top-0 left-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeDownItem}
      >
        <img className="w-full h-full object-cover" src={image01.src} alt={image01.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[42%] aspect-square absolute top-[6%] right-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeRightItem}
      >
        <img className="w-full h-full object-cover" src={image02.src} alt={image02.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[46%] aspect-3/2 absolute top-[40%] left-[6%] rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-2"
        variants={fadeLeftItem}
      >
        <img className="w-full h-full object-cover" src={image03.src} alt={image03.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[48%] aspect-3/2 absolute bottom-0 right-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image04.src} alt={image04.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[28%] aspect-square absolute bottom-[8%] left-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-3"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image05.src} alt={image05.alt}/>
      </motion.div>
    </motion.div>
  )
}

export default CollagePenta

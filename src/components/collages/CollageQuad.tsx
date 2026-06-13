import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeRightItem, fadeUpItem, fadeLeftItem } from "@/lib/animation"

type Props = {
  className?: string,
  image01: { src: string, alt: string },
  image02: { src: string, alt: string },
  image03: { src: string, alt: string },
  image04: { src: string, alt: string },
}

function CollageQuad({ className, image01, image02, image03, image04 }: Props){

  return(
    <motion.div
      className={`about__figures relative aspect-4/3 justify-self-center w-full h-auto ${className}`}
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="about__figure w-[30%] aspect-square absolute top-[16%] left-[16%] rounded-xl overflow-hidden border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-2"
        variants={fadeDownItem}
      >
        <img className="w-full h-full object-cover" src={image01.src} alt={image01.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[65%] aspect-3/2 rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute top-0 right-0 hover:scale-101 transition-transform"
        variants={fadeRightItem}
      >
        <img className="w-full h-full object-cover" src={image02.src} alt={image02.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[65%] aspect-3/2 rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute bottom-0 left-0 hover:scale-101 transition-transform"
        variants={fadeLeftItem}
      >
        <img className="w-full h-full object-cover" src={image03.src} alt={image03.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[42%] aspect-3/2 rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute bottom-[12%] right-[4%] hover:scale-101 transition-transform"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image04.src} alt={image04.alt}/>
      </motion.div>
    </motion.div>
  )
}

export default CollageQuad
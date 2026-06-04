import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeRightItem, fadeUpItem } from "@/lib/animation"

type Props = {
  image01: { src: string, alt: string },
  image02: { src: string, alt: string },
  image03: { src: string, alt: string },
}

function CollageTrio({ image01, image02, image03 }: Props){

  return(
    <motion.div
      className="about__figures relative max-w-lg aspect-square md:translate-y-6 justify-self-center w-full"
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="about__figure w-[80%] aspect-square absolute top-0 left-0 rounded-xl overflow-hidden border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeDownItem}
      >
        <img className="w-full h-full object-cover" src={image01.src} alt={image01.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[45%] aspect-3/4 rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute top-[15%] right-0 hover:scale-101 transition-transform"
        variants={fadeRightItem}
      >
        <img className="w-full h-full object-cover" src={image02.src} alt={image02.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[70%] aspect-video rounded-xl overflow-hidden border-4 border-ds-yellow-5 absolute bottom-0 left-[10%] hover:scale-101 transition-transform"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image03.src} alt={image03.alt}/>
      </motion.div>
    </motion.div>
  )
}

export default CollageTrio
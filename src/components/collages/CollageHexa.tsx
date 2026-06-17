import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeRightItem, fadeLeftItem, fadeUpItem } from "@/lib/animation"

type Props = {
  className?: string,
  image01: { src: string, alt: string },
  image02: { src: string, alt: string },
  image03: { src: string, alt: string },
  image04: { src: string, alt: string },
  image05: { src: string, alt: string },
  image06: { src: string, alt: string },
}

function CollageHexa({ className, image01, image02, image03, image04, image05, image06 }: Props){

  return(
    <motion.div
      className={`about__figures relative aspect-3/4 justify-self-center w-full ${className}`}
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="about__figure w-[72%] aspect-4/3 absolute top-0 right-[6%] rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeDownItem}
      >
        <img className="w-full h-full object-cover" src={image01.src} alt={image01.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[38%] aspect-2/3 absolute top-[12%] left-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-3"
        variants={fadeRightItem}
      >
        <img className="w-full h-full object-cover" src={image02.src} alt={image02.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[60%] aspect-16/10 absolute top-[34%] right-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-2"
        variants={fadeLeftItem}
      >
        <img className="w-full h-full object-cover" src={image03.src} alt={image03.alt}/>
      </motion.div>

      <motion.div
        className="about__figure w-[46%] aspect-3/2 absolute bottom-[20%] left-[6%] rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-3"
        variants={fadeRightItem}
      >
        <img className="w-full h-full object-cover" src={image04.src} alt={image04.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[26%] aspect-square absolute bottom-[18%] right-[10%] rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-3"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image06.src} alt={image06.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[64%] aspect-2/1 absolute bottom-0 left-[18%] rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image05.src} alt={image05.alt}/>
      </motion.div>
    </motion.div>
  )
}

export default CollageHexa

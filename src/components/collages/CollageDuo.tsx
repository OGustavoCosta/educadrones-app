import * as motion from "motion/react-client"
import { motionContainer, fadeDownItem, fadeUpItem } from "@/lib/animation"

type Props = {
  className?: string,
  image01: { src: string, alt: string },
  image02: { src: string, alt: string },
}

function CollageDuo({ className, image01, image02 }: Props){

  return(
    <motion.div
      className={`about__figures relative aspect-4/3 justify-self-center w-full ${className}`}
      variants={motionContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="about__figure w-[72%] aspect-4/3 absolute top-0 left-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform"
        variants={fadeDownItem}
      >
        <img className="w-full h-full object-cover" src={image01.src} alt={image01.alt}/>
      </motion.div>
      <motion.div
        className="about__figure w-[60%] aspect-3/2 absolute bottom-0 right-0 rounded-md xs:rounded-lg mlg:rounded-xl overflow-hidden border-2 md:border-4 border-ds-yellow-5 hover:scale-101 transition-transform z-2"
        variants={fadeUpItem}
      >
        <img className="w-full h-full object-cover" src={image02.src} alt={image02.alt}/>
      </motion.div>
    </motion.div>
  )
}

export default CollageDuo

/* ROTAS */
import Link from 'next/link';

/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeDownItem, fadeUpItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import HeaderDrawer from './HeaderDrawer';
import HeaderScroll from './HeaderScroll';

function Header({absolute}:{absolute: boolean}){
  return(
    <header className={`header background-section py-4 flex flex-col items-center w-full ${absolute ? 'absolute text-ds-yellow-5' : 'static bg-ds-yellow-5 text-ds-blue-130'}`}>
      {/* HEADER PRINCIPAL */}
      <div className="header__main max-w-[1400px] w-full flex justify-between items-center">
        {/* MENU MOBILE */}
        <HeaderDrawer/>

        <motion.span 
          className="header__title poppins-medium text-lg block"
          variants={fadeDownItem}
          initial="hidden"
          animate="visible"
        >
          Educa Drones
        </motion.span>

        {/* NAVEGAÇÃO */}
        <nav className="header__nav md:flex justify-between items-center hidden text-sm/[125%]" aria-label="Menu principal">
          <motion.ul 
            className="header__list gap-5 flex items-center"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/" className="header__link link-underline">Início</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/sobre" className="header__link link-underline">Quem Somos</Link></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><Link href="/integrantes" className="header__link link-underline">Nossa Equipe</Link></motion.li>
          </motion.ul>
        </nav>
      </div>
      

      {/* HEADER DA PÁGINA */}
      <HeaderScroll/>
    </header>
  )
}

export default Header
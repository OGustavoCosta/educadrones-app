/* Rotas */
import Link from 'next/link';

/* ======================================================================== */
/* IMPORTAÇÃO DE ÍCONES */
import { Menu, X } from "lucide-react"

function Header(){
  return(
    <>
      <header className={`header header--navigation px-10`}>
        <nav className="nav w-full flex justify-between items-center py-5">
          <div className="nav__menu-icon md:hidden">
            <Menu size={25} strokeWidth={2}/>
          </div>
          <h1 className="nav__title poppins-medium text-xl">Educa Drones</h1>
          {/* Navigation */}
          <ul className="nav__list hidden gap-5 md:flex">
            <li className="nav__item"><Link href="/" className="nav__link">Início</Link></li>
            <li className="nav__item"><Link href="/sobre" className='nav__link'>Quem Somos</Link></li>
            <li className="nav__item"><Link href="/integrantes" className="nav__link">Nossa Equipe</Link></li>
            <li className="nav__item"><a href='#contato' className="nav__link">Contato</a></li>
          </ul>
          {/* Mobile */}
          <div className="nav__mobile fixed top-0 left-0 w-[90vw] pl-[5%] pt-5 h-lvh z-10 bg-background-light text-dark flex-col gap-6 transition-all duration-500 -translate-x-[90vw] lg:hidden">
            <div className="nav__menu-icon">
              <X size={25} strokeWidth={2}/>
            </div>
              
            {/* Mobile Navigation */}
            <ul className="nav__list grid gap-3">
              <li className="nav__item"><Link href="/" className="nav__link">Início</Link></li>
              <li className="nav__item"><Link href="/sobre" className='nav__link'>Quem Somos</Link></li>
              <li className="nav__item"><Link href="/integrantes" className="nav__link">Nossa Equipe</Link></li>
              <li className="nav__item "><a href='#contato' className="nav__link">Contato</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
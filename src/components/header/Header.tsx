/* Rotas */
import Link from 'next/link';

/* COMPONENTES */
import HeaderDrawer from './HeaderDrawer';
import HeaderScroll from './HeaderScroll';

function Header({absolute}:{absolute: boolean}){
  return(
    <header className={`header md:px-10 px-5 py-4 flex flex-col items-center w-full ${absolute ? 'absolute text-ds-yellow-5' : 'static bg-ds-yellow-5 text-ds-blue-130'}`}>
      {/* HEADER PRINCIPAL */}
      <div className="header__main max-w-[1400px] w-full flex justify-between">
        {/* MENU MOBILE */}
        <HeaderDrawer/>

        <span className="header__title poppins-medium text-lg block">Educa Drones</span>

        {/* NAVEGAÇÃO */}
        <nav className="header__nav md:flex justify-between items-center hidden text-sm/[125%]" aria-label="Menu principal">
          <ul className="header__list gap-5 flex">
            <li className="header__item"><Link href="/" className="header__link">Início</Link></li>
            <li className="header__item"><Link href="/sobre" className='header__link'>Quem Somos</Link></li>
            <li className="header__item"><Link href="/integrantes" className="header__link">Nossa Equipe</Link></li>
            <li className="header__item"><a href='#contato' className="header__link">Contato</a></li>
          </ul>
        </nav>
      </div>
      

      {/* HEADER DA PÁGINA */}
      <HeaderScroll/>
    </header>
  )
}

export default Header
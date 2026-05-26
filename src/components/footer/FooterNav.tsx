import Link from "next/link";
import { useId } from "react";

type Props = {
  title: string;
  links: {
    id?: string | null; 
    label: string; 
    url: string;}[];
  id?: string | null;
}

function FooterNav(props:Props) {
  const { title, links } = props
  const id = useId()

  return(
    <nav className="footerNav flex flex-col gap-3" aria-labelledby={id}>
      <h2 className="footerNav__title text-[0.75rem] uppercase font-bold text-ds-blue-20" id={id}>{title}</h2>
      <ul className="footerNav__list text-sm/[125%] flex flex-col gap-1.5">
        {links.map(link => (
          <li className="footerNav__item" key={link.label + link.url}><Link href={link.url} className="footerNav__link">{link.label}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default FooterNav
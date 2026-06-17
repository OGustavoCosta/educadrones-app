import { LucideIcon } from "lucide-react"

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
}

function InfoCard({ icon: Icon, title, text }: Props) {
  return (
    <article className="infoCard flex flex-col gap-3 p-6 rounded-lg border border-ds-neutral-200/50 bg-ds-neutral-50 h-full hover:scale-101 transition-transform">
      <header className="infoCard__header flex items-center gap-3">
        <span className="infoCard__iconWrapper flex justify-center items-center w-11 aspect-square rounded-md bg-ds-blue-100 text-ds-yellow-5 shrink-0" aria-hidden="true">
          <Icon size={20} strokeWidth={2} />
        </span>
        <h3 className="infoCard__title text-base/[120%] font-semibold text-ds-blue-130">{title}</h3>
      </header>
      <p className="infoCard__text text-sm/[150%] text-ds-neutral-400">{text}</p>
    </article>
  )
}

export default InfoCard

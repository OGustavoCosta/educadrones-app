type Props = {
  image: string;
  title: string;
  text: string;
  year: string;
  className?: string;
}

function AchievementCard({ image, title, text, year, className }: Props){
  const shine = "before:absolute before:inset-y-0 before:-left-full before:w-1/2 before:-skew-x-12 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-1000 hover:before:translate-x-[500%]"

  return(
    <article className={`achievementCard relative flex gap-4 p-4 sm:p-6 rounded-lg border border-ds-neutral-200/50 bg-ds-neutral-50 flex-1 hover:scale-101 transition-transform overflow-hidden ${shine} ${className}`}>
      <div className="achievementCard__wrapper flex justify-center items-start">
        <div className="achievementCard__figure w-14 overflow-hidden aspect-square rounded-sm bg-amber-200 shrink-0">
          <img src={image} alt="" className="achievementCard__img w-full h-full object-cover" />
        </div>
      </div>
      <div className="achievementCard__wrapper flex flex-col gap-1 font-medium">
        <h3 className="achievementCard__title text-sm/[120%] text-ds-neutral-400">{title}</h3>
        <p className="achievementCard__text text-[0.75rem] text-ds-neutral-350">{text}</p>
        <p className="achievementCard__year text-[0.75rem] text-ds-neutral-350 font-medium">{year}</p>
      </div>
    </article>
  )
}

export default AchievementCard
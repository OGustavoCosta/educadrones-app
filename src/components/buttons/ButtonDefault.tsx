import { LucideIcon, Target } from "lucide-react"

type Props = {
  text: string;
  textColor?: 'white' | 'blue' | 'yellow';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  link: string;
  color?: 'white' | 'blue' | 'yellow';
  variant?: 'outline' | 'solid';
  target?: "_self" | "_blank";
  rel?: string;
}

function Button( props: Props){

  const {
    text,
    textColor,
    icon: Icon,
    iconPosition = 'left',
    link,
    color = 'white',
    variant = 'outline',
    target,
    rel
  } = props
  
  const colorClasses = {
    outline: {
      white:  'text-ds-yellow-10 bg-ds-yellow-10/10 hover:bg-ds-yellow-10/20',
      yellow: 'text-ds-yellow-60 bg-ds-yellow-60/10 hover:bg-ds-yellow-60/20',
      blue:   'text-ds-blue-100 hover:bg-ds-blue-100/10',
    },
    solid: {
      white:  'text-ds-blue-100 bg-ds-yellow-10 hover:bg-ds-yellow-5',
      yellow: 'text-ds-blue-100 bg-ds-yellow-60 hover:bg-ds-yellow-40',
      blue:   'text-ds-yellow-10 bg-ds-blue-100 hover:bg-ds-blue-60',
    }
  }

  const textColorClasses = {
    white:  'text-ds-yellow-10',
    yellow: 'text-ds-yellow-60',
    blue:   'text-ds-blue-100',
  }
  
  return(
    <a 
      className={`
        button flex items-center gap-2 text-sm/[100%] px-8 py-4 rounded-sm font-semibold cursor-pointer transition hover:-translate-y-[1px] active:scale-95
        ${Icon ? iconPosition == 'left' ? 'pl-6' : 'pr-6' : ''}
        ${iconPosition == 'left' ? '' : 'flex-row-reverse'}
        ${colorClasses[variant][color]}
        ${variant == 'outline' ? 'border border-current' : ''}
      `}
      href={link}
      target={target}
      rel={rel}
    >
      {Icon && <Icon size={14} strokeWidth={2} aria-hidden="true"/>}
      <span className={`button__span whitespace-nowrap ${textColor && textColorClasses[textColor]}`}>
        {text}
      </span>
    </a>
  )
}

export default Button
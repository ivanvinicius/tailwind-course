import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface Props {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: Props) {
  return (
    <a
      className="group flex items-center gap-3 rounded px-3 py-2 transition-all duration-150 hover:bg-violet-50 dark:hover:bg-zinc-800"
      href=""
    >
      <Icon className="2-5 h-5 text-zinc-500 group-hover:text-violet-700 dark:text-zinc-600 dark:group-hover:text-violet-300" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-700 dark:text-zinc-600 dark:group-hover:text-violet-300" />
    </a>
  )
}

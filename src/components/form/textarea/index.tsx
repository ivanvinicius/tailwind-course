import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'textarea'>

export function Textarea(props: Props) {
  return (
    <textarea
      className={twMerge([
        'min-h-[12rem] w-full resize-y rounded-lg border  px-3 py-2 outline-none',
        'border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400',
        'focus:border-violet-300 focus:ring-4 focus:ring-violet-25 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        'transition-shadow duration-150',
      ])}
      {...props}
    />
  )
}

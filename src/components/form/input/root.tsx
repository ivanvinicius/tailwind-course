import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'div'>

export function InputRoot(props: Props) {
  return (
    <div
      className={twMerge([
        'flex w-full items-center gap-2 rounded-lg border px-3 py-2',
        'border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-25 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        'transition-shadow duration-150',
        props.className,
      ])}
      {...props}
    />
  )
}

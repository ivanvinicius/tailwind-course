import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export function InputRoot(props: Props) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 transition-shadow duration-150 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-25"
      {...props}
    />
  )
}

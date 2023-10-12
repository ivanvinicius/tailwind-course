import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export function InputRoot(props: Props) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2"
      {...props}
    />
  )
}

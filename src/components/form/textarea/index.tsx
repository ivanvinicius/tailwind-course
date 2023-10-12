import { ComponentProps } from 'react'

type Props = ComponentProps<'textarea'>

export function Textarea(props: Props) {
  return (
    <textarea
      className="min-h-[12rem] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2"
      {...props}
    />
  )
}

import { ComponentProps } from 'react'

type RootProps = ComponentProps<'div'>
type PrefixProps = ComponentProps<'div'>
type ControlProps = ComponentProps<'input'>

function InputRoot(props: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2"
      {...props}
    />
  )
}

function InputPrefix(props: PrefixProps) {
  return <div {...props} />
}

function InputControl(props: ControlProps) {
  return (
    <input
      className="flex w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
}

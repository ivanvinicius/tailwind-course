import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export function InputPrefix(props: Props) {
  return <div {...props} />
}

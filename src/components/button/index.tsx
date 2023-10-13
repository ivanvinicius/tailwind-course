import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none',
    'focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-90',
    'transition-all duration-150',
  ],

  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 bg-transparent',
      ghost:
        'group/ghost-button border-0 bg-transparent rounded-md p-2 border-zinc-300 text-zinc-700 ',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type Props = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, ...props }: Props) {
  return <button className={button({ variant })} {...props} />
}

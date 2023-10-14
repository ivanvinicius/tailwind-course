'use client'

import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends RadixSelect.SelectProps {
  placeholder?: string
  children: ReactNode
}

export function SelectRoot({ placeholder = '', children, ...rest }: Props) {
  return (
    <RadixSelect.Root {...rest}>
      <RadixSelect.Trigger
        className={twMerge([
          'flex h-10.5 w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 outline-none',
          'border-zinc-300 focus:border-violet-300 focus:ring-4 focus:ring-violet-25 data-[placeholder]:text-zinc-600 ',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10 dark:data-[placeholder]:text-zinc-400',
          'transition-shadow duration-150',
        ])}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500 dark:text-violet-300" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"
          side="bottom"
          sideOffset={4}
          position="popper"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

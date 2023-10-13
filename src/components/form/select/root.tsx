'use client'

import * as RadixSelect from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

interface Props extends RadixSelect.SelectProps {
  placeholder?: string
  children: ReactNode
}

export function SelectRoot({ placeholder = '', children, ...rest }: Props) {
  return (
    <RadixSelect.Root {...rest}>
      <RadixSelect.Trigger className="flex h-10.5 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 outline-none transition-shadow duration-150 focus:border-violet-300 focus:ring-4 focus:ring-violet-25 data-[placeholder]:text-zinc-600">
        <RadixSelect.Value className="text-black" placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
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

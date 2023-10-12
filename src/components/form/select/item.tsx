'use client'

import * as RadixSelect from '@radix-ui/react-select'
import { SelectItemProps } from '@radix-ui/react-select'
import { Check } from 'lucide-react'

interface Props extends SelectItemProps {
  text: string
  value: string
}

export function SelectItem({ text, value, ...rest }: Props) {
  return (
    <RadixSelect.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-violet-50"
      value={value}
      {...rest}
    >
      <RadixSelect.ItemText>{text}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator>
        <Check className="h-4 w-4 text-violet-700" />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}

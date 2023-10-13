'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface Props {
  value: string
  title: string
  active?: boolean
}

export function TabItem({ value, title, active = false }: Props) {
  return (
    <Tabs.Trigger
      className={twMerge([
        'cursor-defaul group relative px-1 pb-4 text-sm font-medium outline-none',
        'text-zinc-500  hover:text-violet-700 data-[state=active]:text-violet-700',
        'transition-all duration-150',
      ])}
      value={value}
    >
      <span
        className={twMerge([
          'whitespace-nowrap rounded-sm ',
          'ring-violet-300  group-focus-visible:ring-1 group-focus-visible:ring-offset-8',
          'transition-shadow duration-200',
        ])}
      >
        {title}
      </span>

      {active && (
        <motion.div
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
          layoutId="activeTab"
        />
      )}
    </Tabs.Trigger>
  )
}

/**
 * Fazendo barra de borda usando sombreamento inset ao invés de setar active
 *
 * className="cursor-defaul relative px-1 pb-4 text-sm font-medium text-zinc-500
 * outline-none transition-all duration-150 hover:text-violet-700
 * data-[state=active]:text-violet-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]
 * data-[state=active]:shadow-current data-[state=active]:focus:relative
 * data-[state=active]:focus:shadow-violet-700"
 */

'use client'

import { UploadCloud } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { useInputFile } from './root'

export function InputFileTrigger() {
  const { id } = useInputFile()

  return (
    <label
      className={twMerge([
        'group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border px-6 py-4 text-center',
        'border-zinc-300 text-zinc-500 hover:border-violet-300 hover:bg-violet-25 hover:text-violet-500 ',
        'dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300 ',
        'transition-all duration-150',
      ])}
      htmlFor={id}
    >
      <div
        className={twMerge([
          'rounded-full border-6 p-2 transition-all duration-150 ',
          'border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700',
        ])}
      >
        <UploadCloud className="h-5 w-5 text-zinc-600 transition-all duration-150 group-hover:text-violet-500 dark:text-zinc-500 dark:group-hover:text-violet-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 transition-all duration-150 dark:text-zinc-500 dark:group-hover:text-violet-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max: 800x400)</span>
      </div>
    </label>
  )
}

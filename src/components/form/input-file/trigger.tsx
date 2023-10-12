'use client'

import { UploadCloud } from 'lucide-react'

import { useInputFile } from './root'

export function InputFileTrigger() {
  const { id } = useInputFile()

  return (
    <label
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 transition-all duration-150 hover:border-violet-300 hover:text-violet-500"
      htmlFor={id}
    >
      <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 transition-all duration-150 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 transition-all duration-150 group-hover:text-violet-500" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max: 800x400)</span>
      </div>
    </label>
  )
}

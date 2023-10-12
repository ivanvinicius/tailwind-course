'use client'

import { Trash, UploadCloud } from 'lucide-react'

import { formatBytes } from '~/utils/format-bytes'

import { useInputFile } from './root'

export function InputFileList() {
  const { files } = useInputFile()

  if (files.length > 0) {
    return (
      <div className="mt-3 space-y-3">
        {files.map(({ name, size }) => {
          return (
            <div
              className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 "
              key={name}
            >
              <div className="rounded-full border-4  border-violet-100 bg-violet-200 p-2 text-violet-600">
                <UploadCloud className="h-4 w-4 text-violet-600" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-1">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-700">
                    {name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {formatBytes(size)}
                  </span>
                </div>

                <div className="flex w-full items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-zinc-100">
                    <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                  </div>
                  <span className="text-sm  font-medium text-zinc-700">
                    80%
                  </span>
                </div>
              </div>

              <button
                className="group/button ml-auto border-0 bg-transparent "
                type="button"
                title="Sair da aplicação"
              >
                <Trash className="transition-color h-5 w-5 text-zinc-500 duration-150 group-hover/button:text-red-500" />
              </button>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div />
  }
}

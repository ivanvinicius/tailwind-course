'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { InputFileListItem } from './file-list-item'
import { useInputFile } from './root'

export function InputFileList() {
  const { files } = useInputFile()
  const [parent] = useAutoAnimate()

  if (files.length > 0) {
    return (
      <div ref={parent} className="mt-3 space-y-3">
        {files.map(({ name, size }) => {
          return (
            <InputFileListItem
              state="complete"
              key={name}
              name={name}
              size={size}
            />
          )
        })}
      </div>
    )
  } else {
    return <div />
  }
}

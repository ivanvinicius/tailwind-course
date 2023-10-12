'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useInputFile } from './root'

interface Props extends ComponentProps<'input'> {
  multiple?: boolean
}

export function InputFileControl({ multiple = false, ...rest }: Props) {
  const { id, onFilesSelected } = useInputFile()

  function handleSelectFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      className="sr-only"
      id={id}
      type="file"
      onChange={handleSelectFile}
      multiple={multiple}
      {...rest}
    />
  )
}

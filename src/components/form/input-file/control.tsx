'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useInputFile } from './root'

type Props = ComponentProps<'input'>

export function InputFileControl(props: Props) {
  const { id, onFilesSelected } = useInputFile()

  function handleSelectFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      className="sr-only"
      id={id}
      type="file"
      onChange={handleSelectFile}
      {...props}
    />
  )
}

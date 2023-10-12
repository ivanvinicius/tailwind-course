'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type Props = ComponentProps<'div'>

interface ContextProps {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const InputFileContext = createContext({} as ContextProps)

function InputFileRoot(props: Props) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </InputFileContext.Provider>
  )
}

const useInputFile = () => useContext(InputFileContext)

export { InputFileRoot, useInputFile }

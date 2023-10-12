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
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const InputFileContext = createContext({} as ContextProps)

function InputFileRoot(props: Props) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  function onFilesSelected(files: File[], multiple: boolean) {
    if (!multiple) {
      setFiles(files)
    } else {
      setFiles((prevState) => [...prevState, ...files])
    }
  }

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </InputFileContext.Provider>
  )
}

const useInputFile = () => useContext(InputFileContext)

export { InputFileRoot, useInputFile }

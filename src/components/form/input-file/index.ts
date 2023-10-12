import { InputFileControl } from './control'
import { InputFileList } from './file-list'
import { InputFileImagePreview } from './image-preview'
import { InputFileRoot } from './root'
import { InputFileTrigger } from './trigger'

export const InputFile = {
  Root: InputFileRoot,
  Trigger: InputFileTrigger,
  ImagePreview: InputFileImagePreview,
  Control: InputFileControl,
  FileList: InputFileList,
}

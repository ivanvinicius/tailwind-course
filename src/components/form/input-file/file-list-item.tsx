'use client'

import { CheckCircle2, Trash, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

import { Button } from '~/components/button'
import { formatBytes } from '~/utils/format-bytes'

const fileItem = tv({
  slots: {
    container: 'group flex items-start gap-4 rounded-lg border p-4',
    icon: 'rounded-full border-4 ',
  },

  variants: {
    state: {
      progress: {
        container: 'border-zinc-200',
        icon: 'border-violet-100 bg-violet-200 p-2 text-violet-600',
      },
      complete: {
        container: 'border-violet-500',
        icon: 'border-violet-100 bg-violet-200 p-2 text-violet-600',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-100 bg-error-200 p-2 text-error-600',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

interface Props extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function InputFileListItem({ name, size, state }: Props) {
  const { container, icon } = fileItem({ state })

  return (
    <div className={container()} key={name}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>

          <button
            className="text-error-700 hover:text-error-900 text-sm font-semibold transition-colors duration-150"
            type="button"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2  rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm  font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-green-500 text-white" />
      ) : (
        <Button variant="ghost" type="button" title="Delete item">
          <Trash className="transition-color text-error-600 group-hover/ghost-button:text-error-800 h-5 w-5 duration-150" />
        </Button>
      )}
    </div>
  )
}

import { LogOut } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../button'

export function Profile() {
  return (
    <div className=" flex items-center gap-3">
      <Image
        className="h-10 w-10 rounded-full"
        src="https://github.com/ivanvinicius.png"
        alt=""
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Ivan Vinicius
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          usando@truncate@paralimitarlarguradoelemento.com
        </span>
      </div>

      <Button variant="ghost" type="button" title="Logout">
        <LogOut className="transition-color h-5 w-5 text-zinc-500 duration-150 group-hover/ghost-button:text-red-500 dark:group-hover/ghost-button:text-violet-200" />
      </Button>
    </div>
  )
}

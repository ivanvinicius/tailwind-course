import { LogOut } from 'lucide-react'
import Image from 'next/image'

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
        <span className="text-sm font-semibold text-zinc-700">
          Ivan Vinicius
        </span>
        <span className="truncate text-sm text-zinc-500">
          usando@truncate@paralimitarlarguradoelemento.com
        </span>
      </div>

      <button
        className="group ml-auto border-0 bg-transparent"
        type="button"
        title="Sair da aplicação"
      >
        <LogOut className="transition-color  h-5 w-5 text-zinc-500 duration-150 group-hover:text-red-500" />
      </button>
    </div>
  )
}

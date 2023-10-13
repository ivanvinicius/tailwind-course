'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  User,
  LifeBuoy,
  Settings,
  Menu,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { Button } from '../button'
import { Input } from '../form/input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { SpaceWidget } from './space-widget'

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge([
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b p-4 data-[state=open]:h-screen',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:h-screen',
        'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
      ])}
    >
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost" type="button">
            <Menu className="h-6 w-6 text-zinc-700" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        className="flex flex-1 flex-col gap-6 data-[state=closed]:sr-only data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:not-sr-only"
        forceMount
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Input.Prefix>
          <Input.Control type="text" placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={User} />
        </nav>

        <div className="mt-auto flex flex-col gap-6 ">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Settings} />
          </nav>

          <SpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

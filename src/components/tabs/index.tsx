'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { TabItem } from './tab-item'

const tabs = [
  { value: 'tab1', title: 'My details' },
  { value: 'tab2', title: 'Profile' },
  { value: 'tab3', title: 'Password' },
  { value: 'tab4', title: 'Team' },
  { value: 'tab5', title: 'Plan' },
  { value: 'tab6', title: 'Billing' },
  { value: 'tab7', title: 'Email' },
  { value: 'tab8', title: 'Notifications' },
  { value: 'tab9', title: 'Intregrations' },
  { value: 'tab10', title: 'API' },
]

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
      <ScrollArea.Root className="w-full " type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="boder-zinc-200 mt-6 flex w-full items-center gap-4 border-b">
            {tabs.map(({ value, title }) => (
              <TabItem
                key={value}
                value={value}
                title={title}
                active={value === activeTab}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-row bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}

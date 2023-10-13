'use client'

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
    </Tabs.Root>
  )
}

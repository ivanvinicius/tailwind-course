import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { Button } from '~/components/button'
import { Input } from '~/components/form/input'
import { InputFile } from '~/components/form/input-file'
import { Select } from '~/components/form/select'
import { Textarea } from '~/components/form/textarea'
import { SettingsTabs } from '~/components/tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="flex flex-col ">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200  py-6 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-medium text-lg text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 ">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="reset"
              form="settings"
              title="Clear form data"
            >
              Cancel
            </Button>

            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
          id="settings"
        >
          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Ivan" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-100 lg:sr-only"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Vinicius" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="email"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="ivan@rocketsaet.com.br"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile
              </span>
            </label>

            <InputFile.Root>
              <div className="flex flex-col gap-6 lg:flex-row  ">
                <InputFile.ImagePreview />
                <InputFile.Trigger />
              </div>
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="role"
            >
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="manager" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="country"
            >
              Country
            </label>

            <Select.Root placeholder="Choose your country">
              <Select.Item value="us" text="United States" />
              <Select.Item value="br" text="Brazil" />
              <Select.Item value="ger" text="Germany" />
              <Select.Item value="ita" text="Italy" />
              <Select.Item value="spa" text="Spain" />
            </Select.Root>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="timezone"
            >
              Timezone
            </label>

            <Select.Root placeholder="Choose your timezone...">
              <Select.Item
                value="utc-8"
                text="Pacific Standard Time (UTC -08:00)"
              />
              <Select.Item
                value="utc-3"
                text="America São Paulo (UTC -03:00)"
              />
            </Select.Root>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-100"
              htmlFor="bio"
            >
              Biography
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select.Root defaultValue="normal">
                  <Select.Item value="normal" text="Normal text" />
                  <Select.Item value="md" text="Markdown" />
                </Select.Root>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" type="button">
                    <Bold
                      className="transition-color h-4 w-4 text-zinc-500 duration-150 group-hover/ghost-button:text-violet-500 dark:group-hover/ghost-button:text-violet-200"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Italic
                      className="transition-color h-4 w-4 text-zinc-500 duration-150 group-hover/ghost-button:text-violet-500 dark:group-hover/ghost-button:text-violet-200"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <Link
                      className="transition-color h-4 w-4 text-zinc-500 duration-150 group-hover/ghost-button:text-violet-500 dark:group-hover/ghost-button:text-violet-200"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <List
                      className="transition-color h-4 w-4 text-zinc-500 duration-150 group-hover/ghost-button:text-violet-500 dark:group-hover/ghost-button:text-violet-200"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button variant="ghost" type="button">
                    <ListOrdered
                      className="transition-color h-4 w-4 text-zinc-500 duration-150 group-hover/ghost-button:text-violet-500 dark:group-hover/ghost-button:text-violet-200"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue={
                  "I'm product designer based in Melbourn, Australia. I was born in south Brazil, the city is known as Taio, and it is placed mid-center Santa Catarina State"
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 py-6 lg:grid lg:grid-cols-form">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share a few snippets of your work
              </span>
            </label>

            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.FileList />
              <InputFile.Control multiple />
            </InputFile.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-6">
            <Button variant="outline" type="reset" title="Clear form data">
              Cancel
            </Button>

            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}

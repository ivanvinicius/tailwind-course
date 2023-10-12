import { Mail } from 'lucide-react'

import { Input } from '~/components/form/input'
import { InputFile } from '~/components/form/input-file'
import { Select } from '~/components/form/select'
import { SettingsTabs } from '~/page-components/settings/tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 py-6">
          <div className="space-y-1">
            <h2 className="text-medium text-lg text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-all duration-150 hover:bg-zinc-50"
              type="reset"
              title="Clear form data"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form
          className="flex w-full flex-col divide-y divide-zinc-200"
          id="settings"
        >
          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Ivan" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Vinicius" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="ivan@rocketsaet.com.br"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <InputFile.Root>
              <div className="flex items-center gap-6 ">
                <InputFile.ImagePreview />
                <InputFile.Trigger />
              </div>
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="manager" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label
              className="text-sm font-medium text-zinc-700"
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

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label
              className="text-sm font-medium text-zinc-700"
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

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Biography
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>

            <div>input</div>
          </div>

          <div className="grid grid-cols-form items-center gap-3 py-6">
            <label className="text-sm font-medium text-zinc-700">
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
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
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-all duration-150 hover:bg-zinc-50"
              type="reset"
              title="Clear form data"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

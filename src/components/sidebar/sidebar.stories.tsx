import { StoryFn, Meta } from '@storybook/react'
import '@/styles/globals.css'

import { Sidebar } from './index'
import { basic, exampleWithLabel } from '@/data/menus'
import { profiles } from '@/data/profiles'

const navs = [basic, exampleWithLabel]
const profile = profiles[0]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Sidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  navs: navs,
  header: profile && {
    title: profile.name,
    subtitle: profile.email,
    image: profile.image,
  },
}

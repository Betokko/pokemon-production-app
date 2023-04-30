import { StoryObj } from '@storybook/react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

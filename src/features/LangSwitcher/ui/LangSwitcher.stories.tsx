import type { StoryObj } from '@storybook/react'
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher'

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

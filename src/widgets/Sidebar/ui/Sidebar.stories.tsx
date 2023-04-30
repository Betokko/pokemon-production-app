import type { StoryObj } from '@storybook/react'
import { Sidebar } from 'widgets/Sidebar'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

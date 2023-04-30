import { StoryObj } from '@storybook/react'
import { Loader } from 'shared/ui/Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

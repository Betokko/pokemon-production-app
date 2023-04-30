import type { StoryObj } from '@storybook/react'
import { Error } from './Error'

const meta = {
    title: 'widget/Error',
    component: Error
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

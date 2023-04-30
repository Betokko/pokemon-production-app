import type { StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: { label: 'Click' }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: ThemeButton.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        theme: ThemeButton.SECONDARY
    }
}

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    }
}

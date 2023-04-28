import type { StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: { label: 'Button' }
}

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    }
}

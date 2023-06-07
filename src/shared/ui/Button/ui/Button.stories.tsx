import { StoryObj } from '@storybook/react'
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

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE
    }
}

export const Red: Story = {
    args: {
        theme: ThemeButton.RED
    }
}

export const OutlineRed: Story = {
    args: {
        theme: ThemeButton.OUTLINE_RED
    }
}

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    }
}

export const Disabled: Story = {
    args: {
        theme: ThemeButton.PRIMARY,
        disabled: true
    }
}

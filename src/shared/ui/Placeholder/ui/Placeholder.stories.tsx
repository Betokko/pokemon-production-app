import { StoryObj } from '@storybook/react'
import { Placeholder } from 'shared/ui/Placeholder'

const meta = {
    title: 'shared/Placeholder',
    component: Placeholder
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        src: 'https://placehold.co/200x200?text=placeholder',
        size: '5rem'
    }
}
export const Medium: Story = {
    args: {
        src: 'https://placehold.co/200x200?text=placeholder',
        size: '10rem'
    }
}
export const Large: Story = {
    args: {
        src: 'https://placehold.co/200x200?text=placeholder',
        size: '20rem'
    }
}

import { StoryObj } from '@storybook/react'
import { Pokemon } from './Pokemon'

const meta = {
    title: 'entities/Pokemon',
    component: Pokemon
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        id: '001'
    }
}

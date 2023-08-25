import { StoryObj } from '@storybook/react'
import { PokemonPage } from '../index'

const meta = {
    title: 'pages/PokemonPage',
    component: PokemonPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

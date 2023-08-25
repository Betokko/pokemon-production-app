import { StoryObj } from '@storybook/react'
import { PokemonListPage } from '../index'

const meta = {
    title: 'pages/PokemonListPage',
    component: PokemonListPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

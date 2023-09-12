import { StoryObj } from '@storybook/react'
import { PokemonContentImg } from './PokemonContentImg'

const meta = {
    title: 'entities/PokemonContentImg',
    component: PokemonContentImg
}

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Primary: Story = {
    args: {
        block: {
            id: 'string',
            type: 'img',
            src: 'https://static.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png',
            title: 'Charmander'
        }
    }
}

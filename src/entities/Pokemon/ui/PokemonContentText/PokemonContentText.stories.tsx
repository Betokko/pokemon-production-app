import { StoryObj } from '@storybook/react'
import { PokemonContentText } from './PokemonContentText'
import { ThemeButton } from 'shared/ui/Button'

const meta = {
    title: 'entities/PokemonContentText',
    component: PokemonContentText
}

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Primary: Story = {
    args: {
        block: {
            id: 'string',
            type: 'text',
            title: 'Header',
            paragraphs: ['Paragraph 1', 'Paragraph 2', 'Paragraph 2']
        }
    }
}

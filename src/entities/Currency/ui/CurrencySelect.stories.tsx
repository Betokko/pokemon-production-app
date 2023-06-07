import { StoryObj } from '@storybook/react'
import { CurrencySelect } from 'entities/Currency'

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

import { StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
    title: 'shared/Card',
    component: Card
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: <div>lorem</div>
    }
}

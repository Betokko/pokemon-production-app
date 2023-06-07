import { StoryObj } from '@storybook/react'
import { Select } from 'shared/ui/Select'

const meta = {
    title: 'shared/Select',
    component: Select
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'label',
        options: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' }
        ]
    }
}

import { StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        width: '20rem'
    }
}
export const Circle: Story = {
    args: {
        circle: true,
        width: '20rem'
    }
}

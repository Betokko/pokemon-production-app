import { StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
    title: '/CommentList',
    component: CommentList
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

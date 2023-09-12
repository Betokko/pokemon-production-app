import { StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const comments = [
    { id: '1', user: { id: '1', username: 'User 1', placeholder: 'https://placehold.co/100x100' }, text: 'lorem' },
    { id: '2', user: { id: '2', username: 'User 2', placeholder: 'https://placehold.co/150x150' }, text: 'lorem ipsum' },
    { id: '3', user: { id: '3', username: 'User 3', placeholder: 'https://placehold.co/200x200' }, text: 'lorem ipsum dolor' }
]

const meta = {
    title: 'entities/CommentList',
    component: CommentList
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: { comments }
}
export const isLoading: Story = {
    args: {
        isLoading: true,
        comments
    }
}

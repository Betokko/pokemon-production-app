import { StoryObj } from '@storybook/react'
import { AddCommentForm } from 'features/AddCommentForm'

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

import type { StoryObj } from '@storybook/react'
import { NotFoundPage } from 'pages/NotFoundPage'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

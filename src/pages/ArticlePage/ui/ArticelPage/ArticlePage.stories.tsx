import { StoryObj } from '@storybook/react'
import { ArticlePage } from 'pages/ArticlePage'

const meta = {
    title: '/ArticlePage',
    component: ArticlePage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

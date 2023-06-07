import { StoryObj } from '@storybook/react'
import { ArticlesPage } from 'pages/ArticlesPage'

const meta = {
    title: '/ArticlesPage',
    component: ArticlesPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

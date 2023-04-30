import { StoryObj } from '@storybook/react'
import { AboutPage } from 'pages/AboutPage'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

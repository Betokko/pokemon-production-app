import type { StoryObj } from '@storybook/react'
import { MainPage } from 'pages/MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

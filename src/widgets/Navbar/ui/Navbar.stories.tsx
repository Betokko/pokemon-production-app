import { StoryObj } from '@storybook/react'
import { Navbar } from 'widgets/Navbar'
import { BrowserRouter } from 'react-router-dom'

const meta = {
    title: 'widget/Navbar',
    component: Navbar
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    }
}

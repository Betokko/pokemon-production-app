import { StoryObj } from '@storybook/react'
import { LoginModal } from 'features/AuthByUserName'

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    args: {
        open: true
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

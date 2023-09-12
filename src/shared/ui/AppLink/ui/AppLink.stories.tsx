import { StoryObj } from '@storybook/react'
import { AppLink, ThemeAppLink } from 'shared/ui/AppLink/ui/AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: { to: '/', children: 'Link' }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: ThemeAppLink.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        theme: ThemeAppLink.SECONDARY
    }
}

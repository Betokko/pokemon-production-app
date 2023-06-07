import { StoryObj } from '@storybook/react'
import { ProfileCard } from 'entities/Profile'
import { Currency } from 'entities/Currency'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        data: {
            username: 'Admin',
            firstname: 'Admin',
            lastname: 'Admin',
            age: 33,
            city: 'Moscow',
            placeholder: 'https://placehold.co/600x400',
            currency: Currency.RUB
        }
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const Error: Story = {
    args: {
        error: 'error'
    }
}

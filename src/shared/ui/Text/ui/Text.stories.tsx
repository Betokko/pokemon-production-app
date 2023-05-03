import { StoryObj } from '@storybook/react'
import { Text, ThemeText } from './Text'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est magni nostrum quia voluptates. Architecto eaque, error fugit itaque molestiae necessitatibus nulla officia omnis praesentium quas, sit soluta suscipit, veritatis?'
const meta = {
    title: 'shared/Text',
    component: Text

}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: lorem,
        text: lorem
    }
}

export const Error: Story = {
    args: {
        title: lorem,
        text: lorem,
        theme: ThemeText.ERROR
    }
}

export const Title: Story = {
    args: {
        title: lorem
    }
}

export const Normal: Story = {
    args: {
        text: lorem
    }
}

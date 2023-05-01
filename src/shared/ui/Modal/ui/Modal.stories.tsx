import { StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        open: true,
        children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque debitis hic magni minus nesciunt odit quidem repudiandae sequi ut. Alias at et iusto laudantium reprehenderit, saepe sapiente voluptatem voluptates.</div>
    }
}

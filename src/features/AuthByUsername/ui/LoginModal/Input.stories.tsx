import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginModal } from './LoginModal';
import { LoginForm } from '../LoginForm/LoginForm';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children: LoginForm,
};

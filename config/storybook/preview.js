import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: 'app_light_theme', color: '#fff' },
            { name: 'dark', class: 'app_dark_theme', color: '#000' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
addDecorator(ThemeDecorator);

import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (story: () => Story) => (
    <ThemeProvider>
        <div className="app">
            {story()}
        </div>
    </ThemeProvider>
);

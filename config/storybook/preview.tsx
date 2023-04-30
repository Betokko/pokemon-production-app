import React, { Suspense } from 'react'
import { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        themes: {
            list: [
                { name: 'Light', class: ['app', Theme.LIGHT], color: '#fff', default: true },
                { name: 'Dark', class: ['app', Theme.DARK], color: '#000' }
            ]
        }
    }
}

export const decorators = [
    (Story: any) => (
        <BrowserRouter>
            <Suspense fallback=''>
                <Story />
            </Suspense>
        </BrowserRouter>
    )
]

export default preview

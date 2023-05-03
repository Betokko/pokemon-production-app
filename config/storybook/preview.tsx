import React, { Suspense } from 'react'
import { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'

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
        <StoreProvider initialState={{ user: {}, login: { username: 'admin', password: 'admin' } } }>
            <I18nextProvider i18n={i18n}>
                <Suspense fallback=''>
                    <BrowserRouter>
                        <Story />
                    </BrowserRouter>
                </Suspense>
            </I18nextProvider>
        </StoreProvider>
    )
]

export default preview

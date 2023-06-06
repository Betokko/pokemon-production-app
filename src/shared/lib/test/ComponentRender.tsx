import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18nTest from 'shared/config/i18n/i18nTest'
import { render } from '@testing-library/react'
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

export function ComponentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const { route = '/', initialState } = options
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

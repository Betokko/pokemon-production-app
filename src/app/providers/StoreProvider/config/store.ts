import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export function createReduxStore (initialState?: StateSchema) {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer
    }

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

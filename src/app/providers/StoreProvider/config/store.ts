import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUserName'

export function createReduxStore (initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        login: loginReducer
    }

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

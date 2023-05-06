import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManaget'

export function createReduxStore (initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<IStateSchema>({
    // @ts-ignore
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

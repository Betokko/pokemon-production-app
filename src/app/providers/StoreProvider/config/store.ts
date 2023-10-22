import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema, IThunkExtraArgs } from './StateSchema'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManaget'
import { $api } from 'shared/api/api'

export function createReduxStore (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>
) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArgs: IThunkExtraArgs = {
        api: $api
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

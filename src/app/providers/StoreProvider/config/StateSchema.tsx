import { IUserSchema } from 'entities/User'
import { ILoginSchema } from 'features/AuthByUserName/model/types/loginSchema'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { IProfileSchema } from 'entities/Profile'

export interface IStateSchema {
    user: IUserSchema

    // async
    login?: ILoginSchema
    profile?: IProfileSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

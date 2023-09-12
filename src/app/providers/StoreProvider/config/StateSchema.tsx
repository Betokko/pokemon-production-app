import { IUserSchema } from 'entities/User'
import { ILoginSchema } from 'features/AuthByUserName/model/types/loginSchema'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { IProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { To } from '@remix-run/router'
import { NavigateOptions } from 'react-router/dist/lib/context'
import { IPokemonSchema } from 'entities/Pokemon'
import { IPokemonCommentsSchema } from 'pages/PokemonPage'
import { IAddCommentFormSchema } from 'features/AddCommentForm'

export interface IStateSchema {
    user: IUserSchema

    // Асинхронные редюсеры
    login?: ILoginSchema
    profile?: IProfileSchema
    pokemon?: IPokemonSchema
    pokemonComments?: IPokemonCommentsSchema
    addCommentForm?: IAddCommentFormSchema
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

export interface IThunkExtraArgs {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArgs
    state: IStateSchema
}

import { IUserSchema } from 'entities/User'
import { ILoginSchema } from 'features/AuthByUserName/model/types/loginSchema'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { IProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { IPokemonSchema } from 'entities/Pokemon'
import { IPokemonCommentsSchema } from 'pages/PokemonPage'
import { IAddCommentFormSchema } from 'features/AddCommentForm'
import { IPokemonListSchema } from 'pages/PokemonListPage'

export interface IStateSchema {
    user: IUserSchema

    // Асинхронные редюсеры
    login?: ILoginSchema
    profile?: IProfileSchema
    pokemon?: IPokemonSchema
    pokemonComments?: IPokemonCommentsSchema
    addCommentForm?: IAddCommentFormSchema
    pokemonList?: IPokemonListSchema
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
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArgs
    state: IStateSchema
}

import { EntityState } from '@reduxjs/toolkit'
import { IPokemon, PokemonView } from 'entities/Pokemon'

export interface IPokemonListSchema extends EntityState<IPokemon> {
    isLoading?: boolean
    error?: string
    view?: PokemonView
    // pagination
    page: number
    limit?: number
    hasMore: boolean

    _inited?: boolean
}

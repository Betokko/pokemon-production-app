import { IPokemon } from './pokemon'

export interface IPokemonSchema {
    isLoading: boolean
    error?: string
    data?: IPokemon
}

import { IStateSchema } from 'app/providers/StoreProvider'

export const getPokemonData = (state: IStateSchema) => state.pokemon?.data
export const getPokemonIsLoading = (state: IStateSchema) => state.pokemon?.isLoading
export const getPokemonError = (state: IStateSchema) => state.pokemon?.error

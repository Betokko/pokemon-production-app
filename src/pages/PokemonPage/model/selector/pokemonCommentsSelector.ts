import { IStateSchema } from 'app/providers/StoreProvider'

export const getPokemonCommentsIsLoading = (state: IStateSchema) => state.pokemonComments?.isLoading
export const getPokemonCommentsError = (state: IStateSchema) => state.pokemonComments?.error

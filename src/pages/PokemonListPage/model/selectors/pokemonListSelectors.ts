import { IStateSchema } from 'app/providers/StoreProvider'
import { PokemonView } from 'entities/Pokemon'

export const getPokemonListPageIsLoading = (state: IStateSchema) => state.pokemonList?.isLoading
export const getPokemonListPageError = (state: IStateSchema) => state.pokemonList?.error
export const getPokemonListPageView = (state: IStateSchema) => state.pokemonList?.view ?? PokemonView.GRID

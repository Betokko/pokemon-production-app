import { IStateSchema } from 'app/providers/StoreProvider'
import { PokemonView } from 'entities/Pokemon'

export const getPokemonListPageIsLoading = (state: IStateSchema) => state.pokemonList?.isLoading
export const getPokemonListPageError = (state: IStateSchema) => state.pokemonList?.error
export const getPokemonListPageView = (state: IStateSchema) => state.pokemonList?.view ?? PokemonView.GRID
export const getPokemonListPageNum = (state: IStateSchema) => state.pokemonList?.page ?? 1
export const getPokemonListPageLimit = (state: IStateSchema) => state.pokemonList?.limit ?? 24
export const getPokemonListPageHasMore = (state: IStateSchema) => state.pokemonList?.hasMore
export const getPokemonListInited = (state: IStateSchema) => state.pokemonList?._inited

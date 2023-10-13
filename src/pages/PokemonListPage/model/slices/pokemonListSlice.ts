import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { IPokemon, PokemonView } from 'entities/Pokemon'
import { IPokemonListSchema } from '../types/pokemonListSchema'
import { fetchPokemonList } from '../services/fetchPokemonList'
import { POKEMON_LIST_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const pokemonListAdapter = createEntityAdapter<IPokemon>({
    selectId: (pokemon) => pokemon.id
})

export const getPokemonList = pokemonListAdapter.getSelectors<IStateSchema>(
    (state) => state.pokemonList ?? pokemonListAdapter.getInitialState()
)

const pokemonListSlice = createSlice({
    name: 'pokemonCommentsPageSlice',
    initialState: pokemonListAdapter.getInitialState<IPokemonListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: PokemonView.GRID,
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, { payload }: PayloadAction<PokemonView>) => {
            state.view = payload
            localStorage.setItem(POKEMON_LIST_VIEW_LOCALSTORAGE_KEY, payload)
        },
        setPage: (state, { payload }: PayloadAction<number>) => {
            state.page = payload
        },
        initState: (state) => {
            const view = localStorage.getItem('pokemon_list_view') as PokemonView
            state.view = view
            state.limit = view === PokemonView.LIST ? 2 : 10
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPokemonList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPokemonList.fulfilled, (state, { payload }: PayloadAction<IPokemon[]>) => {
                state.isLoading = false
                pokemonListAdapter.addMany(state, payload)
                state.hasMore = payload.length > 0
            })
            .addCase(fetchPokemonList.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload
            })
    }
})

export const { reducer: pokemonListReducer, actions: pokemonListActions } = pokemonListSlice

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPokemonSchema } from '../types/pokemonSchema'
import { fetchPokemonById } from '../services/fetchPokemonById'
import { IPokemon } from '../types/pokemon'

const initialState: IPokemonSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchPokemonById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPokemonById.fulfilled, (state, { payload }: PayloadAction<IPokemon>) => {
                state.isLoading = false
                state.data = payload
            })
            .addCase(fetchPokemonById.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload
            })
    }
})

export const { actions: pokemonActions } = pokemonSlice
export const { reducer: pokemonReducer } = pokemonSlice

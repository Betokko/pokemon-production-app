import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IComment } from 'entities/Comment'
import { IStateSchema } from 'app/providers/StoreProvider'
import { IPokemonCommentsSchema } from '../types/pokemonCommentsSchema'
import { fetchPokemonById } from 'entities/Pokemon/model/services/fetchPokemonById'
import { IPokemon } from 'entities/Pokemon'
import { fetchCommentsByPokemonId } from 'pages/PokemonPage/model/service/fetchCommentsByPokemonId'

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
})

export const getPokemonComments = commentsAdapter.getSelectors<IStateSchema>(
    (state) => state.pokemonComments ?? commentsAdapter.getInitialState()
)

const pokemonCommentsSlice = createSlice({
    name: 'pokemonCommentsPageSlice',
    initialState: commentsAdapter.getInitialState<IPokemonCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByPokemonId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCommentsByPokemonId.fulfilled, (state, { payload }: PayloadAction<IComment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, payload)
            })
            .addCase(fetchCommentsByPokemonId.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload
            })
    }
})

export const { reducer: pokemonCommentsReducer } = pokemonCommentsSlice

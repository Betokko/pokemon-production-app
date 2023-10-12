import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IPokemon } from 'entities/Pokemon'

export const fetchPokemonList = createAsyncThunk<IPokemon[], void, IThunkConfig<string>>(
    'pokemon/fetchCommentsByPokemonId',
    async (pokemonId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const res = await extra.api.get<IPokemon[]>('/pokemonList', {
                params: {}
            })
            return res.data
        } catch (e) {
            return rejectWithValue(i18n.t('error'))
        }
    })

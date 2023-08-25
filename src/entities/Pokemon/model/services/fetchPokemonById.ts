import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IPokemon } from '../types/pokemon'

export const fetchPokemonById = createAsyncThunk<IPokemon, string, IThunkConfig<string>>(
    'pokemon/fetchPokemonById',
    async (pokemonId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const res = await extra.api.get<IPokemon>(`/pokemonList/${pokemonId}`)
            return res.data
        } catch (e) {
            console.error(e)
            return rejectWithValue(i18n.t('error'))
        }
    })

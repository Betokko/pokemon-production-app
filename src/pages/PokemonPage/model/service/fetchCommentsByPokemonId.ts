import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IComment } from 'entities/Comment'

export const fetchCommentsByPokemonId = createAsyncThunk<IComment[], string, IThunkConfig<string>>(
    'pokemon/fetchCommentsByPokemonId',
    async (pokemonId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const res = await extra.api.get<IComment[]>('/comments', {
                params: {
                    pokemonId,
                    _expand: 'user'
                }
            })
            return res.data
        } catch (e) {
            return rejectWithValue(i18n.t('error'))
        }
    })

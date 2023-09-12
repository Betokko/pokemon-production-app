import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IComment } from 'entities/Comment'
import { getPokemonData } from 'entities/Pokemon/model/selectors/pokemonSelectors'
import { fetchCommentsByPokemonId } from '../../model/service/fetchCommentsByPokemonId'

export const addCommentForPokemon = createAsyncThunk<IComment, string, IThunkConfig<string>>(
    'pokemon/addCommentForPokemon',
    // @ts-ignore
    async (text, thunkAPI) => {
        const { dispatch, rejectWithValue, getState, extra } = thunkAPI
        const userData = getUserAuthData(getState())
        const pokemon = getPokemonData(getState())
        if (!userData || !text || !pokemon) return rejectWithValue(i18n.t('error'))
        try {
            const res = await extra.api.post<IComment>('/comments', {
                userId: userData.id,
                pokemonId: pokemon.id,
                text
            })
            if (!res.data) throw new Error()
            dispatch(fetchCommentsByPokemonId(pokemon.id))
        } catch (e) {
            return rejectWithValue(i18n.t('error'))
        }
    })

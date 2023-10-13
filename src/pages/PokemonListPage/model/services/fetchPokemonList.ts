import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IPokemon } from 'entities/Pokemon'
import { getPokemonListPageLimit } from '../selectors/pokemonListSelectors'

interface IFetchPokemonListProps {
    page?: number
}

export const fetchPokemonList = createAsyncThunk<IPokemon[], IFetchPokemonListProps, IThunkConfig<string>>(
    'pokemon/fetchCommentsByPokemonId',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const { page = 1 } = args
        const limit = getPokemonListPageLimit(getState())
        try {
            const res = await extra.api.get<IPokemon[]>('/pokemonList', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return res.data
        } catch (e) {
            return rejectWithValue(i18n.t('error'))
        }
    })

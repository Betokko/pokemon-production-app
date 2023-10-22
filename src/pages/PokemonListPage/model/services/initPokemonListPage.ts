import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/i18n'
import { pokemonListActions } from 'pages/PokemonListPage/model/slices/pokemonListSlice'
import { fetchPokemonList } from 'pages/PokemonListPage/model/services/fetchPokemonList'
import { getPokemonListInited } from 'pages/PokemonListPage/model/selectors/pokemonListSelectors'

export const initPokemonListPage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'pokemon/initPokemonListPage',
    async (_, thunkAPI) => {
        const { rejectWithValue, getState, dispatch } = thunkAPI
        try {
            const inited = getPokemonListInited(getState())
            if (!inited) {
                dispatch(pokemonListActions.initState())
                dispatch(fetchPokemonList({ page: 1 }))
            }
        } catch (e) {
            return rejectWithValue(i18n.t('error'))
        }
    })

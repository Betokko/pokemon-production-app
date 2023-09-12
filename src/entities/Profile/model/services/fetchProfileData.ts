import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IProfile } from '../types/profile'

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
    'profiles/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
            const res = await extra.api.get<IProfile>(`/profile/${profileId}`)
            return res.data
        } catch (e) {
            console.error(e)
            return rejectWithValue(i18n.t('error'))
        }
    })

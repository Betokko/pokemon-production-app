import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IProfile } from '../types/profile'
import { getProfileForm } from '../selectors/profileSelectors'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI
        const formData = getProfileForm(getState())
        try {
            const res = await extra.api.put<IProfile>('/profile', formData)
            return res.data
        } catch (e) {
            console.error(e)
            return rejectWithValue(i18n.t('error'))
        }
    })

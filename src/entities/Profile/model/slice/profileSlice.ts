import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile, IProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'

const initialState: IProfileSchema = {
    readOnly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, { payload }: PayloadAction<boolean>) => {
            state.readOnly = payload
        },
        updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
            state.form = { ...state.form, ...payload }
        },
        cancelEdit: (state) => {
            state.readOnly = true
            state.form = state.data
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
                state.isLoading = false
                state.data = payload
                state.form = payload
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.error = payload
                state.isLoading = false
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
                state.isLoading = false
                state.data = payload
                state.form = payload
                state.readOnly = true
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.error = payload
                state.isLoading = false
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

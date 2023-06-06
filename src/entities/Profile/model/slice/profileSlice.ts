import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile, IProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: IProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }: PayloadAction<IProfile>) => {
                state.isLoading = false
                state.data = payload
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.error = payload
                state.isLoading = false
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

import { createSlice } from '@reduxjs/toolkit'
import { IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

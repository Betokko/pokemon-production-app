import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAddCommentFormSchema } from '../types/addCommentForm'

const initialState: IAddCommentFormSchema = {
    text: '',
    error: ''
}

export const addCommentForm = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, { payload }: PayloadAction<string>) => {
            state.text = payload
        }
    }
    // extraReducers: builder => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(loginByUsername.fulfilled, (state, { payload }) => {
    //             state.isLoading = false
    //         })
    //         .addCase(loginByUsername.rejected, (state, { payload }) => {
    //             state.error = payload
    //             state.isLoading = false
    //         })
    // }
})

export const { actions: addCommentFormActions } = addCommentForm
export const { reducer: addCommentFormReducer } = addCommentForm

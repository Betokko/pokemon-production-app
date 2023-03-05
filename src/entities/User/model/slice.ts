import { createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from './types';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {},
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;

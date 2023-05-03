import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
interface ILoginByUsername {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.post<IUser>('http://localhost:8080/login', { username, password })
            if (!res.data) throw new Error()
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
            dispatch(userActions.setAuthData(res.data))
            return res.data
        } catch (e) {
            console.error(e)
            return rejectWithValue(i18n.t('login or password is incorrect'))
        }
    })

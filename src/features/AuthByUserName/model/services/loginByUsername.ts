import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { IThunkConfig } from 'app/providers/StoreProvider'
interface ILoginByUsername {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, IThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI
        try {
            const res = await extra.api.post<IUser>('/login', { username, password })
            if (!res.data) throw new Error()
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
            dispatch(userActions.setAuthData(res.data))
            extra?.navigate && extra.navigate('/profile')
            return res.data
        } catch (e) {
            console.error(e)
            return rejectWithValue(i18n.t('login or password is incorrect'))
        }
    })

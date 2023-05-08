import { DeepPartial } from '@reduxjs/toolkit'
import { ILoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: 'admin' }
        expect(loginReducer(state, loginActions.setUsername('Pikachu'))).toEqual({ username: 'Pikachu' })
    })
    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: 'admin' }
        expect(loginReducer(state, loginActions.setPassword('qwerty'))).toEqual({ password: 'qwerty' })
    })
})

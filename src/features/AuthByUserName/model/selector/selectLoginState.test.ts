import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
    selectLoginState
} from './selectLoginState'

describe('selectLoginState', () => {
    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(selectLoginState(state as IStateSchema)).toEqual(undefined)
    })
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            login: {
                error: 'error'
            }
        }
        expect(getLoginError(state as IStateSchema)).toEqual('error')
    })
    test('should return true', () => {
        const state: DeepPartial<IStateSchema> = {
            login: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as IStateSchema)).toEqual(true)
    })
    test('should return password', () => {
        const state: DeepPartial<IStateSchema> = {
            login: {
                password: '12345'
            }
        }
        expect(getLoginPassword(state as IStateSchema)).toEqual('12345')
    })
    test('should return username', () => {
        const state: DeepPartial<IStateSchema> = {
            login: {
                username: 'admin'
            }
        }
        expect(getLoginUsername(state as IStateSchema)).toEqual('admin')
    })
})

import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { Dispatch } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk'

jest.mock('axios')

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch
    // let getState: () => IStateSchema
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    //
    // test('loginByUsername 404', async () => {
    //     const userValue = { username: 'admin', id: '1' }
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    //     const action = loginByUsername({ username: 'admin', password: 'admin' })
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toBe(userValue)
    // })
    //
    // test('loginByUsername 403', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    //     const action = loginByUsername({ username: 'admin', password: 'admin' })
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toBe('login or password is incorrect')
    // })

    test('loginByUsername 404', async () => {
        const userValue = { username: 'admin', id: '1' }
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userValue)
    })

    test('loginByUsername 403', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('login or password is incorrect')
    })
})

import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const selectLoginState = (state: IStateSchema) => state?.login
export const getLoginUsername = (state: IStateSchema) => state?.login?.username ?? ''
export const getLoginPassword = (state: IStateSchema) => state?.login?.password ?? ''
export const getLoginIsLoading = (state: IStateSchema) => state?.login?.isLoading ?? false
export const getLoginError = (state: IStateSchema) => state?.login?.error ?? ''

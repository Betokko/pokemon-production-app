import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getUserAuthData = (state: IStateSchema) => state.user.authData

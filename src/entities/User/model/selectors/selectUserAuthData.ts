import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const selectUserAuthData = (state: IStateSchema) => state.user.authData

import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const selectLoginState = (state: IStateSchema) => state?.login

import { IUserSchema } from 'entities/User'
import { ILoginSchema } from 'features/AuthByUserName/model/types/loginSchema'

export interface IStateSchema {
    user: IUserSchema
    login: ILoginSchema
}

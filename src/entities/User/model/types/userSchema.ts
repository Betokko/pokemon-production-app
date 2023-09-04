export interface IUser {
    id: string
    username: string
    placeholder?: string
}

export interface IUserSchema {
    authData?: IUser
    _mounted?: boolean
}

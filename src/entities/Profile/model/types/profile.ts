import { Currency } from 'shared/const/common'

export interface IProfile {
    'firstname': string
    'lastname': string
    'age': number
    'currency': Currency
    'country': string
    'city': string
    'username': string
    'avatar': string
}

export interface IProfileSchema {
    data?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
}

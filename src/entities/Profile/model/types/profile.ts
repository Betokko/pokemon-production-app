import { Currency } from 'entities/Currency/model/types/currency'

export interface IProfile {
    'id'?: string
    'firstname'?: string
    'lastname'?: string
    'age'?: number
    'currency'?: Currency
    'country'?: string
    'city'?: string
    'username'?: string
    'placeholder'?: string
}

export interface IProfileSchema {
    data?: IProfile
    form?: IProfile
    isLoading: boolean
    error?: string
    readOnly: boolean
}

import { IStateSchema } from 'app/providers/StoreProvider'

export const getProfileData = (state: IStateSchema) => state.profile?.data
export const getProfileForm = (state: IStateSchema) => state.profile?.form
export const getProfileError = (state: IStateSchema) => state.profile?.error
export const getProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading
export const getProfileReadOnly = (state: IStateSchema) => state.profile?.readOnly

import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'
import { useNavigate } from 'react-router-dom'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    className?: ReactNode
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
    asyncReducers
}) => {
    // при вызове useNavigate() ломается Storybook
    // const navigate = useNavigate()

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>
        // navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

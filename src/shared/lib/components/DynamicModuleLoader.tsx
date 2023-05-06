import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { IReduxStoreWithManager, IStateSchema } from 'app/providers/StoreProvider'
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer
}

type TTReducersListEntry = [TStateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: TReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props
    const store = useStore() as IReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        Object.entries(reducers).forEach(([name, reducer]: TTReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
            // @ts-ignore
                Object.entries(reducers).forEach(([name, reducer]: TTReducersListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return <>{children}</>
}

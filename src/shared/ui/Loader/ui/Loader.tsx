import { type FC } from 'react'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
    return (
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

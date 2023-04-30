import { FC } from 'react'
import { Loader } from 'shared/ui/Loader/ui/Loader'
import './Loader.scss'

interface FullscreenLoaderProps {
    className?: string
}

export const FullscreenLoader: FC<FullscreenLoaderProps> = (props) => {
    return (
        <div className="fullscreenLoader">
            <Loader />
        </div>
    )
}

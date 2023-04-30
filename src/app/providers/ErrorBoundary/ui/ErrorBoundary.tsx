import React, { Suspense, ErrorInfo, ReactNode } from 'react'
import { Error } from 'widgets/Error'

export interface IErrorBoundaryProps {
    children: ReactNode
}

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor (props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        if (error) return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback=''>
                    <Error/>
                </Suspense>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

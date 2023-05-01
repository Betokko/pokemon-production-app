import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary'
import 'shared/config/i18n/i18n'
import 'app/styles/index.scss'

render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root')
)

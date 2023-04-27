import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('toggle', () => {
        render(<Sidebar />)
        const toggleButton = screen.getByTestId('toggleButton')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
})

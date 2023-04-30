import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { ComponentRender } from 'shared/lib/test/ComponentRender'

describe('Sidebar', () => {
    test('toggle', () => {
        ComponentRender(<Sidebar />)
        const toggleButton = screen.getByTestId('toggleButton')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
})

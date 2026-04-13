import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contador } from './Contador'

describe('Contador', () => {
   it('Renderiza o componente com valor inicial igual a 0', () => {
    render(<Contador />)
    expect(screen.getByText('Contador: 0')).toBeInTheDocument
   }) 

   it('Incrementa o contador ao clicar no botão', async () => {
    render(<Contador />)
    await userEvent.click(screen.getByText('Incrementar'))
    expect(screen.getByText('Contador: 1')).toBeInTheDocument
   })
})
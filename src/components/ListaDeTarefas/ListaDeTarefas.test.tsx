// Faremos aqui nossos testes.

import { render, screen } from "@testing-library/react"
import { ListaDeTarefas } from "./ListaDeTarefas"
import "@testing-library/jest-dom"

describe("Componente de lista de tarefas", () => {
    it("Deve garantir que 'Nenhuma tarefa pendente' aparece se não houver tarefa", async () => {
        // 1. Ação -> Renderize o component passando um array [] na prop tarefas
        render(<ListaDeTarefas tarefas={[]} onExcluir={() => {}}/>)

        // 1.1 Validação -> Verifique se o texto "Nenhuma tarefa pendente!" está no documento
        const p = await screen.findByText("Nenhuma tarefa pendente!")
        expect(p).toBeInTheDocument()
        
        // 1.2 Validação -> Garantir que o número 0 não está sendo renderizado em tela
        const zero = screen.queryByText("0")
        expect(zero).toBeInTheDocument()
        //findByText -> queryByText
        //Ambas funções 1.1 e 1.2 só funcionaram depois de transformarem em assincronas
    });
})


// 2. Ação -> Renderize o componente passando um array com pelo menos 2 tarefas mockadas (ex: id 1 e id 2) e crie um mock para a prop onExcluir (jest.fn()). Não simule nenhum clique ainda.

// 2.1 Validação: Verifique se a função mockada onExcluir NÃO foi chamada nenhuma vez (not.toHaveBeenCalled()).


// 3. Ação ->  Após corrigir o bug do botão no arquivo ListaDeTarefas.jsx (transformando em uma arrow function), faça o teste renderizar a lista com 2 tarefas.
// 3.1 Ação do Usuário -> Use o userEvent.click para clicar no botão "Excluir" da primeira tarefa.
// 3.2 Validação -> Verifique se a função mockada onExcluir foi chamada exatamente 1 vez, e se ela recebeu como argumento o id correto da tarefa que você clicou (toHaveBeenCalledWith(idDaTarefa)).
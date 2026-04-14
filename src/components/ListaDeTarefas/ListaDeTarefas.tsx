interface ITarefa{
    id: string,
    titulo: string
}

interface IListaTarefa {
    tarefas: ITarefa[]
    onExcluir: (idTarefa: string) => void
}

export function ListaDeTarefas({ tarefas, onExcluir }: IListaTarefa) {
    return (
        <div>
            <h2>Minhas Tarefas</h2>
            {tarefas.length && (
                <ul>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id}>
                            <span>{tarefa.titulo}</span>
                            <button onClick={() => onExcluir(tarefa.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}
            
            {tarefas.length === 0 && (
                <p>Nenhuma tarefa pendente!</p>
            )}
        </div>
    )
}
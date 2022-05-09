import { ITask } from '../../types/ITasks';
import Item from './item';
import style from './List.module.scss';

interface Props{
	Tasks: ITask[];
	selecionaTarefa: (tarefaSelecionada: ITask) => void
}

function List({ Tasks, selecionaTarefa }: Props){
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {Tasks.map((item) =>(
                    <Item
												selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;
import { ITask } from '../../../types/ITasks';
import style from './Item.module.scss';

interface Props extends ITask{
	selecionaTarefa: (tarefaSelecionada: ITask) => void
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  finalizado,
  id,
	selecionaTarefa
}: Props) {
	  return (
    <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} 
		${finalizado ? style.itemCompletado : ''}`}
		 onClick={() => !finalizado && selecionaTarefa({
			tarefa,
			tempo,
			finalizado,
			selecionado,
			id
		})}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
			{finalizado && <span className={style.concluido} aria-Label="finalizado"></span>} 
    </li>
  )
}

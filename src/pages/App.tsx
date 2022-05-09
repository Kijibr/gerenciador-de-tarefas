import React, {useState } from 'react';
import Form from '../components/forms';
import List from '../components/list';
import Timer from '../components/timer';
import { ITask } from '../types/ITasks';
import styles from './App.module.scss';

function App() {
  const [Tasks, setTasks] = useState<ITask[]>([]);
	const [selecionado, setSelecionado] = useState<ITask>();

	function selecionaTarefa(tarefaSelecionada: ITask){
		setSelecionado(tarefaSelecionada);
		
		setTasks(tarefasAntigas => tarefasAntigas.map(tarefa => ({
			...tarefa,
			selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
			
		})));
	}

	function finalizarTarefa(){
		setSelecionado(undefined);
		if(selecionado){
			setTasks(tarefasAntigas => tarefasAntigas.map(tarefa => {
				if(tarefa.id === selecionado.id){
					return {
						...tarefa,
						selecionado: false,
						finalizado: true,
					}
				}
				return tarefa;
			}));
		}
	}

  return (
    <div className={styles.AppStyle}>
      <Form setTasks = {setTasks} />
      <List 
				Tasks={Tasks}
				selecionaTarefa={selecionaTarefa}/>
      <Timer
				selecionado={selecionado}
				finalizarTarefa={finalizarTarefa}
			/>
    </div>
  );
}

export default App;

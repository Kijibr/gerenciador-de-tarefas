import React, { useState } from "react";
import { ITask } from "../../types/ITasks";
import Botao from "../buttons";
import style from "./Forms.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks((antigas) => [
      ...antigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        finalizado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          id="tarefa"
          placeholder="O que você precisa estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          id="tempo"
          min="00:00"
          max="01:30"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
export default Form;

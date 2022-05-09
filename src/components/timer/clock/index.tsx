import { isNullishCoalesce } from 'typescript';
import style from './Clock.module.scss';

interface Props{
	tempo: number | undefined;
}

export default function Clock({ tempo = 0 } : Props) {
	const minutes = Math.floor(tempo / 60);
	const seconds = tempo % 60;
	const [minutoDezena, minutoUnidade] = String(minutes).padStart(2, '0');
	const [segundoDezena, segundoUnidade] = String(seconds).padStart(2, '0');

	return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}
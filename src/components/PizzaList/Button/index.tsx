import Icon from '@components/shared/Icon';
import { type ReactElement } from 'react';
import style from './styles.module.scss';

export default function Button(): ReactElement {
  return (
    <button className={style.button}>
      <Icon id="plus" className={style.icon} />
      <span className={style.title}>Добавить</span>
      <span className={style.count}>2</span>
    </button>
  );
}

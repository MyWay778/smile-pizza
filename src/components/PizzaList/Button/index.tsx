import Icon from '@/components/shared/Icon';
import { type ReactElement } from 'react';
import style from './styles.module.scss';
import cn from 'classnames';

interface ButtonProps {
  count: number;
  onClick?: () => void;
}

export default function Button({ count, onClick }: ButtonProps): ReactElement {
  return (
    <button className={cn(style.button, { [style.active]: count > 0 })} onClick={onClick}>
      <Icon id="plus" className={style.icon} />
      <span className={style.title}>Добавить</span>
      {count > 0 && <span className={style.count}>{count}</span>}
    </button>
  );
}

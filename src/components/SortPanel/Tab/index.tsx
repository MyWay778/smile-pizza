import { type ReactElement } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface SortTabProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tab({ text, active, onClick }: SortTabProps): ReactElement {
  return (
    <div className={cn(styles.tab, { [styles.active]: active })} onClick={onClick}>
      {text}
    </div>
  );
}

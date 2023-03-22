import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface OptionRowProps {
  options: Array<{
    title: string;
    value?: string | number;
    active?: boolean;
    disabled?: boolean;
  }>;
  active?: string | number;
}

export default function OptionRow({ options, active }: OptionRowProps): ReactElement {
  return (
    <div className={styles.row}>
      {options.map((o) => (
        <button key={o.title} className={cn(styles.button, { [styles.active]: active === o.value })}>
          {o.title}
        </button>
      ))}
    </div>
  );
}

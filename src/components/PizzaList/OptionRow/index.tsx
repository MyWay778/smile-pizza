import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { type IOption } from './typings';

interface OptionRowProps {
  options: IOption[];
  onClick?: (active: string | number) => void;
}

export default function OptionRow({ options, onClick }: OptionRowProps): ReactElement {
  return (
    <div className={styles.row}>
      {options.map((option) => (
        <button
          key={option.title}
          className={cn(styles.button, { [styles.active]: option.active })}
          onClick={() => {
            onClick?.(option.value);
          }}
          disabled={option.disabled}>
          {option.title}
        </button>
      ))}
    </div>
  );
}

import Icon from '@/components/shared/Icon';
import { type SyntheticEvent, useState, type ReactElement, useCallback } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

interface SelectProps {
  className?: string;
  options: string[];
  active?: number;
}

export default function Select({ className, options, active = 0 }: SelectProps): ReactElement {
  const [activeIdx, setActiveIdx] = useState(active);
  const [isOpened, setIsOpened] = useState(false);

  const openList = (): void => {
    setIsOpened(true);
    setTimeout(() => {
      window.addEventListener('click', closeList);
    }, 0);
  };

  const closeList = useCallback((): void => {
    setIsOpened(false);
    window.removeEventListener('click', closeList);
  }, []);

  const mainClickHandler = (): void => {
    if (isOpened) return;

    openList();
  };

  const listClickHandler = (active: number) => {
    return (event: SyntheticEvent) => {
      event.stopPropagation();
      setActiveIdx(active);
      closeList();
    };
  };

  return (
    <div className={cn(styles.select, { [styles.opened]: isOpened }, className)} data-testid="select">
      <div className={styles.main} onClick={mainClickHandler} data-testid="label">
        <Icon className={styles.icon} id="arrow" />
        <span>Сортировка по:</span>
        <span className={styles.value}>{options[activeIdx]}</span>
      </div>
      <ul className={styles.list} data-testid="list">
        {options.map((option, index) => (
          <li
            key={option}
            className={cn(styles.item, { [styles.active]: index === activeIdx })}
            onClick={listClickHandler(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

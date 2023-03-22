import { useState, type ReactElement } from 'react';
import Tab from '../Tab';
import styles from './styles.module.scss';

interface TabListProps {
  tabs: string[];
  active?: number;
  onClick?: (active: number) => void;
}

export default function TabList({ tabs, onClick, active = 0 }: TabListProps): ReactElement {
  const [activeIdx, setActiveIdx] = useState(active);

  const clickHandler = (active: number) => {
    return () => {
      if (active === activeIdx) return;

      if (onClick != null) {
        onClick(active);
      }
      setActiveIdx(active);
    };
  };

  return (
    <div className={styles.list}>
      {tabs.map((tab, i) => (
        <Tab key={tab} text={tab} active={i === activeIdx} onClick={clickHandler(i)} />
      ))}
    </div>
  );
}

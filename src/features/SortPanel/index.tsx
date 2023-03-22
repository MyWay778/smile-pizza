import Select from '@components/SortPanel/Select';
import TabList from '@components/SortPanel/TabList';
import { type ReactElement } from 'react';
import styles from './styles.module.scss';

const tabs = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sort = ['популярности', 'по цене', 'по алфавиту'];

export default function SortPanel(): ReactElement {
  const clickTabHandler = (active: number): void => {
    console.log('active tab:', tabs[active]);
  };

  return (
    <div className={styles.sortPanel}>
      <TabList tabs={tabs} onClick={clickTabHandler} />
      <Select className={styles.select} options={sort} />
    </div>
  );
}

import Title from '@components/Title';
import SortPanel from '@features/SortPanel';
import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import List from '@features/PizzaList';

export default function PizzaList(): ReactElement {
  return (
    <main className={styles.container}>
      <SortPanel />
      <Title className={styles.title}>Все пиццы</Title>
      <List />
    </main>
  );
}

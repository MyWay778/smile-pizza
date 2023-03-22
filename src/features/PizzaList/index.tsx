import Item from '@components/PizzaList/Item';
import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import pizzaData from '../../pizzas.json';

export default function PizzaList(): ReactElement {
  return (
    <ul className={styles.pizzaList}>
      {pizzaData.map((pizza) => (
        <Item key={pizza.id} image={pizza.imageUrl} />
      ))}
    </ul>
  );
}

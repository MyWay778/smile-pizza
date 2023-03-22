import Item from '@components/PizzaList/Item';
import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import pizzaData from '../../pizzas.json';
import normalizePizzaOptions from '@/helpers/normalizePizzaOptions';
import { pizzaTypes } from '@/constants/pizzaTypes';
import { pizzaSizes } from '@/constants/pizzaSizes';

export default function PizzaList(): ReactElement {
  return (
    <ul className={styles.pizzaList}>
      {pizzaData.map((pizza) => (
        <Item
          key={pizza.id}
          image={pizza.imageUrl}
          title={pizza.title}
          price={pizza.price}
          types={normalizePizzaOptions(pizzaTypes, pizza.types)}
          sizes={normalizePizzaOptions(pizzaSizes, pizza.sizes)}
        />
      ))}
    </ul>
  );
}

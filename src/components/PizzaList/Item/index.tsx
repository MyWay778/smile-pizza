import { type ReactElement } from 'react';
import Options from '../Options';
import styles from './styles.module.scss';
import Button from '../Button';

interface ItemProps {
  image: string;
}

export default function Item({ image }: ItemProps): ReactElement {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={image} alt="pizza image" />
      <h4 className={styles.title}>Чизбургер-пицца</h4>
      <Options />
      <div className={styles.footer}>
        <div className={styles.price}>от 395 ₽</div>
        <Button />
      </div>
    </li>
  );
}

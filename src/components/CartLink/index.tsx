import { type ReactElement } from 'react';
import styles from './styles.module.scss';
import Icon from '../shared/Icon';
import { Link } from 'react-router-dom';

interface CartLinkProps {
  to: string;
  price: number;
  count: number;
}

export default function CartLink({ to, price, count }: CartLinkProps): ReactElement {
  return (
    <Link to={to} className={styles.link}>
      <span data-testid="price">{price} ₽</span>
      <div className={styles.delimiter}></div>
      <div className={styles.countWrapper}>
        <Icon className={styles.icon} id="cart" />
        {count !== 0 && (
          <span className={styles.count} data-testid="count">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}

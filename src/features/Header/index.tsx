import { type ReactElement } from 'react';
import logoImg from '@/assets/images/pizza-logo.png';
import CartLink from '@/components/CartLink';
import styles from './styles.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img width="38" height="38" src={logoImg} alt="Pizza logo" />
          <div>
            <h1>Smile Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={styles.cart}>
          <CartLink to="cart" price={520} count={3} />
        </div>
      </div>
    </header>
  );
}

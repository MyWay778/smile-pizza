import Icon from '@components/shared/Icon';
import Title from '@components/Title';
import { type ReactElement } from 'react';

export default function Cart(): ReactElement {
  return (
    <main>
      <section>
        <div>
          <Icon id="cart" />
          <Title>Корзина</Title>
        </div>
        <button>
          <Icon id="trash" />
          <span>Очистить корзину</span>
        </button>
      </section>
    </main>
  );
}

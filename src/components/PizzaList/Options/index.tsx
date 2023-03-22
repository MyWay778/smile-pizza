import { type ReactElement } from 'react';
import OptionRow from '../OptionRow';
import styles from './styles.module.scss';

const options1 = [
  { title: 'тонкое', value: 'thin' },
  { title: 'традиционное', value: 'fat' }
];
const options2 = [{ title: '26 см.' }, { title: '30 см.' }, { title: '40 см.' }];

export default function Options(): ReactElement {
  return (
    <div className={styles.options}>
      <OptionRow options={options1} active={options1[0].value} />
      <OptionRow options={options2} />
    </div>
  );
}

import { type ReactNode, type ReactElement } from 'react';
// import OptionRow from '../OptionRow';
import styles from './styles.module.scss';

interface OptionsProps {
  children: ReactNode | ReactNode[];
}

export default function Options({ children }: OptionsProps): ReactElement {
  // const pizzaBaseHandler = (value: string | number): void => {
  //   options1.forEach((option) => {
  //     if (option.value === value) {
  //       if (option.active != null && !option.active) {
  //         option.active = true;
  //       }
  //     } else {
  //       option.active = false;
  //     }
  //   });
  // };

  return <div className={styles.options}>{children}</div>;
}

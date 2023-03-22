import { type ReactNode, type ReactElement } from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: ReactNode | ReactNode[];
}

export default function Button({ children }: ButtonProps): ReactElement {
  return <button className={styles.button}>{children}</button>;
}

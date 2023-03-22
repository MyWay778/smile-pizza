import { type ReactNode, type ReactElement } from 'react';
import styles from './styles.modules.scss';
import cn from 'classnames';

interface TitleProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

export default function Title({ children, className }: TitleProps): ReactElement {
  return <h3 className={cn(styles.title, className)}>{children}</h3>;
}

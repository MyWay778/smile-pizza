import { type ReactElement } from 'react';

interface IconProps {
  id: string;
  className?: string;
}

const spriteUrl = 'assets/sprite.svg';
const version = 1;
const prefix = 'icon';

export default function Icon({ id, className }: IconProps): ReactElement {
  return (
    <svg className={className}>
      <use xlinkHref={`${spriteUrl}?${version}#${prefix}-${id}`}></use>
    </svg>
  );
}

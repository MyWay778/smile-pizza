/* eslint-disable no-unreachable */
import { useState, type ReactElement } from 'react';
import styles from './styles.module.scss';
import Button from '../Button';
import OptionRow from '../OptionRow';
import { type TOptionValue, type IOption } from '../OptionRow/typings';
import ItemLoader from '../ItemLoader';

interface ItemProps {
  image: string;
  title: string;
  price: number;
  types: IOption[];
  sizes: IOption[];
  loading?: boolean;
  onChangeType?: (value: TOptionValue) => void;
}

export default function Item({
  image,
  title,
  price,
  types,
  sizes,
  loading,
  onChangeType
}: ItemProps): ReactElement {
  const [localTypes, setLocalTypes] = useState(types);
  const [localSizes, setLocalSizes] = useState(sizes);

  const changeOptionsCreator = (setter: React.Dispatch<React.SetStateAction<IOption[]>>) => {
    return (value: TOptionValue): void => {
      setter((options) =>
        options.map((option) => {
          if (option.value === value) {
            option.active = true;
          } else {
            option.active = false;
          }

          return option;
        })
      );
    };
  };

  const changeTypeHandler = changeOptionsCreator(setLocalTypes);
  const changeSizeHandler = changeOptionsCreator(setLocalSizes);

  if (loading === true) {
    return <ItemLoader />;
  } else {
    return (
      <li className={styles.item}>
        <img className={styles.image} src={image} alt="pizza image" />
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.options}>
          <OptionRow options={localTypes} onClick={changeTypeHandler} />
          <OptionRow options={localSizes} onClick={changeSizeHandler} />
        </div>

        <div className={styles.footer}>
          <div className={styles.price}>от {price} ₽</div>
          <Button count={1} />
        </div>
      </li>
    );
  }
}

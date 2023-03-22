import { type IOption } from '@/components/PizzaList/OptionRow/typings';
import { type pizzaSizes } from '@/constants/pizzaSizes';
import { type pizzaTypes } from '@/constants/pizzaTypes';

type AllOptionsType = typeof pizzaTypes | typeof pizzaSizes;

export default function normalizePizzaOptions(allOptions: AllOptionsType, availableOptions: number[]): IOption[] {
  let activeIdxDefault = 0;

  return Object.entries(allOptions).map(([id, title], idx) => {
    const disabled = !availableOptions.includes(Number(id));

    let active = false;
    if (activeIdxDefault === idx) {
      if (!disabled) {
        active = true;
      } else {
        activeIdxDefault += 1;
      }
    }

    return { title, value: id, active, disabled };
  });
}

export interface IOption {
  title: string;
  value: TOptionValue;
  active?: boolean;
  disabled?: boolean;
}

export type TOptionValue = string | number;

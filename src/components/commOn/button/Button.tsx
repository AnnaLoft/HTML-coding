import React from 'react';
import s from './Button.module.css';

type PropsT = {
  value: string
  action: () => void | null
};

const Button: React.FC<PropsT> = ({ value, action }: PropsT) => (
  <button type="button" className={s.btn} onClick={action}>{value}</button>
);

export default Button;

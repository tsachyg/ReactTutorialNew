import * as React from 'react';
import * as css from 'index.scss';

export default function Square(props: SquareProps) {
  return (
    <button
      className={css.square}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}
import React from 'react';

type Props = {
  x: number;
  y: number;
  state: boolean;
  handler: (x: number, y: number) => void;
};

const Cell = React.memo((props: Props) => {
  const { x, y, state, handler } = props;

  return (
    <input
      type='button'
      className={state ? 'alive' : 'dead'}
      onClick={() => handler(x, y)} />
  );
});
export { Cell };
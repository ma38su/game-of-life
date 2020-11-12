import React from 'react';
import { Cell } from './Cell';

type Props = {
  y: number;
  states: boolean[];
  handler: (x: number, y: number) => void;
};

const Row = React.memo((props: Props) => {
  const {
    y,
    states,
    handler
  } = props;

  return (
    <div className='row'>
    {
      states.map((state, x) => (
        <Cell
          key={x}
          x={x}
          y={y}
          state={state}
          handler={handler}
          />
      ))
    }
  </div>);
});
export { Row };
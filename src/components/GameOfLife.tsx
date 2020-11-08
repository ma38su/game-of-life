import React from 'react';
import { Cell } from './Cell';

const nextArray = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1]
];

function index(i: number, length: number) {
  if (i < 0) {
    return length - 1;
  } else if (i >= length) {
    return 0;
  }
  return i;
}

function nextState(states: boolean[][], x: number, y: number) {
  const state = states[y][x];

  const lives: number = nextArray.map(next => {
    const ny = index(y + next[1], states.length);
    const nx = index(x + next[0], states[ny].length);
    return (states[ny][nx] ? 1 : 0) as number;
  }).reduce((prev, current) => prev + current);
  if (lives === 3) {
    return true;
  } else if (lives === 2 && state) {
    return true;
  }
  return false;
}

function generateState(width: number, height: number, rate: number) {
  const table: boolean[][] = [];
  for (let y = 0; y < height; ++y) {
    const array: boolean[] = [];
    for (let x = 0; x < width; ++x) {
      array.push(Math.random() <= rate ? true : false);
    }
    table.push(array);
  }
  return table;
}

type Props = {
  width: number;
  height: number;
  cellsize: number;
  rate: number;
};

function GameOfLife(props: Props) {
  const {
    width, height,
    cellsize,
    rate
  } = props;

  const [states, setState] = React.useState(generateState(width, height, rate));

  React.useEffect(() => {
    const id = setInterval(() => {
      setState(states => {
        const newState = states.map((array, y) => {
          return array.map((_, x) => nextState(states, x, y));
        });
        return newState;
      });
    }, 10);
    return () => clearInterval(id);
  }, [states]);

  return (
    <svg>
    {
      states.map((array, y) => {
        return array.map((state, x) => (
          <Cell x={x * cellsize} y={y * cellsize} size={cellsize} state={state} /> 
        ))
      })
    }
    </svg>
  );
}
export { GameOfLife };
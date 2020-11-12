import React from 'react';
import { Row } from './Row';

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

function nextStates(states: boolean[][]) {
  return states.map((array, y) => {
    return array.map((_, x) => nextState(states, x, y));
  });
}

function opt(prev: boolean[][], next: boolean[][]) {
  return prev.map((prevAry, y) => {
    const nextAry = next[y];
    if (prevAry.filter((v, x) => v !== nextAry[x])) {
      return nextAry;
    } else {
      return prevAry;
    }
  });
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
  rate: number;
};

function GameOfLife(props: Props) {
  const {
    width, height,
    rate
  } = props;

  const [stop, setStop] = React.useState(true);
  const [states, setState] = React.useState(generateState(width, height, rate));

  const handlerClickCell = React.useCallback((x, y) => {
    setState(states => {
      const newStates = [...states];
      const newRow = [...newStates[y]];
      newRow[x] = !newRow[x];
      newStates[y] = newRow;
      return newStates;
    })
  }, []);

  React.useEffect(() => {
    if (stop) return;
    const id = setInterval(() => {
      setState(states => {
        const next = nextStates(states);
        return opt(states, next);
      });
    }, 10);
    return () => clearInterval(id);
  }, [states, stop]);

  const handlerStop = React.useCallback(() => {
    setStop(prev => !prev);
  }, []);

  return (
    <>
    <input
      className='ctrl'
      type='button'
      value={stop ? 'Start' : 'Stop'}
      onClick={handlerStop} />
    {
      states.map((array, y) => (
        <Row
          key={y}
          states={array}
          y={y}
          handler={handlerClickCell}
          />
      ))
    }

    </>
  );
}
export { GameOfLife };
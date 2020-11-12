import React from 'react';
import { Row } from './Row';
import { GliderGuns } from '../data/GliderGuns';

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

function periodicState(states: boolean[][], x: number, y: number) {
  const ny = index(y, states.length);
  const nx = index(x, states[ny].length);
  return (states[ny][nx] ? 1 : 0) as number;
}

function boundDeadState(states: boolean[][], x: number, y: number) {
  if (y < 0 || y >= states.length) return 0;
  if (x < 0 || x >= states[y].length) return 0;
  return (states[y][x] ? 1 : 0) as number;
}

function index(i: number, length: number) {
  if (i < 0) {
    return length - 1;
  } else if (i >= length) {
    return 0;
  }
  return i;
}

function nextState(states: boolean[][], x: number, y: number, boundary: BoundaryType) {
  const state = states[y][x];

  const lives: number = nextArray.map(next => {
    const nx = x + next[0];
    const ny = y + next[1];
    if (boundary === 'dead') {
      return boundDeadState(states, nx, ny);
    } else {
      return periodicState(states, nx, ny);
    }
  }).reduce((prev, current) => prev + current);
  if (lives === 3) {
    return true;
  } else if (lives === 2 && state) {
    return true;
  }
  return false;
}

function nextStates(states: boolean[][], boundary: BoundaryType) {
  return states.map((array, y) => {
    return array.map((_, x) => nextState(states, x, y, boundary));
  });
}

function opt(prev: boolean[][], next: boolean[][]) {
  return prev.map((prevAry, y) => {
    if (y >= next.length) return prevAry.map(_ => false);

    const nextAry = next[y];
    if (prevAry.length > nextAry.length) {
      const newAry = [...nextAry];
      for (let i = newAry.length; i < prevAry.length; ++i) {
        newAry.push(false);
      }
      return newAry;
    }
    if (prevAry.filter((v, x) => x < nextAry.length && v !== nextAry[x])) {
      return nextAry;
    } else {
      return prevAry;
    }
  })
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

type BoundaryType = 'dead' | 'periodic';

function GameOfLife(props: Props) {
  const {
    width, height,
    rate
  } = props;

  const [stop, setStop] = React.useState(true);
  const [boundary, setBoundary] = React.useState<BoundaryType>('dead');
  const [states, setState] = React.useState(generateState(width, height, rate));

  React.useEffect(() => {
    if (stop) return;
    const id = setInterval(() => {
      setState(states => {
        const next = nextStates(states, boundary);
        return opt(states, next);
      });
    }, 10);
    return () => clearInterval(id);
  }, [states, stop, boundary]);

  const handleClickCell = React.useCallback((x, y) => {
    setState(states => {
      const newStates = [...states];
      const newRow = [...newStates[y]];
      newRow[x] = !newRow[x];
      newStates[y] = newRow;
      return newStates;
    })
  }, []);

  const handleStop = React.useCallback(() => {
    setStop(prev => !prev);
  }, []);

  const handleReadData = React.useCallback((lines) => {
    setState(states => {
      const table: boolean[][] = [];
      for (const line of lines) {
        const ary: boolean[] = [];
        for (let i = 0; i < line.length; ++i) {
          const s = i < line.length && line.charAt(i) === '■';
          ary.push(s);
        }
        table.push(ary);
      }
      return opt(states, table);
    })
  }, []);

  const handleSwitchBoundary = React.useCallback(() => {
    setBoundary(prev => {
      if (prev === 'dead') return 'periodic';
      return 'dead';
    });
  }, []);

  return (
    <>
    <input
      className='ctrl'
      type='button'
      value={stop ? 'Start' : 'Stop'}
      onClick={handleStop} />
    {
      GliderGuns.map((gun, i) => (
        <input
          className='ctrl'
          type='button'
          value={`Glider Gun ${i + 1}`}
          onClick={() => handleReadData(gun)} />
      ))
    }
    <input
      className='ctrl'
      type='button'
      value={`Boundary: ${boundary}`}
      onClick={handleSwitchBoundary} />
    {
      states.map((array, y) => (
        <Row
          key={y}
          states={array}
          y={y}
          handler={handleClickCell}
          />
      ))
    }
    </>
  );
}
export { GameOfLife };
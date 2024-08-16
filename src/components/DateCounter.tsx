import { useReducer } from 'react';
type Action = {
  type: 'inc' | 'dec' | 'setCount' | 'setStep' | 'reset';
  payload?: number;
};

interface State {
  count: number;
  step: number;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload ?? state.count };
    case 'setStep':
      return { ...state, step: action.payload ?? state.step };
    case 'reset':
      return { count: 0, step: 1 };
    default:
      throw new Error('Unknown Action');
  }
}

function DateCounter() {
  const initialState: State = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  function dec(): void {
    dispatch({ type: 'dec' });
  }

  function inc(): void {
    dispatch({ type: 'inc' });
  }

  function defineCount(e: React.ChangeEvent<HTMLInputElement>): void {
    const newCount = Number(e.target.value);
    dispatch({ type: 'setCount', payload: newCount });
  }

  function defineStep(e: React.ChangeEvent<HTMLInputElement>): void {
    const newStep = Number(e.target.value);
    dispatch({ type: 'setStep', payload: newStep });
  }

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

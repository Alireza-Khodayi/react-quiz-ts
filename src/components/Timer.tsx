import { Dispatch, useEffect } from 'react';
import { Actions } from '../@Types';
interface IProps {
  dispatch: Dispatch<Actions>;
  secondsRemaining: number | null;
}
function Timer({ dispatch, secondsRemaining }: IProps) {
  const mins = Math.floor(secondsRemaining! / 60);
  const seconds = secondsRemaining! % 60;
  useEffect(
    function () {
      const timer = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(timer);
    },
    [dispatch],
  );
  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;

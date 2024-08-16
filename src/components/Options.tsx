import { Dispatch } from 'react';
import { Actions } from '../@Types';

interface IProps {
  dispatch: Dispatch<Actions>;
  options: string[];
  correctOption: number;
  answer: null | number;
}
function Options({ options, correctOption, dispatch, answer }: IProps) {
  function onSelectAnswer(index: number) {
    dispatch({ type: 'newAnswer', payload: index });
  }
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => onSelectAnswer(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

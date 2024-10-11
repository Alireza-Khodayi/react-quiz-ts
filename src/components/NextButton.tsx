import { Dispatch } from 'react';
import { Actions } from '../@Types';

interface IProps {
  dispatch: Dispatch<Actions>;
  answer: number | null;
  index: number;
  numberOfQuestions: number;
}
function NextButton({ dispatch, answer, index, numberOfQuestions }: IProps) {
  if (answer === null) return;
  if (index < numberOfQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );
  if (index === numberOfQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
}

export default NextButton;

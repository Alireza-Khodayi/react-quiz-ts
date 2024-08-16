import { Dispatch } from 'react';
import { Actions } from '../@Types';

interface IProps {
  numberOfQuestions: number;
  dispatch: Dispatch<Actions>;
}

function StartScreen({ numberOfQuestions, dispatch }: IProps) {
  function onStartQuiz() {
    dispatch({ type: 'start' });
  }

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React Mastery!</h3>
      <button className='btn btn-ui' onClick={onStartQuiz}>
        Let's Start!
      </button>
    </div>
  );
}

export default StartScreen;

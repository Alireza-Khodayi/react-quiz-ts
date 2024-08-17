import { Dispatch } from 'react';
import { Actions, IQuestion } from '../../@Types';
import { OptionButtons } from './OptionButtons';

interface IProps {
  question: IQuestion;
  dispatch: Dispatch<Actions>;
  answer: null | number;
}
function Question({ question, dispatch, answer }: IProps) {
  const { question: title, options, correctOption } = question;
  return (
    <div>
      <h4>{question.question}</h4>
      <OptionButtons
        key={title}
        correctOption={correctOption}
        options={options}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export { Question };

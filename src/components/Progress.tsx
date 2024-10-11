interface IProps {
  index: number;
  numberOfQuestions: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}
function Progress({
  index,
  numberOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}: IProps) {
  return (
    <header className='progress'>
      <progress
        max={numberOfQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

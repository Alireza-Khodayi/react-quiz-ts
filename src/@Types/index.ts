export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}
export interface State {
  questions: IQuestion[];
  status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
  index: number;
  answer: null | number;
  points: number;
  highscore: number;
  secondsRemaining: null | number;
}

export interface Actions {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

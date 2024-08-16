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
}

export interface Actions {
  type: string;
  payload?: any;
}

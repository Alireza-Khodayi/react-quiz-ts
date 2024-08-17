import { Meta, StoryObj } from '@storybook/react';
import { Question } from '../Question';
import { Actions, IQuestion } from '../../../@Types';
import { Dispatch } from 'react';

const meta = {
  title: 'Components/Question',
  component: Question,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: ['center'],
  },
  argTypes: {
    question: {
      control: 'object',
      description:
        'A simple question object containes "question","options","correctOption" and "point" properties',
    },

    answer: {
      control: { type: 'number', min: 0, max: 3 },
      description:
        'This will set answer state equal to selected answer index as number, Answer initialy will be null untill user click on one option',
    },

    dispatch: {
      description:
        'Dispatch function passed as props to set answer state equal to option index that clicked',
    },
  },
} satisfies Meta<typeof Question>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockDispatch: Dispatch<Actions> = action => {
  console.log('Dispatched action:', action);
};

const question: IQuestion = {
  question: 'Which is the most popular JavaScript framework?',
  options: ['Angular', 'React', 'Svelte', 'Vue'],
  correctOption: 1,
  points: 10,
};

export const Unanswered: Story = {
  args: { question, dispatch: mockDispatch, answer: null },
};

export const AnsweredCorrectly: Story = {
  args: { question, dispatch: mockDispatch, answer: 1 },
};

export const AnsweredIncorrectly: Story = {
  args: { question, dispatch: mockDispatch, answer: 2 },
};

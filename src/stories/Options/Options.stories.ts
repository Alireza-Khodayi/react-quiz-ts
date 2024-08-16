import { Dispatch } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Actions, IQuestion } from '../../@Types';
import Options from '../../components/Options';
import '../../index.css';

const meta = {
  title: 'Quiz/Options',
  component: Options,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: ['center', 'fullscreen'],
  },
  // tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
  },
} satisfies Meta<typeof Options>;
export default meta;

type Story = StoryObj<typeof meta>;

const mockDispatch: Dispatch<Actions> = action => {
  console.log('Dispatched action:', action);
};

const question: Omit<IQuestion, 'question' | 'points'> = {
  options: ['Angular', 'React', 'Svelte', 'Vue'],
  correctOption: 1,
};
const { correctOption, options } = question;

export const Unanswered: Story = {
  args: { correctOption, options, dispatch: mockDispatch, answer: null },
};
export const AnsweredCorrectly: Story = {
  args: {
    correctOption,
    options,
    dispatch: mockDispatch,
    answer: 1, // User selected the correct option },
  },
};
export const AnsweredIncorrectly: Story = {
  args: {
    correctOption,
    options,
    dispatch: mockDispatch,
    answer: 2, // User selected an incorrect option
  },
};

import { Dispatch } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Actions, IQuestion } from '../../../../@Types';
import { OptionButtons } from '../OptionButtons';

const meta = {
  title: 'Components/Question/OptionButtons',

  component: OptionButtons,

  parameters: {
    layout: ['center', 'fullscreen'],
  },

  argTypes: {
    options: {
      control: 'object',
      description:
        'An string[] containes answers ( 4 answers as default ) related to the questions of Quiz!',
    },

    correctOption: {
      control: { type: 'number', min: 0, max: 3 },
      description:
        'Index of correct answer as number ( 4 answers as default, min: 0 max: 3 )',
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
} satisfies Meta<typeof OptionButtons>;

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

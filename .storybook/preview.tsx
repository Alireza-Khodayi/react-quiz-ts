import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.light },
      current: 'dark',
    },

    docs: {
      theme: themes.dark,
    },

    options: {
      storySort: {
        order: ['Components', ['Question', ['OptionButtons']]],
      },

      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
      },
    },
  },
};

export default preview;

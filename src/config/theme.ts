import {
  createTheme,
  type MantineColorsTuple,
  type CSSVariablesResolver,
} from '@mantine/core';

const violet: MantineColorsTuple = [
  '#F5F3FF',
  '#EDE9FE',
  '#DDD6FE',
  '#C4B5FD',
  '#A78BFA',
  '#8B5CF6',
  '#7C3AED',
  '#6D28D9',
  '#5B21B6',
  '#4C1D95',
];

const pink: MantineColorsTuple = [
  '#FDF2F8',
  '#FCE7F3',
  '#FBCFE8',
  '#F9A8D4',
  '#F472B6',
  '#EC4899',
  '#DB2777',
  '#BE185D',
  '#9D174D',
  '#831843',
];

export const theme = createTheme({
  primaryColor: 'violet',
  colors: { violet, pink },
  fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-body': '#FAF5FF',
    '--mantine-color-default': '#FFFFFF',
    '--mantine-color-default-hover': '#F5F3FF',
    '--mantine-color-default-border': '#EDE9FE',
    '--mantine-color-text': '#1F2937',
    '--mantine-color-dimmed': '#6B7280',
    '--mantine-color-anchor': '#7C3AED',
  },
  dark: {
    '--mantine-color-body': '#1E1B2E',
    '--mantine-color-default': '#2C243C',
    '--mantine-color-default-hover': '#362D4A',
    '--mantine-color-default-border': '#3D3456',
    '--mantine-color-text': '#E5E7EB',
    '--mantine-color-dimmed': '#9CA3AF',
    '--mantine-color-anchor': '#A78BFA',
  },
});

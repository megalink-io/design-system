import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useParameter } from '@storybook/addons';
import { Theme } from '../src/components/core/layout';
import { ColorScheme } from '../src/context';
import { getDeviceColorScheme, getSearchParam } from '../src/helpers';
import theme from './theme';

// Add custom Storybook parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  docs: { theme, source: { type: 'code' } },
  options: {
    storySort: (a, b) => {
      // Get story categories
      const categoryOfA = a[1].kind.split('/')[0];
      const categoryOfB = b[1].kind.split('/')[0];

      // Sort story by category
      if (categoryOfA !== categoryOfB) {
        const order = ['Foundation', 'Components', 'Shared code', 'Megalink'];
        const indexA = order.indexOf(categoryOfA);
        const indexB = order.indexOf(categoryOfB);
        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      }

      // Foundation: Sort story by title
      if (categoryOfA === 'Foundations') {
        const order = ['Installation', 'Release notes', 'Typography', 'Colors', 'Icons'];
        const indexA = order.indexOf(a[1].kind.split('/')[1]);
        const indexB = order.indexOf(b[1].kind.split('/')[1]);
        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      }

      // Components: Sort story by component typ
      if (categoryOfA === 'Components') {
        const order = ['core', 'link-page', 'website'];
        const indexA = order.indexOf(a[1].kind.split('/')[1]);
        const indexB = order.indexOf(b[1].kind.split('/')[1]);
        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      }

      // Megalink: Sort story by title
      if (categoryOfA === 'Shared code') {
        const order = ['Hooks', 'Context', 'Helpers'];
        const indexA = order.indexOf(a[1].kind.split('/')[1]);
        const indexB = order.indexOf(b[1].kind.split('/')[1]);
        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      }

      // Megalink: Sort story by title
      if (categoryOfA === 'Megalink') {
        const order = ['Website', 'Privacy policy', 'Imprint'];
        const indexA = order.indexOf(a[1].kind.split('/')[1]);
        const indexB = order.indexOf(b[1].kind.split('/')[1]);
        if (indexA > indexB) return 1;
        if (indexA < indexB) return -1;
        return 0;
      }

      // Sort other story alphabetically
      return a[1].id.localeCompare(b[1].id, 'en', { numeric: true });
    },
  },
};

// Add custom Storybook global types
export const globalTypes = {
  theme: {
    name: 'Themes',
    description: 'Set the color scheme',
    defaultValue: getDeviceColorScheme(),
    toolbar: {
      icon: 'eye',
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '✨', title: 'Dark mode' },
      ],
    },
  },
};

// Create Router and Theme component
const RouterAndTheme = ({ children }) => (
  <BrowserRouter>
    <Theme>{children}</Theme>
  </BrowserRouter>
);

// Create color scheme switch component
const ColorSchemeSwitch = ({ theme }) => {
  const [colorScheme, setColorScheme] = useContext(ColorScheme);
  useEffect(() => {
    const viewMode = getSearchParam('viewMode');
    setColorScheme(viewMode === 'docs' ? getDeviceColorScheme() : theme);
  }, [theme]);
  return <></>;
};

// Add custom Storybook decorators
export const decorators = [
  (Story, { globals: { theme } }) => {
    const noPadding = useParameter('noPadding', false);
    const className = `sb-decorator${noPadding ? ' no-padding' : ''}`;
    return (
      <RouterAndTheme>
        <ColorSchemeSwitch theme={theme} />
        <div className={className}>
          <Story />
        </div>
      </RouterAndTheme>
    );
  },
];

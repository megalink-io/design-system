import React, { useContext, useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useParameter } from '@storybook/addons';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withContexts } from '@storybook/addon-contexts/react';
import { Theme as ThemeProvider } from '../src/components/core/layout';
import { ColorScheme } from '../src/context';
import { getDeviceColorScheme, getSearchParam } from '../src/helpers';
import theme from './theme';

// Customizing Storybook options
addParameters({
  options: {
    // Add custom theme
    theme,
    // Display main category headings in menu
    showRoots: true,
    // Sort stories individually
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
      if (categoryOfA === 'Foundation') {
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
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
  },
});

// Create custom Storybook UI elements with context
const contexts = [
  // Add custom color scheme switch
  {
    icon: 'eye',
    title: 'Themes',
    components: [
      ({ newColorScheme, children }) => {
        const [colorScheme, setColorScheme] = useContext(ColorScheme);
        useLayoutEffect(() => {
          const viewMode = getSearchParam('viewMode');
          // Update our custom color scheme context in Theme component
          setColorScheme(viewMode === 'docs' ? getDeviceColorScheme() : newColorScheme);
        }, [newColorScheme, location]);
        return <>{children}</>;
      },
    ],
    params: [
      {
        name: 'Light mode',
        props: { newColorScheme: 'light' },
        default: getDeviceColorScheme() === 'light',
      },
      {
        name: 'Dark mode',
        props: { newColorScheme: 'dark' },
        default: getDeviceColorScheme() === 'dark',
      },
    ],
    options: {
      deep: false,
      disable: false,
      cancelable: false,
    },
  },
];

// Wrap every story in the contexts addon
addDecorator(withContexts(contexts));

// Wrap every story in React strict mode and our custom Theme component
addDecorator(story => {
  const noPadding = useParameter('noPadding', false);
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={`sb-decorator${noPadding ? ' no-padding' : ''}`}>{story()}</div>
      </ThemeProvider>
    </BrowserRouter>
  );
});

// Wrap every story in the a11y addon
addDecorator(withA11y);

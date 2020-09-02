import React, { useLayoutEffect } from 'react';
import { ViewProps } from './Page-types';
import { Page, MainAppCSS, SingleFormCSS } from './Page-styles';

/**
 * A wrapper component that covers the entire content
 * of the page and provides layout relevant CSS code.
 */
export const PageView: React.FC<ViewProps> = React.memo(({ variant, children }) => {
  // Reset scroll position and focus when page changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('root')?.focus();
  }, []);

  return (
    <Page className={`Page ${variant.replace('_', '-')}`}>
      {variant === 'main_app' && <MainAppCSS />}
      {variant === 'single_form' && <SingleFormCSS />}
      {children}
    </Page>
  );
});

export default PageView;

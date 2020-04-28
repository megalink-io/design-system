import React from 'react';
import { ViewProps } from './Page-types';
import { Page, MainAppCSS, SingleFormCSS } from './Page-styles';

/**
 * A wrapper component that covers the entire content
 * of the page and provides layout relevant CSS code.
 * */
export const PageView: React.FC<ViewProps> = React.memo(({ variant, children }) => (
  <Page className={`Page ${variant.replace('_', '-')}`}>
    {variant === 'main_app' && <MainAppCSS />}
    {variant === 'single_form' && <SingleFormCSS />}
    {children}
  </Page>
));

export default PageView;

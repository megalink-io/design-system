import React, { useRef, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorScheme } from 'context';
import { ContainerProps } from './Tabs-types';
import TabsView from './Tabs-view';

/**
 * Tabs organize content into multiple sections
 * and allow users to navigate between them.
 * */
export const TabsContainer: React.FC<ContainerProps> = React.memo(props => {
  const location = useLocation();
  const [colorScheme] = useContext(ColorScheme);
  const scrollbarElementRef = useRef<HTMLElement>(null);

  // Update indicator and scroll position when location changes
  useEffect(() => {
    if (scrollbarElementRef.current) {
      const scrollbarElement = scrollbarElementRef.current;
      const activeTabElement = scrollbarElement.querySelector<HTMLAnchorElement>('.active');
      const indicatorElement = scrollbarElement.querySelector<HTMLSpanElement>('span');
      if (indicatorElement) {
        if (activeTabElement) {
          // Update indicator position and width
          indicatorElement.style.left = `${activeTabElement.offsetLeft}px`;
          indicatorElement.style.width = `${activeTabElement.offsetWidth}px`;
          indicatorElement.classList.add('active');
          // Update scrollbar scroll position
          const leftSpacing = (scrollbarElement.offsetWidth - activeTabElement.offsetWidth) / 2;
          const newScrollLeft = activeTabElement.offsetLeft - leftSpacing;
          scrollbarElement.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        } else {
          indicatorElement.classList.remove('active');
        }
      }
    }
  }, [location, colorScheme]);

  return <TabsView {...props} scrollbarElementRef={scrollbarElementRef} />;
});

export default TabsContainer;

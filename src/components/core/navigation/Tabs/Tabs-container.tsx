import React, { useRef, useEffect, useContext, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorScheme, DeviceType } from 'context';
import { getHashCode } from 'helpers';
import { ContainerProps } from './Tabs-types';
import TabsView from './Tabs-view';

const getPrevElements = (hashCode: number) => {
  const prevScrollbarElement = document.querySelector<HTMLElement>(
    `.hash-${hashCode} nav`
  );
  if (prevScrollbarElement) {
    const prevIndicatorElement = prevScrollbarElement.querySelector<HTMLSpanElement>(
      'span'
    );
    if (prevIndicatorElement) {
      return {
        scrollbarElement: {
          scrollLeft: prevScrollbarElement.scrollLeft,
        },
        indicatorElement: {
          style: {
            left: prevIndicatorElement.style.left,
            width: prevIndicatorElement.style.width,
          },
        },
      };
    }
  }
  return null;
};

/**
 * Tabs organize content into multiple sections
 * and allow users to navigate between them.
 */
export const TabsContainer: React.FC<ContainerProps> = React.memo((props) => {
  const { tabs } = props;
  const location = useLocation();
  const [colorScheme] = useContext(ColorScheme);
  const [deviceType] = useContext(DeviceType);
  const scrollbarElementRef = useRef<HTMLElement>(null);
  const hashCode = getHashCode(tabs);
  const [prevElements] = useState(() => getPrevElements(hashCode));

  // Keep indicator and scroll position persistent between route changes
  useLayoutEffect(() => {
    if (prevElements && scrollbarElementRef.current) {
      const scrollbarElement = scrollbarElementRef.current;
      const indicatorElement = scrollbarElement.querySelector<HTMLSpanElement>('span');
      if (indicatorElement) {
        // Change indicator position and width
        indicatorElement.style.left = prevElements.indicatorElement.style.left;
        indicatorElement.style.width = prevElements.indicatorElement.style.width;
        indicatorElement.classList.add('active');
        // Change scrollbar scroll position
        scrollbarElement.scrollLeft = prevElements.scrollbarElement.scrollLeft;
      }
    }
  }, [prevElements]);

  // Update indicator and scroll position when location changes
  useEffect(() => {
    if (scrollbarElementRef.current) {
      const scrollbarElement = scrollbarElementRef.current;
      const activeTabElement = scrollbarElement.querySelector<HTMLAnchorElement>(
        '.active'
      );
      const indicatorElement = scrollbarElement.querySelector<HTMLSpanElement>('span');
      if (indicatorElement) {
        if (activeTabElement) {
          // Update indicator position and width
          indicatorElement.style.left = `${activeTabElement.offsetLeft}px`;
          indicatorElement.style.width = `${activeTabElement.offsetWidth}px`;
          indicatorElement.classList.add('active');
          // Update scrollbar scroll position
          const leftSpacing =
            (scrollbarElement.offsetWidth - activeTabElement.offsetWidth) / 2;
          const newScrollLeft = activeTabElement.offsetLeft - leftSpacing;
          scrollbarElement.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
          });
        } else {
          indicatorElement.classList.remove('active');
        }
      }
    }
  }, [location, colorScheme, deviceType]);

  return (
    <TabsView {...props} scrollbarElementRef={scrollbarElementRef} hashCode={hashCode} />
  );
});

export default TabsContainer;

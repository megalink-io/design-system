import React, { useContext, useCallback } from 'react';
import { IconButton } from '../../actions';
import { ColorScheme } from '../../../../context';
import {
  HouseSVG,
  ListSVG,
  FolderSVG,
  SunSVG,
  NightSVG,
  AlarmSVG,
  GearSVG,
} from '../../../../icons';
import SideBar from '.';

export const SideBarPreview: React.FC = () => {
  const [colorScheme, setColorScheme] = useContext(ColorScheme);

  const changeColorScheme = useCallback(() => {
    setColorScheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <SideBar
      topMenu={
        <>
          <IconButton
            icon={<HouseSVG />}
            label="Home"
            variant="tertiary"
            color="white"
            type="link"
            to="/"
            exact
          />
          <IconButton
            icon={<ListSVG />}
            label="Link pages"
            variant="tertiary"
            color="white"
            type="link"
            to="/link-pages"
          />
          <IconButton
            icon={<FolderSVG />}
            label="Media library"
            variant="tertiary"
            color="white"
            type="link"
            to="/media-library"
          />
        </>
      }
      bottomMenu={
        <>
          <IconButton
            icon={colorScheme === 'light' ? <NightSVG /> : <SunSVG />}
            label="Color scheme"
            variant="tertiary"
            color="white"
            type="button"
            onClick={changeColorScheme}
          />
          <IconButton
            icon={<AlarmSVG />}
            label="Notifications"
            variant="tertiary"
            color="white"
            type="link"
            to="/notifications"
            counter={7}
          />
          <IconButton
            icon={<GearSVG />}
            label="Settings"
            variant="tertiary"
            color="white"
            type="link"
            to="/settings"
          />
        </>
      }
    />
  );
};

export default {
  title: 'Components/core/navigation/SideBar',
  includeStories: [],
};

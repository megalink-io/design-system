import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DeviceType } from 'context';
import { ContainerProps } from './NavTable-types';
import NavTableView from './NavTable-view';

/** A table that is used for navigation and clearly shows useful data. */
export const NavTableContainer: React.FC<ContainerProps> = React.memo((props) => {
  const history = useHistory();
  const [deviceType] = useContext(DeviceType);

  const handleRowClick = (to: string) => {
    history.push(to);
  };

  return <NavTableView {...props} deviceType={deviceType} onRowClick={handleRowClick} />;
});

export default NavTableContainer;

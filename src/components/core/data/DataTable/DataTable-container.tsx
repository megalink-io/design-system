import React, { useContext } from 'react';
import { DeviceType } from 'context';
import { ContainerProps } from './DataTable-types';
import DataTableView from './DataTable-view';

/** A simple data table that clearly displays information. */
export const DataTableContainer: React.FC<ContainerProps> = React.memo((props) => {
  const [deviceType] = useContext(DeviceType);
  return <DataTableView {...props} deviceType={deviceType} />;
});

export default DataTableContainer;

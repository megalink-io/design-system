import React from 'react';
import { ViewProps } from './DataTable-types';
import { DataTable, Head, Body, Row, Header, Data } from './DataTable-styles';

const DataTableView: React.FC<ViewProps> = ({ headers, rows, deviceType, headless }) => (
  <DataTable className={`DataTable${headless ? ' headless' : ''}`}>
    {!headless && (
      <Head>
        <Row>
          {headers.map((header) =>
            !header.visibility || header.visibility.includes(deviceType) ? (
              <Header key={header.key} align={header.align} primary={header.primary}>
                {header.label}
              </Header>
            ) : undefined
          )}
        </Row>
      </Head>
    )}
    <Body>
      {rows.map((row) => (
        <Row key={row.id}>
          {headers.map((header) =>
            !header.visibility || header.visibility.includes(deviceType) ? (
              <Data key={header.key} align={header.align} primary={header.primary}>
                {row[header.key] || ''}
              </Data>
            ) : undefined
          )}
        </Row>
      ))}
    </Body>
  </DataTable>
);

export default DataTableView;

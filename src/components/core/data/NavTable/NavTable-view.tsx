import React from 'react';
import { ViewProps } from './NavTable-types';
import { NavTable, Head, Body, Row, Header, Data } from './NavTable-styles';

const NavTableView: React.FC<ViewProps> = ({
  headers,
  rows,
  deviceType,
  onRowClick,
  onRowMouseEnter,
  headless,
}) => (
  <NavTable className={`NavTable${headless ? ' headless' : ''}`}>
    {!headless && (
      <Head>
        <Row>
          {headers.map(header =>
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
      {rows.map(row => (
        <Row
          key={row.id}
          onClick={() => onRowClick(row.to)}
          onMouseEnter={onRowMouseEnter ? () => onRowMouseEnter(row.id) : undefined}
        >
          {headers.map(header =>
            !header.visibility || header.visibility.includes(deviceType) ? (
              <Data key={header.key} align={header.align} primary={header.primary}>
                {row[header.key] || ''}
              </Data>
            ) : undefined
          )}
        </Row>
      ))}
    </Body>
  </NavTable>
);

export default NavTableView;

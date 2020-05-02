import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { StatusLight } from '../../status';
import NavTable from '.';

export const navTablePreview: React.FC = () => (
  <NavTable
    headers={[
      {
        key: 'status',
        label: 'Status',
      },
      {
        key: 'name',
        label: 'Name',
        primary: true,
      },
      {
        key: 'views',
        label: 'Views',
        align: 'right',
      },
      {
        key: 'clicks',
        label: 'Clicks',
        align: 'right',
        visibility: ['desktop', 'tablet'],
      },
    ]}
    rows={[
      {
        id: 'jA9j2Qm8',
        to: '/link-pages/jA9j2Qm8',
        status: <StatusLight color="green" />,
        name: 'Instagram bio link',
        views: '1,632 views',
        clicks: '326 clicks',
      },
      {
        id: 'a2d82Hs7',
        to: '/link-pages/a2d82Hs7',
        status: <StatusLight color="green" />,
        name: 'Black friday sale',
        views: '853 views',
        clicks: '258 clicks',
      },
      {
        id: 'H83js3hD',
        to: '/link-pages/H83js3hD',
        status: <StatusLight color="green" disabled />,
        name: 'Design contest',
        views: '235 views',
        clicks: '47 clicks',
      },
    ]}
    onRowMouseEnter={action('onRowMouseEnter')}
    headless={boolean('Headless', true)}
  />
);

export default {
  title: 'Components/core/data/NavTable',
  includeStories: [],
};

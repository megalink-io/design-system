import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import DataTable from '.';

export const navTablePreview: React.FC = () => (
  <DataTable
    headers={[
      {
        key: 'url',
        label: 'URL',
        primary: true,
      },
      {
        key: 'views',
        label: 'Views',
        align: 'right',
        visibility: ['desktop', 'tablet'],
      },
      {
        key: 'clicks',
        label: 'Clicks',
        align: 'right',
      },
      {
        key: 'ctr',
        label: 'CTR',
        align: 'right',
        visibility: ['desktop', 'tablet'],
      },
    ]}
    rows={[
      {
        id: 'website',
        url: 'website.com/contact',
        views: '102 views',
        clicks: '15 clicks',
        ctr: '14.7%',
      },
      {
        id: 'youtube',
        url: 'youtube.com/channel',
        views: '87 views',
        clicks: '6 clicks',
        ctr: '6.9%',
      },
      {
        id: 'instagram',
        url: 'instagram.com/username',
        views: '87 views',
        clicks: '1 clicks',
        ctr: '0.1%',
      },
    ]}
    headless={boolean('Headless', false)}
  />
);

export default {
  title: 'Components/core/data/DataTable',
  includeStories: [],
};

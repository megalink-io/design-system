import * as Types from 'types';

export type Align = 'left' | 'right' | undefined;

export interface ContainerProps {
  headers: {
    key: string;
    label: string;
    align?: Align;
    visibility?: Array<'desktop' | 'tablet' | 'mobile'>;
    primary?: boolean;
  }[];
  rows: {
    id: string;
    to: string;
    [key: string]: React.ReactNode | string | number;
  }[];
  onRowMouseEnter?: (id: String) => void;
  headless?: boolean;
}

export interface ViewProps extends ContainerProps {
  deviceType: Types.DeviceType;
  onRowClick: (to: string) => void;
}

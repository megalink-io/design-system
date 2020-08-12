export interface HorizontalProps {
  horizontal: boolean;
}

export interface VerticalProps {
  vertical: boolean;
  maxHeight: string;
}

export type ViewProps = HorizontalProps | VerticalProps;

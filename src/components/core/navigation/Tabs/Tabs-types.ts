export interface ContainerProps {
  tabs: {
    label: string;
    to: string;
    replace?: boolean;
    exact?: boolean;
  }[];
}

export interface ViewProps extends ContainerProps {
  scrollbarElementRef: React.RefObject<HTMLElement>;
}

export interface ContainerProps {
  error: string;
}

export interface ViewProps extends ContainerProps {
  errorElement: React.RefObject<HTMLDivElement>;
}

export interface ContainerProps {
  status: '' | 'information' | 'success' | 'error';
  message: string;
}

export interface ViewProps extends ContainerProps {
  className: string;
  currentMessage: string;
  responseElement: React.MutableRefObject<HTMLDivElement | null>;
}

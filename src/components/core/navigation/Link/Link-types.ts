interface DefaultProps {
  /** - */
  children: React.ReactNode | string;
}

export interface ExternalLinkProps extends DefaultProps {
  href: string;
  target?: '_blank';
  download?: boolean | string;
}

export interface InternalLinkProps extends DefaultProps {
  to: string;
  replace?: boolean;
}

export type ViewProps = ExternalLinkProps | InternalLinkProps;
